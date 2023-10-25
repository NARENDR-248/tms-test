import useScreenSize from "@/utils/screenSize";
import theme from "@/utils/theme";
import { useRef, useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import VideoStyles from "./styles";
import BackwordFast from "@/__assets/icons/BackwordFast";
import Backword from "@/__assets/icons/Backword";
import Pause from "@/__assets/icons/Pause";
import Forward from "@/__assets/icons/Forward";
import ForwardFast from "@/__assets/icons/ForwardFast";
import { Slider } from "@mui/material";
import Play from "@/__assets/icons/Play";
import { useTranslation } from "react-i18next";
import { useTurnaroundStore } from "@/store/turnaroundStore";
import useForceUpdate from "../forceUpdate";
import { calculateDuration, calculateDurationInSeconds } from "@/utils/dateHelpers";
import { useTerminalsStore } from "@/store/terminalsStore";

const Player: React.FC<any> = ({ src, isLive, selected, generating, height = 0, controls = false }) => {
  const { t } = useTranslation();

  const videoRef = useRef(null);
  const [player, setPlayer] = useState<ReturnType<typeof videojs>>();
  const [sliderValue, setSliderValue] = useState<number | undefined>(0);
  const [error, setError] = useState(false);
  const [waiting, setWaiting] = useState(true);
  const [initialLoadTime, setInitialLoadTime] = useState<any>();

  let gateId = useTerminalsStore((state) => state.gateId);
  const screenSize = useScreenSize();

  const forceUpdate = useForceUpdate();

  // FORCE UPDATE
  useEffect(() => {
    setError(false);
    setWaiting(true);
    setInitialLoadTime(new Date());
  }, [src, isLive]);

  useEffect(() => {
    if (!generating) {
      setWaiting(true);
      setInitialLoadTime(new Date());
    }
  }, [generating]);

  // FORCE UPDATE
  useEffect(() => {
    let waitingInterval;
    if (waiting) {
      waitingInterval = setInterval(() => {
        if (calculateDurationInSeconds(initialLoadTime, new Date().toISOString()) >= 5) {
          setWaiting(false);
          clearInterval(waitingInterval);
        } else {
          setWaiting(true);
        }
      }, 1000);
    }
    return () => {
      clearInterval(waitingInterval);
    };
  }, [initialLoadTime]);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const currentTime = ((newValue as number) / 100) * (player?.duration() ?? 0);
    setSliderValue(newValue as number);
    if (player) {
      player.currentTime(currentTime);
    }
  };

  useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!player) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      setPlayer(
        videojs(
          videoElement,
          {
            autoplay: true,
            fluid: true,
            loop: true,
            bigPlayButton: true,
          },
          () => {},
        ),
      );
    }
  }, [videoRef]);

  useEffect(() => {
    return () => {
      if (player) {
        player.dispose();
        setError(false);
      }
    };
  }, [player]);

  useEffect(() => {
    const handleTimeUpdate = () => {
      const currentTime = player?.currentTime() ?? 0;
      const duration = player?.duration() ?? 0;
      const percentage = (currentTime / duration) * 100;
      setSliderValue(percentage);
    };

    if (player) {
      player.on("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (player) {
        player.off("timeupdate", handleTimeUpdate);
      }
    };
  }, [player]);

  let live = useTurnaroundStore((state) => state.live);
  let turnAround = useTurnaroundStore((state) => state.turnAround);

  return (
    <div style={{ position: "relative" }}>
      <video
        style={{
          margin: screenSize.width <= 420 ? "0 auto" : undefined,
          // width: screenSize.width <= 420 ? screenSize.width - 20 : "100%",
          height: "100%",
        }}
        autoPlay={true}
        muted
        onCanPlay={(a) => setError(false)}
        onError={(err) => {
          console.log(err);
          setError(true);
        }}
        className="video-js"
        ref={videoRef}
        controls={controls}
      >
        <source src={src} type="video/mp4" />
      </video>
      {!isLive && (
        <VideoStyles.ControllBar>
          <VideoStyles.Slider>
            <Slider
              aria-label="Video-progress"
              value={sliderValue}
              onChange={handleSliderChange}
              sx={{
                "& .mui-style-14pt78w-MuiSlider-rail, .mui-style-rtl-14pt78w-MuiSlider-rail": {
                  color: "#fff",
                  opacity: 1,
                  borderRadius: 0,
                },
                "& .mui-style-1gv0vcd-MuiSlider-track, .mui-style-rtl-1gv0vcd-MuiSlider-track": {
                  color: "#3BA5E1",
                  borderRadius: 0,
                },
                "& .mui-style-tcun7n-MuiSlider-thumb, .mui-style-rtl-tcun7n-MuiSlider-thumb": {
                  color: "#3BA5E1",
                  border: "1.2px solid #fff",
                  height: "15px",
                  width: "15px",
                },
              }}
            />
          </VideoStyles.Slider>
          <VideoStyles.Controlls>
            <BackwordFast player={player} />
            <Backword player={player} />
            {player?.paused() ? <Play player={player} /> : <Pause player={player} />}
            <Forward player={player} />
            <ForwardFast player={player} />
          </VideoStyles.Controlls>
        </VideoStyles.ControllBar>
      )}
      {error && (
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: 1,
            backgroundColor: "#000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {generating ? (
            <>
              <p style={{ color: "white" }}>{t("generating-video-file")}</p>
              <p style={{ color: "white" }}>
                {generating} {t("secs-left")}
              </p>
            </>
          ) : (
            <>
              <p style={{ color: "white" }}>{!waiting ? t("sorry-view-could-not-be-loaded") : t("loading")}</p>
              {/* <p style={{ color: "white" }}>{t("something-went-wrong")}</p> */}
            </>
          )}
          {/* <p style={{ color: "white" }}>
            {t("sorry-view-could-not-be-loaded")}
          </p>
          <p style={{ color: "white" }}>{t("something-went-wrong")}</p> */}
          {/* <div
            style={{
              color: "white",
              border: "1px solid white",
              padding: "0.2em",
            }}
            onClick={() => forceUpdate()}
          >
            {t("retry")}
          </div> */}
        </div>
      )}
    </div>
  );
};

interface VideoFeedProps {
  src: string;
}

export default Player;
