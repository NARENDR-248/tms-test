import { useEffect, useRef, useState } from "react";
import TimeStampsTableStyles from "./styles";
import Dropdown from "./components/dropdown";
import LogTable from "./components/logTable";
import { Socket } from "socket.io-client";
import { useTranslation } from "react-i18next";
import { useTerminalsStore } from "@/store/terminalsStore";
import { useTurnaroundStore } from "@/store/turnaroundStore";

const TimeStampsTable = () => {
  // let [turnAroundId, setTurnAroundId] = useState<null | string>(null);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");
  //START SOCKET LOGIC
  const gateId = useTerminalsStore((state) => state.gateId);
  const turnAround = useTurnaroundStore((state) => state.turnAround);
  const events = useTurnaroundStore((state) => state.events);

  return (
    <TimeStampsTableStyles.Container role="timestamps-table">
      <TimeStampsTableStyles.Heading>
        <TimeStampsTableStyles.Title role="title">{t("time-stamps-table")}</TimeStampsTableStyles.Title>
        {turnAround !== null ? (
          <TimeStampsTableStyles.Downloads>{events.length > 0 ? <Dropdown /> : null}</TimeStampsTableStyles.Downloads>
        ) : null}
      </TimeStampsTableStyles.Heading>
      <LogTable gateId={gateId} />
    </TimeStampsTableStyles.Container>
  );
};

export default TimeStampsTable;
