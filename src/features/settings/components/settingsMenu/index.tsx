import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import SettingsMenuStyles from "./styles";

const SettingsMenu: React.FC = () => {
  const router = useRouter();
  const pathName = usePathname();

  const [tabValue, setTabValue] = React.useState(0);

  const { t } = useTranslation();

  React.useEffect(() => {
    if (pathName.includes("branding")) {
      setTabValue(4);
    } else if (pathName.includes("access-control")) {
      setTabValue(3);
    } else if (pathName.includes("rename-event")) {
      setTabValue(2);
    } else if (pathName.includes("event-sequence")) {
      setTabValue(1);
    } else {
      setTabValue(0);
    }
  }, [pathName]);

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  return (
    <SettingsMenuStyles.Container>
      <SettingsMenuStyles.TabsContainer>
        <Box sx={{ borderBottom: 1, borderColor: "divider", color: "white" }}>
          <Tabs
            value={tabValue}
            aria-label="basic tabs example"
            TabIndicatorProps={{ style: { background: "white" } }}
            textColor="inherit"
          >
            <Tab
              className="config-setting-tab"
              label={t("config-setting")}
              {...a11yProps(0)}
              onClick={() => router.push("/settings/config-setting")}
            />
            <Tab
              className="event-sequence-tab"
              label={t("event-sequence")}
              {...a11yProps(1)}
              onClick={() => router.push("/settings/event-sequence")}
            />
            <Tab
              className="rename-event-tab"
              label={t("rename-event")}
              {...a11yProps(2)}
              onClick={() => router.push("/settings/rename-event")}
            />
            <Tab
              className="access-control-tab"
              label={t("um.access-control")}
              {...a11yProps(2)}
              onClick={() => router.push("/settings/access-control/users")}
            />
            {/* <Tab
              className="branding-tab"
              label={t("branding")}
              {...a11yProps(2)}
              onClick={() => router.push("/settings/branding")}
            /> */}
          </Tabs>
        </Box>
      </SettingsMenuStyles.TabsContainer>
    </SettingsMenuStyles.Container>
  );
};

export default SettingsMenu;
