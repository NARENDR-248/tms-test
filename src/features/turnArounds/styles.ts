import { Box, styled } from "@mui/material";

const TurnAroundStyles = {
  RootContainer: styled(Box)(({ theme }) => ({
    minHeight: "100vh",
    padding: 10,
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  })),
  Container: styled(Box)(({ theme }) => ({
    // width: "50%",
    backgroundColor: theme.palette.primary.main,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "86vw",
    overflow: "hidden",
    // height: "100vh",
    "@media (max-width: 1442px)": {
      width: "100vw",
    },
    // justifyContent: "space-between",
  })),

  SubLayout1: styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // gap: "1em",
    // padding: "1em",
    backgroundColor: theme.palette.primary.main,
  })),
  SubLayout2: styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",

    // gap: "1em",
    // padding: "1em",
    backgroundColor: theme.palette.primary.main,
  })),
  NotificationsContainer: styled(Box)(({ theme }) => ({
    // backgroundColor: theme.palette.primary.light,
    backgroundColor: "red",
    width: "17vw !important",
    "@media (max-width: 1442px)": {
      display: "none",
    },
    // "@media (max-width: 1442px)": {
    //   display: "none",
    // },
    // display: "flex",

    // flexDirection: "column",
  })),
};

export default TurnAroundStyles;
