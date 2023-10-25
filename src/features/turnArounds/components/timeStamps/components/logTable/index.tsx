import { useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import theme from "@/utils/theme";

import TableStyles from "./styles";

import AirplanemodeInactiveIcon from "@mui/icons-material/AirplanemodeInactive";
import { useTranslation } from "react-i18next";
import { useTurnaroundStore } from "@/store/turnaroundStore";
import { getEventsForTurnAroundLogs } from "@/apis/eventsLogs/getEventsLogsForTurnArounds";
import { calculateDuration, formatTime, formatTime24Hours } from "@/utils/dateHelpers";
import { formatDataForTT, transformEvents } from "@/features/turnArounds/utils";
import CONSTANTS from "@/store/constants";

export default function LogTable({ gateId }: any) {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language ? i18n.language.startsWith("ar_AR") : false;
  let [turnAroundHappening, setTurnAroundHappening] = useState(true);
  let [data, setData] = useState<any>(null);
  let [rows, setRows] = useState<any>([]);

  const turnAround = useTurnaroundStore((state) => state.turnAround);
  const live = useTurnaroundStore((state) => state.live);
  const events = useTurnaroundStore((state) => state.events);

  useEffect(() => {
    if (live) {
      if (turnAround) {
        if (events.length > 0) {
          let transformedEvents = transformEvents(events, isArabic);
          setData(transformedEvents);
        } else {
          setData([]);
        }
        setTurnAroundHappening(true);
      } else {
        setTurnAroundHappening(false);
        setData([]);
      }
    } else {
      setTurnAroundHappening(true);
      if (events.length > 0) {
        let transformedEvents = formatDataForTT(events, isArabic);
        setData(transformedEvents);
      } else {
        setData([]);
      }
    }
  }, [live, events, isArabic]);

  useEffect(() => {
    let win: any = window;
    if (typeof win.Cypress !== "undefined") {
      win.state = {
        turnAroundHappening,
        data,
        rows,
      };
    }
  }, [turnAroundHappening, data, rows]);

  useEffect(() => {
    if (data === null) {
      return;
    }
    setRows(data);
  }, [data]);

  console.log("these are EVENT rows", rows);

  return (
    <div id="log-table" role="log-table">
      {turnAroundHappening ? (
        <TableContainer
          id="#table"
          component={Paper}
          sx={{
            backgroundColor: theme.palette.primary.light,
            paddingBottom: "5em",
          }}
        >
          <Table
            sx={{
              overflowX: rows.length ? "scroll" : undefined,
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow
                sx={{
                  borderBottomColor: "red",
                }}
              >
                <TableStyles.Header role="first-header" align="left">
                  {t("event")}
                </TableStyles.Header>
                <TableStyles.Header align="right">{t("started")}</TableStyles.Header>
                <TableStyles.Header align="right">{live ? t("last-updated-ended") : t("ended")}</TableStyles.Header>
                <TableStyles.Header align="right">{t("duration")}</TableStyles.Header>
                <TableStyles.Header align="right">{t("startDelay")}</TableStyles.Header>
                <TableStyles.Header align="right">{t("endDelay")}</TableStyles.Header>
                <TableStyles.Header align="right">{t("maxTimeDelay")}</TableStyles.Header>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: any, id: number) => {
                return (
                  <TableRow
                    key={id}
                    sx={{
                      borderBottom: "0px solid black!important",
                    }}
                  >
                    <TableStyles.Cell component="th" scope="row" align="left" sx={{ fontWeight: "bold", opacity: 1 }}>
                      {/* if arabic and if ui_name_ar, show ui_name_ar else show name_ar. if !arabic and if ui_name, show ui_name else show name_en */}
                      {isArabic
                        ? row.ui_name_ar
                          ? row.ui_name_ar
                          : row.name_ar
                        : row.ui_name_en !== null
                        ? row.ui_name_en
                        : row.name_en}
                    </TableStyles.Cell>
                    <TableStyles.Cell
                      sx={{
                        color: row.startDelayColor,
                      }}
                      align="right"
                    >
                      {row.started != "Not Yet Started" ? `${row.started}` : `${t("not-yet-started")}`}
                    </TableStyles.Cell>
                    <TableStyles.Cell
                      sx={{
                        color: row.endDelayColor,
                      }}
                      align="right"
                      style={{}}
                    >
                      {row.lastUpdated != "Not Yet Started"
                        ? row.lastUpdated != "In Progress"
                          ? `${row.lastUpdated}`
                          : `${t("in-progress")}`
                        : `${t("not-yet-started")}`}
                    </TableStyles.Cell>
                    <TableStyles.Cell align="right">
                      {row.duration != "Not Yet Started"
                        ? row.duration != "In Progress"
                          ? `${row.duration}`
                          : `${t("in-progress")}`
                        : `${t("not-yet-started")}`}
                    </TableStyles.Cell>
                    <TableStyles.Cell
                      sx={{
                        color: row.startDelayColor,
                      }}
                      align="right"
                    >
                      {row.startDelay.includes("prog") || row.startDelay.includes("-")
                        ? `0 ${t("seconds")}`
                        : `${row.startDelay}`}
                    </TableStyles.Cell>
                    <TableStyles.Cell
                      sx={{
                        color: row.endDelayColor,
                      }}
                      align="right"
                    >
                      {row.endDelay.includes("prog") || row.endDelay.includes("-")
                        ? `0 ${t("seconds")}`
                        : `${row.endDelay}`}
                    </TableStyles.Cell>
                    <TableStyles.Cell align="right">{row.maxTimeDelay}</TableStyles.Cell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div
          id="no-turnAround"
          role="no-turnAround"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // minHeight: "500px", //TODO: hardcoded height messes with mobile height
          }}
        >
          <AirplanemodeInactiveIcon style={{ fontSize: "4em", color: "white" }} />
          <p style={{ textAlign: "center", color: "white", marginTop: "2em" }}>
            {/* {gateId === CONSTANTS.gate25
              ? t("model-training-in-progress") */}
            {/* : */}
            {t("no-turnaround-taking-place")}
          </p>
        </div>
      )}
    </div>
  );
}
