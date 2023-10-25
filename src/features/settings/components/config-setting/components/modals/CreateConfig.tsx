import * as React from "react";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { SelectForModals } from "../selectForModals/SelectForModals";
import Image from "next/image";
import DelaysForModals from "../delaysForModals/DelaysForModals";
import InputForModals from "../inputForModals/InputForModals";
import ConfigModalsStyles from "./styles";
import { useConfigDrawerStore } from "@/store/configStore";
import CustomSwitch from "../switches/CustomSwitch";
import CustomCheckbox from "../checkbox/CustomCheckbox";
import CarriersInput from "../inputForModals/CarriersInput";
import { useState, useEffect } from "react";
import { StandTypesMultiSelect } from "../selectForModals/MultiSelect";
import { useGetEventsAPI } from "@/apis/settings/rename-event/useGetEventsAPI";
import { createConfiguration } from "@/apis/settings/config-setting/createConfiguration";
import { useMutation, useQueryClient } from "react-query";
import { Backdrop } from "@mui/material";
import { editConfiguration } from "@/apis/settings/config-setting/editConfiguration";
import { getConfigurationById } from "@/apis/settings/config-setting/getConfigurationById";
import { RadioButtonsGroup } from "../radios/RadioButtonsGroup";
import ColonIcon from "@/__assets/icons/ColonIcon";
import { format } from "date-fns";
import { CustTimeField } from "../inputForModals/CustTimeField";

const typesEn = ["Connected", "Disconnected"];
const typesAr = ["متصل", "انقطع الاتصال"];

const standTypesEn = ["Contact", "Mars", "Remote"];
const standTypesAr = ["اتصال", "المريخ", "بعيد"];

const translations = {
  Connected: "متصل",
  متصل: "Connected",
  Disconnected: "انقطع الاتصال",
  "انقطع الاتصال": "Disconnected",
  "Narrow Body": "الجسم الضيق",
  "الجسم الضيق": "Narrow Body",
  "Wide Body": "هيئة واسعة",
  "هيئة واسعة": "Wide Body",
  Day: "يوم",
  يوم: "Day",
  Night: "ليلة",
  ليلة: "Night",
  Both: "كلاهما",
  كلاهما: "Both",
};

