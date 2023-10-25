import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import ModalCameraTabsStyles from "./styles";
import Player from "../../../streamer/components/player";
import { useCamerasStore } from "@/store/cameraStore";
import { useTerminalsStore } from "@/store/terminalsStore";
import { useTurnaroundStore } from "@/store/turnaroundStore";
import LivePlayer from "../../../streamer/components/livePlayer";
import useForceUpdate from "../../../streamer/components/forceUpdate";
import { calculateDuration, calculateDurationInSeconds } from "@/utils/dateHelpers";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  camera: any;
  isLive: boolean;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, camera, value, index, isLive, ...other }: any = props;
  let gateId = useTerminalsStore((state) => state.gateId);
  let live = useTurnaroundStore((state) => state.live);
  let turnAround = useTurnaroundStore((state) => state.turnAround);
  const [src, setSrc] = React.useState("");

  const [showGenerationUI, setShowGenerationUI] = React.useState(0);

  React.useEffect(() => {
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
        `http://localhost:8000/camera/video-feed/${gateId}/${index.toUpperCase()}/?live=False&t_id=${
          turnAround != null ? turnAround.id.toUpperCase() : ""
        }`,
      );
    }
  }, [gateId, index, live, turnAround]);

  React.useEffect(() => {
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

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ height: "100%" }}
      {...other}
    >
      {value === index && (
        <Box sx={{ height: "100%", position: "relative" }}>
          {/* <Player src={camera.rtsp_url} isLive={isLive} /> */}
          {/* <Player
            src={`http://localhost:8000/camera/video-feed/${gateId}/${index}/?live=${
              live ? "True" : "False"
            }`}
            isLive
          /> */}
          {live ? (
            <LivePlayer
              // key={`http://localhost:8000/camera/video-feed/${gateId}/${index}/?live=True`}
              src={`http://localhost:8000/camera/video-feed/${gateId}/${index}/?live=True`}
              isLive
            />
          ) : !src.length ? (
            <Player key={src} src="" generating={false} isLive />
          ) : (
            <Player key={src} src={src} generating={showGenerationUI} isLive />
          )}
          {live && (
            <ModalCameraTabsStyles.LiveIndicator>
              <ModalCameraTabsStyles.LiveIndicatorCircle />
              <p>LIVE</p>
            </ModalCameraTabsStyles.LiveIndicator>
          )}
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ModalCameraTabs = ({ camera, setCamera, cameraId = null, isLive, defaultCamera = true }: any) => {
  const [value, setValue] = React.useState(0);
  const cameras = useCamerasStore((state) => state.cameras);
  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  // React.useEffect(() => {
  //   if (cameraId != null) {
  //     setValue(cameraId);
  //   }
  // }, [cameraId]);

  React.useEffect(() => {
    if (cameras.length && defaultCamera) {
      setValue(cameras[0].id);
    }
  }, [cameras]);

  return (
    <Box sx={{ height: "100%", position: "relative" }}>
      <ModalCameraTabsStyles.TabsBox>
        <Tabs
          value={value}
          aria-label="basic tabs example"
          TabIndicatorProps={{ style: { display: "none" } }}
          style={{
            alignItems: "center",
            minHeight: "auto",
            position: "absolute",
            zIndex: 2,
            backgroundColor: "#0B2032",
            padding: "0.3em",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          {cameras.map((camera: any) => {
            return (
              <ModalCameraTabsStyles.StyledTab
                key={camera.id}
                onClick={() => handleChange(camera.id)}
                sx={{
                  color: value === camera.id ? "#0B2032 !important" : "",
                  background: value === camera.id ? "#528DC4 !important" : "",
                  borderRadius: value === camera.id ? "5px !important" : "",
                }}
                {...a11yProps(camera.id)}
                label={camera.name}
              />
            );
          })}
        </Tabs>
      </ModalCameraTabsStyles.TabsBox>
      {cameras.map((camera: any) => {
        return <TabPanel key={camera.id} value={value} camera={camera} index={camera.id} isLive={isLive}></TabPanel>;
      })}
    </Box>
  );
};
export default ModalCameraTabs;
