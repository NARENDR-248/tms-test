import { useGatesForTerminal } from "@/apis/gates/useGatesForTerminal";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import Card from "../card";
import StyledTabs from "./styledComponents";

import { useTerminalsStore } from "@/store/terminalsStore";
import i18n from "@/utils/i18n";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useConnection } from "@/features/notifications/detailedScreen/__helpers/useConnection";

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
  const pathname = usePathname();
  const isArabic = i18n.language.startsWith("ar_AR");

  const shouldRenderTabs = pathname.includes("/turn-arounds");

  const terminalId = useTerminalsStore((state) => state.terminalId);
  const gateId = useTerminalsStore((state) => state.gateId);

  //START SOCKET LOGIC
  const [value, setValue] = React.useState(0);
  const { notificationsFromRest, notificationsFromSocket, connection, isIdle } = useConnection(
    terminalId,
    gateId,
    "",
    [null, null], //date range
    value === 0, //is all gates and 1 is one gate
  );
  //END SOCKET LOGIC,

  const { data: gates, isLoading: isGatesLoading, refetch: refetchGates } = useGatesForTerminal(terminalId);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    // setIdle(true);
  };

  useEffect(() => {
    if (shouldRenderTabs) {
      setValue(1);
    }
  }, [shouldRenderTabs]);

  return (
    <Box
      sx={{
        flex: 1,
        // width: "350px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: 1,
          color: "white",
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
          <Tab
            className="notif-tabs"
            sx={{ color: "white", textTransform: "none" }}
            label={!isArabic ? "All Gates" : "جميع البوابات"}
            {...a11yProps(0)}
          />

          {shouldRenderTabs && (
            <Tab
              className="notif-tabs"
              sx={{ color: "white", textTransform: "none" }}
              label={gates?.find((gate: any) => gate.id === gateId)?.name}
            />
          )}
          {/* <Tab
            sx={{ color: "white", textTransform: "none" }}
            label="Mark as Read"
          /> */}
        </Tabs>
      </Box>
      <TabPanel value={1} index={1}>
        <StyledTabs.CardsContainer>
          {isIdle ? (
            <Box display="flex" flexDirection={"column"} alignItems="center" justifyContent="center" height="50vh">
              <Typography>{isArabic ? `بوابة/بوابات خاملة` : `Gate(s) idle`}</Typography>
              <Typography>{isArabic ? `ابقَ ليتم إعلامك` : `Stay to be notified.`}</Typography>
            </Box>
          ) : connection === "rest" ? (
            notificationsFromRest?.map((notif) => (
              <Card
                id={notif.id}
                key={notif.id}
                time={notif.time}
                message={isArabic ? notif.message_ar : notif.message_en}
                severity={notif.severity}
                arrival_code={notif.arrival_code}
                departure_code={notif.departure_code}
                gateName={notif.gateName}
                groundServiceCompanyName={
                  isArabic ? notif.ground_services_company_name_ar : notif.ground_services_company_name_en
                }
                groundServiceCompanyContact={notif.ground_services_company_contact}
              />
            ))
          ) : (
            notificationsFromSocket?.map((notif, index) => {
              return (
                <Card
                  id={notif.id}
                  key={index}
                  time={notif.time}
                  arrival_code={notif.arrival_code}
                  departure_code={notif.departure_code}
                  gateName={notif.gateName}
                  message={isArabic ? notif.message_ar : notif.message_en}
                  severity={notif.severity}
                  groundServiceCompanyName={
                    isArabic ? notif.ground_services_company_name_ar : notif.ground_services_company_name_en
                  }
                  groundServiceCompanyContact={notif.ground_services_company_contact}
                />
              );
            })
          )}
        </StyledTabs.CardsContainer>
      </TabPanel>
    </Box>
  );
};

export default NotificationTabs;
