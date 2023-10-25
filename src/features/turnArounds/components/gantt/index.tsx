"use client";

import { useTurnaroundStore } from "@/store/turnaroundStore";
import { Chart } from "./chart";
import { transformEvents } from "./data";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import theme from "@/utils/theme";
import { convertTime, formatHoursAndMinutes24Hours } from "@/utils/dateHelpers";
import CONSTANTS from "@/store/constants";
import { useTerminalsStore } from "@/store/terminalsStore";

export interface Data {
  General: BarGroup[];
  Passengers: BarGroup[];
  Cargo: BarGroup[];
  Service: BarGroup[];
}

export interface BarGroup {
  name: string;
  start: Date;
  end: Date;
  group: string;
}

function getMinMaxTimes(data: Data) {
  let earliest: Date | null = null;
  let latest: Date | null = null;

  // Iterate over each category in the object
  for (let category in data) {
    // Iterate over each event in the category
    for (let i = 0; i < data[category].length; i++) {
      let event = data[category][i];

      // Parse the dates
      let start = new Date(event.start);
      let end = new Date(event.end);

      // Update earliest and latest
      if (!earliest || start < earliest) {
        earliest = start;
      }
      if (!latest || end > latest) {
        latest = end;
      }
    }
  }

  //subtranct 30minutes from minStart and add 30 minutes to maxEnd and set their seconds to 0

  return { minStart: earliest, maxEnd: latest };
}

const Gantt = ({ handleVideoFeedModalOpen }) => {
  const events = useTurnaroundStore((state) => state.events);
  const turnAround = useTurnaroundStore((state) => state.turnAround);
  const live = useTurnaroundStore((state) => state.live);
  const gateId = useTerminalsStore((state) => state.gateId);
  const { t } = useTranslation();
  const [startAndEnd, setStartAndEnd] = useState<{
    minStart: Date | null;
    maxEnd: Date | null;
  }>({
    minStart: null,
    maxEnd: null,
  });
  const [transformedEvents, setTransformedEvents] = useState<any>(null);

  useEffect(() => {
    const transformedEvents: any = transformEvents(events, live);
    const { minStart, maxEnd } = getMinMaxTimes(transformedEvents);

    setStartAndEnd({
      minStart: minStart,
      maxEnd: maxEnd,
    });
  }, [events]);
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {!!turnAround ? (
        <>
          <Chart
            bars={transformEvents(events, live)}
            handleVideoFeedModalOpen={handleVideoFeedModalOpen}
            start={startAndEnd?.minStart}
            end={startAndEnd?.maxEnd}
          />
          <svg height="10" width="10" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4">
                <path
                  d="M-1,1 l2,-2
           M0,4 l4,-4
           M3,5 l2,-2"
                  style={{
                    stroke: "orange",
                    strokeWidth: 1,
                  }}
                />
              </pattern>
            </defs>
          </svg>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            flex: 1,
            p: 4,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.palette.primary.light,
          }}
        >
          <p style={{ textAlign: "center", color: "white" }}>{t("no-turnaround-taking-place")}</p>
        </Box>
      )}
    </div>
  );
};

export default Gantt;
