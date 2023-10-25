import { Box, styled } from "@mui/material";

const NotificationList = {
  Container: styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    // flex: 1,
    height: "100vh",
    position: "sticky",
    top: 0,
    overflow: "hidden",
  })),
  TitleContainer: styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    padding: "1em",
    gap: "0.5em",
  })),
  TitleText: styled("p")(({ theme }) => ({
    fontWeight: "bold",
    color: theme.palette.common.white,
  })),
};

export default NotificationList;
