import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "@/utils/theme";

const FlightsStyles = {
  RootContainer: styled(Box)(({}) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
  })),
  Container: styled(Box)(({}) => ({
    backgroundColor: theme.palette.primary.main,
    width: "83vw",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 1442px)": {
      width: "100vw",
    },
  })),
  TabsContainer: styled(Box)(({}) => ({
    margin: "1.5em 1em",
  })),
  NotificationsContainer: styled(Box)(({}) => ({
    // backgroundColor: theme.palette.primary.light,
    backgroundColor: "red",
    width: "17vw",
    "@media (max-width: 1442px)": {
      display: "none",
    },
  })),
};

export default FlightsStyles;
