import { styled } from "@mui/material";

const EventVideoModalStyles = {
  CameraView: styled("div")(({ theme }) => ({
    // height: "100%",
    // "@media (max-width: 820px)": {
    //   width: "100%",
    // },
  })),

  SubLayout: styled("div")(({ theme }) => ({
    height: "100%",
    width: "100%",
    position: "relative",
  })),

  EventDetails: styled("div")(({ theme }) => ({
    // width: "100%",
    display: "felx",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.3em",
    background: theme.palette.primary.main,
    "@media (max-width: 420px)": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  })),

  Name: styled("p")(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "1.3em",
    letterSpacing: "-0.76128px",
    textTransform: "uppercase",
    color: "#DADADA",
    "@media (max-width: 420px)": {
      fontSize: "1em",
      marginBottom: "0.6em",
    },
  })),

  TimeStamp: styled("div")(({ theme }) => ({
    display: "felx",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%",
    "@media (max-width: 420px)": {
      width: "80%",
    },
  })),

  SingleTimeStamp: styled("div")(({ theme }) => ({
    display: "felx",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })),

  Date: styled("p")(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "0.8em",
    textAlign: "center",
    letterSpacing: "-0.49776px",
    color: "#629CCC",
    opacity: "0.5",
    "@media (max-width: 420px)": {
      fontSize: "0.6em",
    },
  })),

  Time: styled("p")(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "1.3em",
    lineHeight: "32px",
    textAlign: "center",
    letterSpacing: "-0.929151px",
    color: "#629CCC",
    "@media (max-width: 420px)": {
      fontSize: "1em",
    },
  })),
};

export default EventVideoModalStyles;
