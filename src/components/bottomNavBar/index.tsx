import { useState } from "react";
import Link from "next/link";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import BottomNavBarSC from "./BottomNavBarSC";
import theme from "@/utils/theme";
import { useRouter } from "next/navigation";

const BottomNavBar = () => {
  const [value, setValue] = useState("home");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const router = useRouter();
  return (
    <BottomNavBarSC.Container value={value} onChange={handleChange}>
      <BottomNavigationAction
        onClick={() => router.push("/")}
        label={<BottomNavBarSC.ActionLabel>Home</BottomNavBarSC.ActionLabel>}
        value="home"
        icon={<HomeIcon style={{ color: theme.palette.common.white }} />}
      />
      <BottomNavigationAction
        onClick={() => router.push("/notifications")}
        label={<BottomNavBarSC.ActionLabel>Notification</BottomNavBarSC.ActionLabel>}
        value="notification"
        icon={<NotificationsIcon style={{ color: theme.palette.common.white }} />}
      />
      <BottomNavigationAction
        onClick={() => router.push("/settings/config-setting")}
        label={<BottomNavBarSC.ActionLabel>Settings</BottomNavBarSC.ActionLabel>}
        value="settings"
        icon={<SettingsIcon style={{ color: theme.palette.common.white }} />}
      />
      <BottomNavigationAction
        label={<BottomNavBarSC.ActionLabel>Profile</BottomNavBarSC.ActionLabel>}
        value="profile"
        icon={<AccountCircleIcon style={{ color: theme.palette.common.white }} />}
      />
    </BottomNavBarSC.Container>
  );
};

export default BottomNavBar;
