import { useGatesInTerminal } from "@/apis/gates/useGatesInTerminal";
import theme from "@/utils/theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";
import { SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import StyledTabs from "./styledComponents";

import { useTerminalsStore } from "@/store/terminalsStore";
import i18n from "@/utils/i18n";
import { useEffect, useRef } from "react";
import io, { Socket } from "socket.io-client";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

type NotificationTabsProps = {};
const NotificationTabs: React.FC<NotificationTabsProps> = () => {
  //START GATES QUERY LOGIC
  const terminalId = useTerminalsStore((state) => state.terminalId);
  const { data: gatesForCurrentTerminal, isLoading } = useGatesInTerminal(terminalId);
  //END GATES QUERY LOGIC

  //START GATE SELECTION LOGIC
  const [selectedGate, setSelectedGate] = React.useState("");
  const handleSelectOnChange = (e: SelectChangeEvent<unknown>) => {
    setSelectedGate(e.target.value as string);
    connectToSelectedGate(e.target.value as string);
  };
  //select the first gate in the list by default
  React.useEffect(() => {
    if (gatesForCurrentTerminal && gatesForCurrentTerminal.length > 0) {
      // Select the first gate in the list by default
      const defaultGateId = gatesForCurrentTerminal[0]?.id;
      setSelectedGate(defaultGateId);
      connectToSelectedGate(defaultGateId);
    }
  }, [gatesForCurrentTerminal]);
  //END GATE SELECTION LOGIC

  //START SOCKET LOGIC
  const socketRef = useRef<Socket | null>(null);
  const connectToSelectedGate = (gateId: string) => {
    // Close the existing socket connection, if any
    if (socketRef.current) {
      socketRef.current.disconnect();
    }

    // Establish a new socket connection to the selected gate
    const socket = io(
      "http://localhost:4000/notifications",
      {
        extraHeaders: {
          "x-app-language": i18n.language,
        },
      },

      // { path: `/gates/${gateId}` }
    );

    // Set up event listeners for socket events
    socket.on("connect", () => {});

    socket.emit("startStream", gateId);

    socket.on("startStream", (message) => {
      // Handle the received message from the selected gate
      // Update your component state or trigger any necessary actions
    });

    socket.on("error", (error) => {
      console.error("Socket error:", error);
    });

    socket.on("disconnect", () => {});

    // Store the socket reference
    socketRef.current = socket;
  };

  useEffect(() => {
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);
  //END SOCKET LOGIC

  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: 1,
          color: "white",
          paddingRight: "0.5em",
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{ style: { background: "white" } }}
          textColor="inherit"
        >
          <Tab sx={{ color: "white", textTransform: "none" }} label="All Gates" {...a11yProps(0)} />
          <Tab
            sx={{ color: "white", textTransform: "none" }}
            label={
              <StyledTabs.Select
                value={selectedGate}
                onChange={handleSelectOnChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                IconComponent={(props) => <ExpandMoreIcon {...props} style={{ color: theme.palette.common.white }} />}
              >
                <StyledTabs.MenuItem value="">
                  <em>Select a Gate</em>
                </StyledTabs.MenuItem>

                {gatesForCurrentTerminal?.map((gate: any) => (
                  <StyledTabs.MenuItem key={gate.id} value={gate.id}>
                    {gate.name}
                  </StyledTabs.MenuItem>
                ))}
              </StyledTabs.Select>
            }
            {...a11yProps(1)}
          />
        </Tabs>
        <SettingsIcon />
      </Box>
      <TabPanel value={value} index={0}>
        All Gates
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StyledTabs.CardsContainer>
          {/* <Card
            ID={"B3  BW4352"}
            time={"15 APR 15:32:42"}
            description="No pre-departure walkaround detected"
            color={"#9E7317"}
          />
          <Card
            ID={"B3  BW4352"}
            time={"15 APR 15:32:42"}
            description="No pre-departure walkaround detected"
            color={"#9E7317"}
          />
          <Card
            ID={"B3  BW4352"}
            time={"15 APR 15:32:42"}
            description="No pre-departure walkaround detected"
            color={"#9E7317"}
          />
          <Card
            ID={"B3  BW4352"}
            time={"15 APR 15:32:42"}
            description="No pre-departure walkaround detected"
            color={"#9E7317"}
          /> */}
        </StyledTabs.CardsContainer>
      </TabPanel>
    </Box>
  );
};

export default NotificationTabs;
