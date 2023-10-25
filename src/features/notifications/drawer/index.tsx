import { useNotificationStore } from "@/store/notificationStore";
// import { Drawer } from "@mui/material";
import { NotificationsDrawerComponents } from "./styled";
import i18n from "@/utils/i18n";
import { NotificationsList } from "../notificationsList";

const NotificationsDrawer = () => {
  const isDrawerOpen = useNotificationStore((state) => state.isDrawerOpen);
  const isArabic = i18n.language.startsWith("ar_AR");
  const handleCloseDrawer = () => {
    useNotificationStore.setState({ isDrawerOpen: false });
  };

  return (
    <NotificationsDrawerComponents.Drawer
      id="notif-drawer-test"
      anchor={"right"}
      open={isDrawerOpen}
      onClose={handleCloseDrawer}
      variant="temporary"
      ModalProps={{
        keepMounted: true,
      }}
      SlideProps={{
        direction: isArabic ? "right" : "left",
      }}
    >
      <NotificationsDrawerComponents.ListContainer>
        <NotificationsList />
      </NotificationsDrawerComponents.ListContainer>
    </NotificationsDrawerComponents.Drawer>
  );
};

export default NotificationsDrawer;
