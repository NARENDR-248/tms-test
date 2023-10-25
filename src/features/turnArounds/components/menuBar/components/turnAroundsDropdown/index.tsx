"use-client";

import { useTurnaroundsForGate } from "@/apis/turnArounds/useTurnaroundsForGate";
import { useTurnaroundStore } from "@/store/turnaroundStore";
import { formatDate, formatTime24Hours } from "@/utils/dateHelpers";
import theme from "@/utils/theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect, useRef } from "react";
import InputWithIcon from "./components/inputField";
import CarrierMultiSelect from "./components/carrierMultiSelect";
import GscMultiSelect from "./components/gscMultiSelect";
import DateFilter from "./components/datePicker";
import { useCarriersList } from "@/apis/turnArounds/useCarriersList";
import TurnaroundsDropdownStyles from "./styles";
import { Socket, io } from "socket.io-client";
import { getTurnAround } from "@/apis/turnArounds/getTurnAround";
import { useGroundServicesCompanies } from "@/apis/groundServicesCompany/useGroundServicesCompanies";
import { Box, Button, Menu, MenuItem } from "@mui/material";

import { usePopupState, bindTrigger, bindMenu } from "material-ui-popup-state/hooks";
import { ExpandLessOutlined } from "@mui/icons-material";
import { getParams } from "@/utils/getParams";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import getEventsForTurnAroundLogs from "@/apis/eventsLogs/getEventsLogsForTurnArounds";
import { useDateStore } from "./components/datePicker/store";
import { useTerminalsStore } from "@/store/terminalsStore";

