import { useEffect, useReducer, useState } from "react";
import Player from "./components/player";
import StreamerStyles from "./styles";
import LiveViewModal from "../LiveViewModal";
import useScreenSize from "@/utils/screenSize";
import EnlargeIcon from "@/__assets/icons/EnlargeIcon";
import theme from "@/utils/theme";
import { useTranslation } from "react-i18next";
import i18n from "@/utils/i18n";
import { useTerminalsStore } from "@/store/terminalsStore";
import { useTurnaroundStore } from "@/store/turnaroundStore";
import LivePlayer from "./components/livePlayer";
import useForceUpdate from "./components/forceUpdate";
import { calculateDuration, calculateDurationInSeconds } from "@/utils/dateHelpers";

const Streamer = ({ rtspURL, cameraId, turnAround }: any) => {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState("");

  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const [showGenerationUI, setShowGenerationUI] = useState(0);
  const { t } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");

  let screenSize = useScreenSize();
  let gateId = useTerminalsStore((state) => state.gateId);
  let live = useTurnaroundStore((state) => state.live);

  useEffect(() => {
    if (turnAround != null) {
      if (turnAround.aobt != null) {
        // turnAround ended
        if (calculateDuration(turnAround.aobt, new Date().toISOString()) < 1) {
          setShowGenerationUI(60 - calculateDurationInSeconds(turnAround.aobt, new Date().toISOString()));
        } else {
          setShowGenerationUI(0);
        }
      } else {
        setShowGenerationUI(0);
      }
      setSrc(
        `http://localhost:8000/camera/video-feed/${gateId}/${cameraId.toUpperCase()}/?live=False&t_id=${
          turnAround != null ? turnAround.id.toUpperCase() : ""
        }`,
      );
    }
  }, [gateId, cameraId, live, turnAround]);

  useEffect(() => {
    let showGenerationUIInterval;
    if (showGenerationUI) {
      showGenerationUIInterval = setInterval(() => {
        if (calculateDuration(turnAround.aobt, new Date().toISOString()) >= 1) {
          setShowGenerationUI(0);
          clearInterval(showGenerationUIInterval);
        } else {
          setShowGenerationUI(60 - calculateDurationInSeconds(turnAround.aobt, new Date().toISOString()));
        }
      }, 1000);
    }
    return () => {
      clearInterval(showGenerationUIInterval);
    };
  }, [showGenerationUI]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StreamerStyles.Container>
      {screenSize.width >= 800 ? (
        <EnlargeIcon
          style={{
            position: "absolute",
            top: 5,
            right: isArabic ? undefined : 5,
            left: isArabic ? 5 : undefined,
            zIndex: 1000,
            backgroundColor: theme.palette.common.black,
            padding: "0.2em",
            cursor: "pointer",
          }}
          onClick={handleOpen}
        />
      ) : null}
      <LiveViewModal cameraId={cameraId} open={open} close={handleClose} />
      {live ? (
        <LivePlayer src={`http://localhost:8000/camera/video-feed/${gateId}/${cameraId}/?live=True`} isLive />
      ) : !src.length ? (
        <Player key={src} src="" generating={false} isLive />
      ) : (
        <Player key={src} src={src} generating={showGenerationUI} isLive />
      )}
      {live && (
        <StreamerStyles.LiveIndicator>
          <StreamerStyles.LiveIndicatorCircle />
          <p>{t("live")}</p>
        </StreamerStyles.LiveIndicator>
      )}
    </StreamerStyles.Container>
  );
};

export default Streamer;