export const CreateConfig = ({ refetchConfigData }: any) => {
  const { data: allEvents } = useGetEventsAPI();
  const queryClient = useQueryClient();

  const configDrawerInfo = useConfigDrawerStore((state) => state.configDrawerInfo);
  const setConfigDrawerInfo = useConfigDrawerStore((state) => state.setConfigDrawerInfo);

  const [configDataById, setConfigDataById] = useState<any>([]);

  const [headingText, setHeadingText] = useState<any>("");
  const [buttonText, setButtonText] = useState<any>("");
  const [showStartDelayThreshold, setShowStartDelayThreshold] = useState(false);
  const [isInfiniteOccurrence, setIsInfiniteOccurrence] = useState(false);
  const [event, setEvent] = useState("");
  const [linkedEvent, setLinkedEvent] = useState("optional");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showDependencyType, setShowDependencyType] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const [tempStandTypes, setTempStandTypes] = useState([]);
  const [minOccurrenceError, setMinOccurrenceError] = useState<any>(true);

  const [eventId, setEventId] = useState<any>(null);
  const [eventType, setEventType] = useState<any>(null);
  const [minOccurrence, setMinOccurrence] = useState<any>(0);
  const [maxOccurrence, setMaxOccurrence] = useState<any>(1);
  const [linkedEventId, setLinkedEventId] = useState<any>(null);
  const [dependencyType, setDependencyType] = useState<any>(null);
  const [minStartDelay, setMinStartDelay] = useState<any>(null);
  const [middleStartDelay, setMiddleStartDelay] = useState<any>(null);
  const [maxStartDelay, setMaxStartDelay] = useState<any>(null);
  const [idealDuration, setIdealDuration] = useState<any>(null);
  const [minEndDelay, setMinEndDelay] = useState<any>(null);
  const [middleEndDelay, setMiddleEndDelay] = useState<any>(null);
  const [maxEndDelay, setMaxEndDelay] = useState<any>(null);
  const [standType, setStandType] = useState<any>(null);
  const [carriers, setCarriers] = useState<any>([]);
  const [aircraftType, setAircraftType] = useState<any>(null);
  const [timeOfDay, setTimeOfDay] = useState<any>(null);

  const [errorMessage, setErrorMessage] = useState<any>(null);

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");

  // Set drawer mode //
  useEffect(() => {
    const first = async () => {
      if (configDrawerInfo.create) {
        setHeadingText(t("create-config"));
        setButtonText(t("create"));
      } else if (configDrawerInfo.edit) {
        setHeadingText(t("edit-config"));
        setButtonText(t("save-changes"));
        const data = await getConfigurationById(configDrawerInfo?.id);
        setConfigDataById(data);
      } else if (configDrawerInfo.duplicate) {
        setHeadingText(t("duplicate-config"));
        setButtonText(t("create"));
        const data = await getConfigurationById(configDrawerInfo?.id);
        setConfigDataById(data);
      }
    };
    first();
  }, [configDrawerInfo]);

  useEffect(() => {
    if (configDataById.length) {
      setConfigFormValues(configDataById[0]);
    }
  }, [configDataById]);

  useEffect(() => {
    setMaxOccurrence(isInfiniteOccurrence ? -1 : 1);
  }, [isInfiniteOccurrence]);

  useEffect(() => {
    if (minOccurrence == 0 || minOccurrence == 1) {
      setMinOccurrenceError(false);
    } else {
      setMinOccurrenceError(true);
    }
  }, [minOccurrence]);

  useEffect(() => {
    setIsInfiniteOccurrence(maxOccurrence === -1 ? true : false);
  }, [maxOccurrence]);

  useEffect(() => {
    setEventId(
      allEvents?.filter((item) => {
        if (!isArabic ? item.name_en === event : item.name_ar === event) {
          return item;
        }
      })[0]?.id || null,
    );
  }, [event]);

  useEffect(() => {
    if (linkedEvent !== "optional") {
      setLinkedEventId(
        allEvents?.filter((item) => {
          if (!isArabic ? item.name_en === linkedEvent : item.name_ar === linkedEvent) {
            return item;
          }
        })[0]?.id || null,
      );
      setShowDependencyType(true);
    } else {
      setLinkedEventId(null);
      setShowDependencyType(false);
      setShowStartDelayThreshold(false);
    }
  }, [linkedEvent]);

  // handleButtonDisabled function //
  useEffect(() => {
    const handleButtonDisabled = () => {
      const areRequiredFieldsMissing =
        event === null ||
        eventId === null ||
        eventType === null ||
        minOccurrence === null ||
        minOccurrence === "" ||
        minOccurrenceError ||
        maxOccurrence === null ||
        idealDuration === null ||
        idealDuration === "" ||
        minEndDelay === null ||
        minEndDelay === "" ||
        middleEndDelay === null ||
        middleEndDelay === "" ||
        maxEndDelay === null ||
        maxEndDelay === "" ||
        standType === null ||
        standType === "" ||
        carriers.length === 0 ||
        aircraftType === null ||
        aircraftType === "" ||
        timeOfDay === null ||
        timeOfDay === "";

      const areLinkedEventFieldsMissing =
        showDependencyType && (linkedEvent === null || linkedEventId === null || dependencyType === null);

      const areStartDelayFieldsMissing =
        showStartDelayThreshold &&
        (minStartDelay === null ||
          minStartDelay === "" ||
          middleStartDelay === null ||
          middleStartDelay === "" ||
          maxStartDelay === "" ||
          maxStartDelay === null);

      const isDisabled = areRequiredFieldsMissing || areLinkedEventFieldsMissing || areStartDelayFieldsMissing;

      setButtonDisabled(isDisabled);
    };

    handleButtonDisabled();
  }, [
    event,
    eventId,
    eventType,
    minOccurrence,
    minOccurrenceError,
    maxOccurrence,
    linkedEvent,
    linkedEventId,
    dependencyType,
    minStartDelay,
    middleStartDelay,
    maxStartDelay,
    idealDuration,
    minEndDelay,
    middleEndDelay,
    maxEndDelay,
    standType,
    carriers.length,
    aircraftType,
    timeOfDay,
    showStartDelayThreshold,
    showDependencyType,
  ]);

  useEffect(() => {
    if (!showStartDelayThreshold) {
      setMinStartDelay("");
      setMiddleStartDelay("");
      setMaxStartDelay("");
    }
  }, [showStartDelayThreshold]);

  const { mutate: createConfig, isLoading } = useMutation(createConfiguration, {
    onSuccess: (data) => {
      console.log("Create config Successss...", data);
      refetchConfigData();
      handleCloseDrawer();
      clearConfigFormValues();
      setIsCancelled(true);
    },
    onError: (error: any) => {
      console.log("Create config Errorrrr...", error);
      setErrorMessage(error?.response?.data?.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  const { mutate: editConfig, isLoading: editLoading } = useMutation(
    (variables: any) => editConfiguration(variables?.id, variables?.payload),
    {
      onSuccess: (data) => {
        console.log("Edit config Successss...", data);
        refetchConfigData();
        handleCloseDrawer();
        clearConfigFormValues();
        setIsCancelled(true);
      },
      onError: (error: any) => {
        console.log("Edit config Errorrrr...", error);
        setErrorMessage(error?.response?.data?.message);
      },
      onSettled: () => {
        queryClient.invalidateQueries("edit");
      },
    },
  );

  const handleConfigSubmit = async () => {
    const configData = {
      eventId: eventId,
      event_type_en: isArabic ? translations[eventType] : eventType,
      event_type_ar: isArabic ? eventType : translations[eventType],
      minOccurrence: minOccurrence,
      maxOccurrence: maxOccurrence,
      linkedEventId: linkedEventId,
      dependency_type_en: isArabic ? translations[dependencyType] : dependencyType,
      dependency_type_ar: isArabic ? dependencyType : translations[dependencyType],
      startDelayThresholds: showStartDelayThreshold,
      minStartDelay: parseInt(minStartDelay) || null,
      middleStartDelay: parseInt(middleStartDelay) || null,
      maxStartDelay: parseInt(maxStartDelay) || null,
      idealDuration: parseInt(idealDuration),
      minEndDelay: parseInt(minEndDelay),
      middleEndDelay: parseInt(middleEndDelay),
      maxEndDelay: parseInt(maxEndDelay),
      stand_type_en: isArabic ? "امتحان" : standType,
      stand_type_ar: isArabic ? standType : "امتحان",
      aircraft_type_en: isArabic ? translations[aircraftType] : aircraftType,
      aircraft_type_ar: isArabic ? aircraftType : translations[aircraftType],
      time_of_day_en: isArabic ? translations[timeOfDay] : timeOfDay,
      time_of_day_ar: isArabic ? timeOfDay : translations[timeOfDay],
      priority: 1,
    };

    const postData = {
      config: configData,
      carrierIds: carriers,
    };

    if (configDrawerInfo?.create || configDrawerInfo?.duplicate) {
      createConfig(postData);
    } else if (configDrawerInfo?.edit) {
      editConfig({ id: configDrawerInfo?.id, payload: postData });
    }
  };

  const handleCloseDrawer = () => {
    clearConfigFormValues();
    setShowStartDelayThreshold(false);
    setIsCancelled(true);
    setTempStandTypes([]);
  };

  const clearConfigFormValues = () => {
    setEvent("");
    setLinkedEvent("optional");
    setEventId(null);
    setEventType(null);
    setMinOccurrence(0);
    setMaxOccurrence(1);
    setLinkedEventId(null);
    setDependencyType(null);
    setMinStartDelay(null);
    setMiddleStartDelay(null);
    setMaxStartDelay(null);
    setIdealDuration(null);
    setMinEndDelay(null);
    setMiddleEndDelay(null);
    setMaxEndDelay(null);
    setStandType(null);
    setCarriers([]);
    setAircraftType(null);
    setTimeOfDay(null);
    setIsInfiniteOccurrence(false);
    setErrorMessage(null);

    setConfigDrawerInfo({
      open: false,
      id: "",
      create: false,
      edit: false,
      duplicate: false,
    });
  };

  const setConfigFormValues = (data: any) => {
    setEvent(!isArabic ? data?.event?.name_en : data?.event?.name_ar);
    data?.linkedEvent !== null
      ? setLinkedEvent(!isArabic ? data?.linkedEvent?.name_en : data?.linkedEvent?.name_ar)
      : setLinkedEvent("optional");
    setEventId(data?.eventId);
    setEventType(!isArabic ? data?.event_type_en : data?.event_type_ar);
    setMinOccurrence(data?.minOccurrence);
    setMaxOccurrence(data?.maxOccurrence);
    setLinkedEventId(data?.linkedEventId);
    setDependencyType(!isArabic ? data?.dependency_type_en : data?.dependency_type_ar);
    setMinStartDelay(data?.minStartDelay);
    setMiddleStartDelay(data?.middleStartDelay);
    setMaxStartDelay(data?.maxStartDelay);
    setIdealDuration(data?.idealDuration);
    setMinEndDelay(data?.minEndDelay);
    setMiddleEndDelay(data?.middleEndDelay);
    setMaxEndDelay(data?.maxEndDelay);
    setTempStandTypes(
      !isArabic
        ? data?.configCarriers[0]?.carrierFactor?.stand_type_en.split(",")
        : data?.configCarriers[0]?.carrierFactor?.stand_type_ar.split(","),
    );
    setCarriers(
      data?.configCarriers?.map((item) => {
        return item?.carrierFactor?.carrier?.id;
      }),
    );
    setAircraftType(
      !isArabic
        ? data?.configCarriers[0]?.carrierFactor?.aircraft_type_en
        : data?.configCarriers[0]?.carrierFactor?.aircraft_type_ar,
    );
    setTimeOfDay(
      !isArabic
        ? data?.configCarriers[0]?.carrierFactor?.time_of_day_en
        : data?.configCarriers[0]?.carrierFactor?.time_of_day_ar,
    );
    data?.minStartDelay ? setShowStartDelayThreshold(true) : setShowStartDelayThreshold(false);
    data?.linkedEvent ? setShowDependencyType(true) : setShowDependencyType(false);
  };

  const handleBackdropClick = () => {
    handleCloseDrawer();
  };

  return (
    <>
      <ConfigModalsStyles.Container>
        <ConfigModalsStyles.HeadingContainer>
          <ConfigModalsStyles.Heading>{headingText}</ConfigModalsStyles.Heading>
          <Image
            src="/close2.png"
            alt="close icon"
            width={23}
            height={23}
            style={{ cursor: "pointer" }}
            onClick={handleCloseDrawer}
          />
        </ConfigModalsStyles.HeadingContainer>

        <ConfigModalsStyles.SubContainer>
          <ConfigModalsStyles.FeildContainer>
            <ConfigModalsStyles.FeildTextContainer>
              <ConfigModalsStyles.FeildText>{t("event-name")}</ConfigModalsStyles.FeildText>
            </ConfigModalsStyles.FeildTextContainer>
            <ColonIcon />
            <SelectForModals
              data={allEvents?.map((item) => {
                return !isArabic ? item.name_en : item.name_ar;
              })}
              value={event}
              setValue={setEvent}
              dropdownType={"event"}
            />
          </ConfigModalsStyles.FeildContainer>

          <ConfigModalsStyles.FeildContainer>
            <ConfigModalsStyles.FeildTextContainer>
              <ConfigModalsStyles.FeildText>{t("event-type")}</ConfigModalsStyles.FeildText>
            </ConfigModalsStyles.FeildTextContainer>
            <ColonIcon />
            <SelectForModals
              data={isArabic ? typesAr : typesEn}
              value={eventType}
              setValue={setEventType}
              dropdownType={"eventType"}
            />
          </ConfigModalsStyles.FeildContainer>

          <div>
            <ConfigModalsStyles.FeildContainer>
              <ConfigModalsStyles.FeildTextContainer>
                <ConfigModalsStyles.FeildText>{t("no-of-occurrence")}</ConfigModalsStyles.FeildText>
              </ConfigModalsStyles.FeildTextContainer>
              <ColonIcon />
              <ConfigModalsStyles.PlainDiv sx={{ gap: "20px" }}>
                <ConfigModalsStyles.PlainSubDiv>
                  <ConfigModalsStyles.PlainText>{t("min")}</ConfigModalsStyles.PlainText>
                  <InputForModals value={minOccurrence} setValue={setMinOccurrence} isDisabled={false} />
                </ConfigModalsStyles.PlainSubDiv>
                <ConfigModalsStyles.PlainSubDiv>
                  <ConfigModalsStyles.PlainText>{t("max")}</ConfigModalsStyles.PlainText>
                  <InputForModals value={maxOccurrence} setValue={setMaxOccurrence} isDisabled={true} />
                </ConfigModalsStyles.PlainSubDiv>
                <CustomCheckbox
                  label={t("infinite")}
                  setIsInfiniteOccurrence={setIsInfiniteOccurrence}
                  isInfiniteOccurrence={isInfiniteOccurrence}
                />
              </ConfigModalsStyles.PlainDiv>
            </ConfigModalsStyles.FeildContainer>
            {minOccurrenceError && (
              <p
                style={{
                  width: "65%",
                  display: "flex",
                  marginLeft: "auto",
                  color: "red",
                }}
              >
                Please enter Min value 0 or 1
              </p>
            )}
          </div>

          <ConfigModalsStyles.FeildContainer>
            <ConfigModalsStyles.FeildTextContainer>
              <ConfigModalsStyles.FeildText>{t("linked-event")}</ConfigModalsStyles.FeildText>
            </ConfigModalsStyles.FeildTextContainer>
            <ColonIcon />
            <SelectForModals
              data={allEvents?.map((item) => {
                return !isArabic ? item.name_en : item.name_ar;
              })}
              value={linkedEvent}
              setValue={setLinkedEvent}
              dropdownType={"linkedEvent"}
            />
          </ConfigModalsStyles.FeildContainer>

          {showDependencyType && (
            <ConfigModalsStyles.FeildContainer>
              <ConfigModalsStyles.FeildTextContainer>
                <ConfigModalsStyles.FeildText>{t("dependency-type")}</ConfigModalsStyles.FeildText>
              </ConfigModalsStyles.FeildTextContainer>
              <ColonIcon />
              <SelectForModals
                data={isArabic ? typesAr : typesEn}
                value={dependencyType}
                setValue={setDependencyType}
                dropdownType={"dependencyType"}
              />
            </ConfigModalsStyles.FeildContainer>
          )}

          <ConfigModalsStyles.FeildContainer>
            <ConfigModalsStyles.FeildTextContainer>
              <ConfigModalsStyles.FeildText>{t("start-delay-thresholds")}</ConfigModalsStyles.FeildText>
            </ConfigModalsStyles.FeildTextContainer>
            <ColonIcon />
            <ConfigModalsStyles.PlainDiv>
              <CustomSwitch
                linkedEvent={linkedEvent}
                showStartDelayThreshold={showStartDelayThreshold}
                setShowStartDelayThreshold={setShowStartDelayThreshold}
              />
            </ConfigModalsStyles.PlainDiv>
          </ConfigModalsStyles.FeildContainer>

          {showStartDelayThreshold && (
            <ConfigModalsStyles.FeildContainer>
              <ConfigModalsStyles.FeildTextContainer>
                <ConfigModalsStyles.FeildText>{t("start-delay-thresholds")}</ConfigModalsStyles.FeildText>
              </ConfigModalsStyles.FeildTextContainer>
              <ColonIcon />
              <DelaysForModals
                values={{
                  minDelay: minStartDelay,
                  middleDelay: middleStartDelay,
                  maxDelay: maxStartDelay,
                }}
                setValues={{
                  setMinDelay: setMinStartDelay,
                  setMiddleDelay: setMiddleStartDelay,
                  setMaxDelay: setMaxStartDelay,
                }}
              />
            </ConfigModalsStyles.FeildContainer>
          )}

          <ConfigModalsStyles.FeildContainer>
            <ConfigModalsStyles.FeildTextContainer>
              <ConfigModalsStyles.FeildText>{t("ideal-duration")}</ConfigModalsStyles.FeildText>
            </ConfigModalsStyles.FeildTextContainer>
            <ColonIcon />
            <div style={{ width: "65%" }}>
              <CustTimeField value={idealDuration} setValue={setIdealDuration} color={"#fff"} />
            </div>
            {/* <InputForModals
              value={idealDuration}
              setValue={setIdealDuration}
              defaultValue=""
              isDisabled={false}
            /> */}
          </ConfigModalsStyles.FeildContainer>

          <ConfigModalsStyles.FeildContainer>
            <ConfigModalsStyles.FeildTextContainer>
              <ConfigModalsStyles.FeildText>{t("end-delay-thresholds")}</ConfigModalsStyles.FeildText>
            </ConfigModalsStyles.FeildTextContainer>
            <ColonIcon />
            <DelaysForModals
              values={{
                minDelay: minEndDelay,
                middleDelay: middleEndDelay,
                maxDelay: maxEndDelay,
              }}
              setValues={{
                setMinDelay: setMinEndDelay,
                setMiddleDelay: setMiddleEndDelay,
                setMaxDelay: setMaxEndDelay,
              }}
            />
          </ConfigModalsStyles.FeildContainer>

          <ConfigModalsStyles.FeildContainer>
            <ConfigModalsStyles.FeildTextContainer>
              <ConfigModalsStyles.FeildText>{t("stand-type")}</ConfigModalsStyles.FeildText>
            </ConfigModalsStyles.FeildTextContainer>
            <ColonIcon />
            <StandTypesMultiSelect
              data={isArabic ? standTypesAr : standTypesEn}
              val={standType}
              setValue={setStandType}
              isCancelled={isCancelled}
              tempStandTypes={tempStandTypes}
            />
          </ConfigModalsStyles.FeildContainer>

          <ConfigModalsStyles.FeildContainer>
            <ConfigModalsStyles.FeildTextContainer>
              <ConfigModalsStyles.FeildText>{t("carrier")}</ConfigModalsStyles.FeildText>
            </ConfigModalsStyles.FeildTextContainer>
            <ColonIcon />
            <CarriersInput color="#fff" carriers={carriers} setCarriers={setCarriers} />
          </ConfigModalsStyles.FeildContainer>

          <ConfigModalsStyles.FeildContainer>
            <ConfigModalsStyles.FeildTextContainer>
              <ConfigModalsStyles.FeildText>{t("aircraft-type")}</ConfigModalsStyles.FeildText>
            </ConfigModalsStyles.FeildTextContainer>
            <ColonIcon />
            <ConfigModalsStyles.PlainDiv>
              <RadioButtonsGroup
                value={aircraftType}
                setValue={setAircraftType}
                value1={t("narrow-body")}
                value2={t("wide-body")}
                value3={t("both")}
              />
            </ConfigModalsStyles.PlainDiv>
          </ConfigModalsStyles.FeildContainer>

          <ConfigModalsStyles.FeildContainer>
            <ConfigModalsStyles.FeildTextContainer>
              <ConfigModalsStyles.FeildText>{t("time-of-day")}</ConfigModalsStyles.FeildText>
            </ConfigModalsStyles.FeildTextContainer>
            <ColonIcon />
            <ConfigModalsStyles.PlainDiv>
              <RadioButtonsGroup
                value={timeOfDay}
                setValue={setTimeOfDay}
                value1={t("day")}
                value2={t("night")}
                value3={t("both")}
              />
            </ConfigModalsStyles.PlainDiv>
          </ConfigModalsStyles.FeildContainer>
        </ConfigModalsStyles.SubContainer>

        {errorMessage && <ConfigModalsStyles.Error>{errorMessage}</ConfigModalsStyles.Error>}

        <ConfigModalsStyles.ButtonContainer
          style={{
            justifyContent: "flex-end",
            gap: "20px",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              width: "130px",
              height: "40px",
              color: "#fff",
              borderColor: "#fff",
              textTransform: "none",
              borderRadius: "0",
              cursor: "pointer",
              "&:hover": {
                borderColor: "#fff",
              },
            }}
            onClick={handleCloseDrawer}
          >
            {t("cancel")}
          </Button>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#06A7E0",
              color: "#fff",
              width: "130px",
              height: "40px",
              border: "none",
              textTransform: "none",
              borderRadius: "0",
              "&:hover": {
                backgroundColor: "#06A7E0",
              },
              "&:disabled": {
                color: "#fff",
                background: "#af9e9e30",
                cursor: "not-allowed",
                pointerEvents: "all !important",
              },
            }}
            onClick={handleConfigSubmit}
            disabled={buttonDisabled}
          >
            {isLoading ? "Loading..." : buttonText}
          </Button>
        </ConfigModalsStyles.ButtonContainer>
      </ConfigModalsStyles.Container>
      <Backdrop sx={{ zIndex: "-1", opacity: 0.1 }} open={configDrawerInfo.open} onClick={handleBackdropClick} />
    </>
  );
};
