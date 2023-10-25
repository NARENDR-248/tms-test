import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CameraTabsStyles from "./styles";
import theme from "@/utils/theme";
import Streamer from "../streamer";
import { useTerminalsStore } from "@/store/terminalsStore";
import { useCamerasBelongingToGate } from "@/apis/camera/belongingToGate";
import { Camera } from "@mui/icons-material";
import { useCamerasStore } from "@/store/cameraStore";
import { Skeleton } from "@mui/material";
import { useTurnAround } from "@/apis/turnArounds/useTurnAround";
import { useTurnaroundStore } from "@/store/turnaroundStore";

interface TabPanelProps {
  children?: React.ReactNode;
  camera: any;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, camera, value, index, ...other } = props;
  const turnAround = useTurnaroundStore((state) => state.turnAround);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Streamer cameraId={camera.id} turnAround={turnAround} rtspURL={camera.rtsp_url} />
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

const CameraTabs = ({ gateId }: { gateId: string }) => {
  const [value, setValue] = React.useState(0);
  const { data, isLoading, isSuccess, refetch } = useCamerasBelongingToGate(gateId);
  const cameraStore = useCamerasStore((state) => state);

  React.useEffect(() => {
    if (data) {
      cameraStore.setCameras(data);
      setValue(0);
    }
  }, [data]);

  React.useEffect(() => {
    refetch();
  }, [gateId]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            flex: 1,
            minHeight: "300px",
          }}
        >
          <Skeleton sx={{ bgcolor: theme.palette.primary.main }} variant="rounded" width={"100%"} height={"300px"} />
        </div>
      ) : (
        <div>
          {data?.map((camera: any, id: number) => {
            return <TabPanel key={camera.id} camera={camera} value={value} index={id}></TabPanel>;
          })}
        </div>
      )}
      {isLoading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: "1em",
            padding: "1em",
          }}
        >
          <Skeleton sx={{ bgcolor: theme.palette.primary.main }} variant="rounded" width={"100px"} height={"30px"} />

          <Skeleton sx={{ bgcolor: theme.palette.primary.main }} variant="rounded" width={"100px"} height={"30px"} />

          <Skeleton sx={{ bgcolor: theme.palette.primary.main }} variant="rounded" width={"100px"} height={"30px"} />
        </div>
      ) : (
        <Box sx={{ borderBottom: 1, color: "white", borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="inherit"
            indicatorColor="secondary"
          >
            {data?.map((camera: any) => {
              return (
                <CameraTabsStyles.StyledTab
                  key={camera.id}
                  sx={{
                    color: value === camera.id ? theme.palette.secondary.main : "white",
                  }}
                  label={camera.name}
                  {...a11yProps(0)}
                />
              );
            })}
          </Tabs>
        </Box>
      )}
    </Box>
  );
};
export default CameraTabs;
