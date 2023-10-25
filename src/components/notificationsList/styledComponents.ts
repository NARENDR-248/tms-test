import { Box, styled } from "@mui/material";

const NotificationList = {
  Container: styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    width: "20%",
    "@media (max-width: 820px)": {
      display: "none",
    },
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
    // border: "1px solid red",
  })),
};

export default NotificationList;