let prevTurnAroundId = "";
const TurnAroundsDropdown = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<any>("");
  const [selectedCarrier, setSelectedCarrier] = React.useState<any>([]);
  const [selectedGsc, setSelectedGsc] = React.useState<any>([]);
  const [turnarounds, setTurnarounds] = React.useState([]);
  const [filteredTurnarounds, setFilteredTurnarounds] = React.useState([]);

  let dateStore = useDateStore((state) => state);
  let gateId = useTerminalsStore((state) => state.gateId);

  const {
    data: turnaroundsForGate,
    isLoading: isTurnaroundsLoading,
    refetch,
  } = useTurnaroundsForGate(gateId, dateStore.date, selectedCarrier, selectedGsc);

  const { data: carriersList } = useCarriersList();

  const { data: groundServicesCompanies } = useGroundServicesCompanies();

  const socketRef = useRef<Socket | null>(null);

  const turnAround = useTurnaroundStore((state) => state.turnAround);
  const setGateId = useTerminalsStore((state) => state.setGateId);
  const live = useTurnaroundStore((state) => state.live);
  const setTurnAround = useTurnaroundStore((state) => state.setTurnAround);
  const setLive = useTurnaroundStore((state) => state.setLive);
  const setEvents = useTurnaroundStore((state) => state.setEvents);
  const reEstablishSocket = useTurnaroundStore((state) => state.reEstablishSocket);
  const setReEstablishSocket = useTurnaroundStore((state) => state.setReEstablishSocket);

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");

  useEffect(() => {
    if (turnaroundsForGate) {
      setTurnarounds(turnaroundsForGate);
    }
  }, [turnaroundsForGate]);

  useEffect(() => {
    refetch();
  }, [turnAround]);

  useEffect(() => {
    if (prevTurnAroundId === "") {
      if (turnAround) {
        prevTurnAroundId = turnAround.id;
      }
    } else {
      if (turnAround) {
        if (turnAround.id !== prevTurnAroundId) {
          refetch();
          prevTurnAroundId = turnAround.id;
        }
      }
    }
  }, [turnAround, gateId]);

  const handleTurnAroundChange = async (id: any) => {
    let selectedTurnAround = turnaroundsForGate.find((turnaround: any) => turnaround.id === id);
    setTurnAround(selectedTurnAround);

    //events
    if (selectedTurnAround.aobt != null) {
      let eventLogs = await getEventsForTurnAroundLogs(id);
      setLive(false);
      setEvents(eventLogs);
    } else {
      setLive(true);
      setReEstablishSocket();
      setEvents([]);
    }
    // setSelectedDate("");
    // dateStore.setDate("");
    setSelectedCarrier([]);
    setSelectedGsc([]);
    popupState.close();
  };

  const handleSearch = (searchQuery: any) => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filteredList = turnaroundsForGate.filter((turnaround: any) => {
      const arrivalCode = turnaround.arrivalCode.toLowerCase();
      const departureCode = turnaround.departureCode.toLowerCase();

      return arrivalCode.includes(lowercasedQuery) || departureCode.includes(lowercasedQuery);
    });

    setTurnarounds(filteredList);
  };

  // useEffect(() => {
  //   setTurnarounds(filteredTurnarounds);
  // }, [filteredTurnarounds]);

  useEffect(() => {
    // setTurnarounds(turnaroundsForGate);

    setSelectedDate("");
    setSelectedCarrier([]);
    setSelectedGsc([]);
    dateStore.setDate([]);
  }, [isArabic]);

  //////TURNAROUND POPOVER STATE
  const popupState = usePopupState({
    variant: "popover",
    popupId: "turnaround",
  });

  const showBorder = () => {
    let showBorderFlag = false;
    for (let i = 0; i < turnarounds.length; ++i) {
      let tData: any = turnarounds[i];
      if (tData.aobt == null) {
        showBorderFlag = true;
        break;
      }
    }
    if (showBorderFlag) {
      return (
        <div
          style={{
            width: "90%",
            borderBottom: "1px solid rgba(0,0,0,0.3)",
            margin: "0.5em auto",
          }}
        ></div>
      );
    } else {
      return null;
    }
  };
  ///////END TURNAROUND POPOVER STATE
  return (
    <>
      <Button
        variant="outlined"
        className="turnAround-dropdown"
        size="large"
        sx={{
          width: "500px",
          "@media (max-width: 450px)": {
            width: "330px",
            padding: "5px 5px",
          },
          "@media (max-width: 380px)": {
            width: "290px",
          },
          "@media (max-width: 320px)": {
            width: "260px",
          },
        }}
        endIcon={popupState.isOpen ? <ExpandLessOutlined /> : <ExpandMoreIcon />}
        {...bindTrigger(popupState)}
      >
        <>
          {turnAround != null ? (
            turnAround.sibt &&
            turnAround.sobt && (
              <TurnaroundsDropdownStyles.SelectValueAlign
                sx={{
                  fontSize: "1em",
                  opacity: "0.7",
                  "@media (max-width: 450px)": {
                    gap: "0.5em",
                  },
                }}
              >
                <TurnaroundsDropdownStyles.FlightName
                  sx={{
                    fontSize: "1em",
                    opacity: "0.7",
                    "@media (max-width: 450px)": {
                      fontSize: "0.8em",
                    },
                  }}
                >
                  {turnAround?.arrivalCode} - {turnAround?.departureCode}
                </TurnaroundsDropdownStyles.FlightName>
                <TurnaroundsDropdownStyles.FlightTime
                  sx={{
                    fontSize: "1em",
                    opacity: "0.7",
                    "@media (max-width: 450px)": {
                      fontSize: "0.8em",
                    },
                  }}
                >
                  {formatDate(turnAround?.sibt)}
                  {"     "}
                  {formatTime24Hours(turnAround?.sibt)} -{" "}
                  {turnAround?.aobt != null ? formatTime24Hours(turnAround?.aobt) : t("in-progress")}
                </TurnaroundsDropdownStyles.FlightTime>
              </TurnaroundsDropdownStyles.SelectValueAlign>
            )
          ) : (
            <TurnaroundsDropdownStyles.SelectValueAlign>
              <p style={{ textTransform: "capitalize", opacity: "0.7" }}>{t("select-previous-turnAround")}</p>
            </TurnaroundsDropdownStyles.SelectValueAlign>
          )}
        </>
      </Button>
      <Menu
        sx={{
          marginTop: "2px",
        }}
        MenuListProps={{
          sx: {
            padding: 0,
            borderRadius: "10px",
          },
        }}
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Box
          sx={{
            border: `2px solid ${theme.palette.primary.light}`,
            borderRadius: 0,
            padding: "0px 13px",
            // color: "white",
            backgroundColor: theme.palette.primary.light,
            width: "500px",
            "@media (max-width: 420px)": {
              width: "330px",
            },
          }}
        >
          <TurnaroundsDropdownStyles.FilterSection>
            <InputWithIcon onSearch={handleSearch} />
            <TurnaroundsDropdownStyles.FilterDropdowns>
              <DateFilter setSelectedDate={setSelectedDate} className="date-filter" selectedDate={selectedDate} />
              <CarrierMultiSelect
                data={carriersList ? carriersList : []}
                setSelectedCarrier={setSelectedCarrier}
                selectedCarrier={selectedCarrier}
              />

              <GscMultiSelect
                data={groundServicesCompanies ? groundServicesCompanies : []}
                setSelectedGsc={setSelectedGsc}
                selectedGsc={selectedGsc}
              />
            </TurnaroundsDropdownStyles.FilterDropdowns>
          </TurnaroundsDropdownStyles.FilterSection>
          <TurnaroundsDropdownStyles.ListSection>
            {isTurnaroundsLoading ? (
              <TurnaroundsDropdownStyles.StaticText>Loading...</TurnaroundsDropdownStyles.StaticText>
            ) : !turnarounds?.length ? (
              <TurnaroundsDropdownStyles.StaticText>{t("no-turnAround-data")}</TurnaroundsDropdownStyles.StaticText>
            ) : (
              <>
                {turnarounds.map((data: any, index) => {
                  if (data.aobt == null)
                    return (
                      <TurnaroundsDropdownStyles.StyledMenuItem
                        onClick={() => {
                          handleTurnAroundChange(data.id);
                          // setOpen(false);
                        }}
                        key={data.id}
                        value={data.id}
                        selected
                      >
                        <TurnaroundsDropdownStyles.SelectValueAlign>
                          <TurnaroundsDropdownStyles.FlightName>
                            {data.arrivalCode} - {data.departureCode}
                            {data?.groundServicesCompany?.image && (
                              <img
                                src={data?.groundServicesCompany?.image}
                                width={20}
                                height={20}
                                alt=""
                                style={{
                                  height: "1.5em",
                                  width: "1.5em",
                                  marginLeft: "0.8em",
                                  marginRight: "0.8em",
                                  objectFit: "contain",
                                  borderRadius: "100%",
                                }}
                              />
                            )}
                          </TurnaroundsDropdownStyles.FlightName>
                          <TurnaroundsDropdownStyles.FlightTime sx={{ textTransform: "capitalize" }}>
                            {formatDate(data?.sibt)}
                            {"     "}
                            {formatTime24Hours(data?.sibt)} -{" "}
                            {data?.aobt != null ? formatTime24Hours(data?.aobt) : t("in-progress")}
                          </TurnaroundsDropdownStyles.FlightTime>
                        </TurnaroundsDropdownStyles.SelectValueAlign>
                      </TurnaroundsDropdownStyles.StyledMenuItem>
                    );
                })}
                {showBorder()}
                {turnarounds.map((data: any) => {
                  if (data.aobt != null)
                    return (
                      <TurnaroundsDropdownStyles.StyledMenuItem
                        onClick={() => {
                          handleTurnAroundChange(data.id);
                          // setOpen(false);
                        }}
                        key={data.id}
                        value={data.id}
                        selected
                      >
                        <TurnaroundsDropdownStyles.SelectValueAlign>
                          <TurnaroundsDropdownStyles.FlightName>
                            {data.arrivalCode} - {data.departureCode}
                            {data?.groundServicesCompany?.image && (
                              <img
                                src={data?.groundServicesCompany?.image}
                                width={20}
                                height={20}
                                alt=""
                                style={{
                                  height: "1.5em",
                                  width: "1.5em",
                                  marginLeft: "0.8em",
                                  marginRight: "0.8em",
                                  objectFit: "contain",
                                  borderRadius: "100%",
                                }}
                              />
                            )}
                          </TurnaroundsDropdownStyles.FlightName>
                          <TurnaroundsDropdownStyles.FlightTime sx={{ textTransform: "capitalize" }}>
                            {formatDate(data?.sibt)}
                            {"     "}
                            {formatTime24Hours(data?.sibt)} -{" "}
                            {data?.aobt != null ? formatTime24Hours(data?.aobt) : t("in-progress")}
                          </TurnaroundsDropdownStyles.FlightTime>
                        </TurnaroundsDropdownStyles.SelectValueAlign>
                      </TurnaroundsDropdownStyles.StyledMenuItem>
                    );
                })}
              </>
            )}
          </TurnaroundsDropdownStyles.ListSection>
        </Box>

        {/* <MenuItem onClick={popupState.close}>Cake</MenuItem>
        <MenuItem onClick={popupState.close}>Death</MenuItem> */}
      </Menu>
    </>
  );
};

export default TurnAroundsDropdown;
