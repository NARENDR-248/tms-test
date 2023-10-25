import React, { useEffect, useState } from "react";
import { usePopupState, bindTrigger, bindMenu } from "material-ui-popup-state/hooks";
import { useTranslation } from "react-i18next";
import FilterIcon from "@/__assets/icons/FilterIcon";
import ConfigFilterStyles from "./ConfigFilterStyles";
import { FilterSelect } from "./components/filterSelect/FilterSelect";
import { MultiSelect } from "./components/filterMultiSelect/MultiSelect";
import { CheckboxGroup } from "./components/checkboxGroup/CheckboxGroup";
import { FilterCarrierSelect } from "./components/filterCarriers/FilterCarriers";

const ConfigFilter = ({
  selectedEventId,
  setSelectedEventId,
  selectedLinkedEventIds,
  setSelectedLinkedEventIds,
  selectedCarriers,
  setSelectedCarriers,
  selectedAircraftTypes,
  setSelectedAircraftTypes,
  selectedTimeOfDay,
  setSelectedTimeOfDay,
}: any) => {
  const [eventId, setEventId] = useState<any>(selectedEventId);
  const [linkedEventIds, setLinkedEventIds] = useState<any>(selectedLinkedEventIds);
  const [carriers, setCarriers] = useState<any>(selectedCarriers);
  const [aircraftTypes, setAircraftTypes] = useState(selectedAircraftTypes);
  const [timeOfDay, setTimeOfDay] = useState(selectedTimeOfDay);

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");

  const handleFiltersApply = () => {
    setSelectedEventId(eventId);
    setSelectedLinkedEventIds(linkedEventIds);
    setSelectedCarriers(carriers);
    setSelectedAircraftTypes(aircraftTypes);
    setSelectedTimeOfDay(timeOfDay);
    popupState.close();
  };

  const handleClearFilter = () => {
    setEventId(null);
    setLinkedEventIds([]);
    setCarriers([]);
    setAircraftTypes([]);
    setTimeOfDay([]);
  };

  useEffect(() => {
    setEventId(null);
    setLinkedEventIds([]);
    setCarriers([]);
    setAircraftTypes([]);
    setTimeOfDay([]);
    setSelectedEventId(null);
    setSelectedLinkedEventIds([]);
    setSelectedCarriers([]);
    setSelectedAircraftTypes([]);
    setSelectedTimeOfDay([]);
  }, [isArabic]);

  ////// POPOVER STATE
  const popupState = usePopupState({
    variant: "popover",
    popupId: "turnaround",
  });

  return (
    <>
      <ConfigFilterStyles.MainButton
        variant="outlined"
        size="large"
        dir="ltr"
        sx={{
          gap: isArabic ? "12px" : "0",
        }}
        startIcon={<FilterIcon strokeColor={"#fff"} />}
        {...bindTrigger(popupState)}
      >
        {t("filter")}
      </ConfigFilterStyles.MainButton>
      <ConfigFilterStyles.CustomMenu
        MenuListProps={{
          sx: {
            maxWidth: "22em",
            width: "22em",
            padding: 0,
            borderRadius: "10px",
          },
        }}
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <ConfigFilterStyles.CustomBox>
          <ConfigFilterStyles.Connector sx={{ right: isArabic ? "165px" : "20px" }}></ConfigFilterStyles.Connector>
          <ConfigFilterStyles.Container>
            <ConfigFilterStyles.Filters>
              <ConfigFilterStyles.InputGroup>
                <ConfigFilterStyles.InputLabel>{t("event-name")}</ConfigFilterStyles.InputLabel>
                <FilterSelect eventId={eventId} setEventId={setEventId} />
              </ConfigFilterStyles.InputGroup>
              <ConfigFilterStyles.InputGroup>
                <ConfigFilterStyles.InputLabel>{t("linked-event")}</ConfigFilterStyles.InputLabel>
                <MultiSelect eventId={eventId} linkedEventIds={linkedEventIds} setLinkedEventIds={setLinkedEventIds} />
              </ConfigFilterStyles.InputGroup>
              <ConfigFilterStyles.InputGroup>
                <ConfigFilterStyles.InputLabel>{t("carrier")}</ConfigFilterStyles.InputLabel>
                <FilterCarrierSelect carriers={carriers} setCarriers={setCarriers} />
              </ConfigFilterStyles.InputGroup>
              <ConfigFilterStyles.InputGroup>
                <ConfigFilterStyles.InputLabel>{t("aircraft-type")}</ConfigFilterStyles.InputLabel>
                <CheckboxGroup
                  value1={t("narrow-body")}
                  value2={t("wide-body")}
                  value3={t("both")}
                  isLastChild={false}
                  values={aircraftTypes}
                  setValues={setAircraftTypes}
                />
              </ConfigFilterStyles.InputGroup>
              <ConfigFilterStyles.InputGroup>
                <ConfigFilterStyles.InputLabel>{t("time-of-day")}</ConfigFilterStyles.InputLabel>
                <CheckboxGroup
                  value1={t("day")}
                  value2={t("night")}
                  value3={t("both")}
                  isLastChild={true}
                  values={timeOfDay}
                  setValues={setTimeOfDay}
                />
              </ConfigFilterStyles.InputGroup>
            </ConfigFilterStyles.Filters>
            <ConfigFilterStyles.ButtonGroup>
              <ConfigFilterStyles.CustomButton
                variant="outlined"
                sx={{
                  borderColor: "#fff",
                  "&:hover": {
                    borderColor: "#fff",
                  },
                }}
                onClick={() => popupState.close()}
              >
                {t("cancel")}
              </ConfigFilterStyles.CustomButton>
              <ConfigFilterStyles.CustomButton
                variant="outlined"
                sx={{
                  borderColor: "#fff",
                  "&:hover": {
                    borderColor: "#fff",
                  },
                }}
                onClick={handleClearFilter}
              >
                {t("clear")}
              </ConfigFilterStyles.CustomButton>
              <ConfigFilterStyles.CustomButton
                variant="contained"
                sx={{
                  backgroundColor: "#06A7E0",
                  border: "none",
                  "&:hover": {
                    backgroundColor: "#06A7E0",
                  },
                  "&:disabled": {
                    color: "#fff",
                    background: "#af9e9e30",
                    cursor: "not-allowed",
                  },
                }}
                onClick={handleFiltersApply}
              >
                {t("apply")}
              </ConfigFilterStyles.CustomButton>
            </ConfigFilterStyles.ButtonGroup>
          </ConfigFilterStyles.Container>
        </ConfigFilterStyles.CustomBox>
      </ConfigFilterStyles.CustomMenu>
    </>
  );
};

export default ConfigFilter;
