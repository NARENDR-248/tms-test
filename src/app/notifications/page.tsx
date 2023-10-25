"use client";

import { NotificationsList } from "@/features";
import NotificationsDetailed from "@/features/notifications/detailedScreen";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const Notifications = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return isMobile ? (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NotificationsList />
    </Box>
  ) : (
    <div>desktop variant</div>
  );
};

export default Notifications;
