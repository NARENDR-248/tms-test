import NotificationsIcon from "@/__assets/icons/NotificationsIcon";
import SettingsIcon from "@/__assets/icons/SettingsIcon";
import NotificationsDrawer from "@/features/notifications/drawer";
import { useNotificationStore } from "@/store/notificationStore";
import { IconButton } from "@mui/material";
import { LanguageSwitch } from "../languageSwitch";
import UserAvaterDropdown from "./__components/userAvatarDropdown";
import NavBarStyles from "./styles";
import SettingsDropdown from "./__components/useSettingDropdown";
import Link from "next/link";

const WebNavBar = () => {
  const setIsDrawerOpen = useNotificationStore((state) => state.setIsDrawerOpen);
  const isDrawerOpen = useNotificationStore((state) => state.isDrawerOpen);

  const handleNotificationsClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <NavBarStyles.Container>
      <Link href="/">
        <NavBarStyles.Logo alt="Logo - Riyadh Airports" src="/logo.png" width={100} height={50} />
      </Link>
      <NavBarStyles.LinksContainer>
        <NavBarStyles.NotificationsIconContainer>
          <IconButton id="notif-icon-test" onClick={handleNotificationsClick}>
            <NotificationsIcon />
          </IconButton>
          <NotificationsDrawer />
        </NavBarStyles.NotificationsIconContainer>

        <IconButton>
          <SettingsDropdown />
        </IconButton>
        <UserAvaterDropdown />
        <LanguageSwitch />
      </NavBarStyles.LinksContainer>
    </NavBarStyles.Container>
  );
};

export default WebNavBar;
