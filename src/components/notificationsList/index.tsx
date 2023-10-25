import theme from "@/utils/theme";
import NotificationList from "./styledComponents";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationTabs from "./components/tabs";
import { useTranslation } from "react-i18next";
const NotificationsList = () => {
  const { t } = useTranslation();
  return (
    <NotificationList.Container>
      <NotificationList.TitleContainer>
        <NotificationsIcon sx={{ color: theme.palette.common.white }} />
        <NotificationList.TitleText>{t("notifications")}</NotificationList.TitleText>
      </NotificationList.TitleContainer>
      <NotificationTabs />
    </NotificationList.Container>
  );
};

export default NotificationsList;
