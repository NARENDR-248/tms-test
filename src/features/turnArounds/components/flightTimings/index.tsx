import { useTurnAround } from "@/apis/turnArounds/useTurnAround";
import FlightTimingsStyles from "./styles";
import theme from "@/utils/theme";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { DisplayData } from "./components/displayData";
import { useTurnaroundStore } from "@/store/turnaroundStore";
import { QueryClient } from "react-query";
import { useTerminalsStore } from "@/store/terminalsStore";
import CONSTANTS from "@/store/constants";

const FlightTimings = ({ showSideBar = true }) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language ? i18n.language.startsWith("ar_AR") : false;
  const [showTurnAroundData, setShowTurnAroundData] = useState(false);
  const turnAround = useTurnaroundStore((state) => state.turnAround);
  const gateId = useTerminalsStore((state) => state.gateId);
  const queryClient = new QueryClient();
  useEffect(() => {
    if (turnAround == null) {
      setShowTurnAroundData(false);
    } else {
      setShowTurnAroundData(true);
      // queryClient.invalidateQueries({ queryKey: ["turnAround"] });
    }
  }, [turnAround]);

  return (
    <FlightTimingsStyles.Container>
      {showTurnAroundData ? (
        <>{turnAround ? <DisplayData showSideBar={showSideBar} turnAroundId={turnAround.id} /> : null}</>
      ) : (
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ textAlign: "center", color: "white" }}>{t("no-turnaround-taking-place")}</p>
        </div>
      )}
    </FlightTimingsStyles.Container>
  );
};

export default FlightTimings;
