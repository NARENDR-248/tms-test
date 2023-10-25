import { styled } from "@mui/material";

const LiveViewModalStyles = {
  CameraView: styled("div")(({ theme }) => ({
    display: "flex",
    flex: "2.5",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    "@media (max-width: 820px)": {
      width: "100%",
    },
  })),

  SubLayout: styled("div")(({ theme }) => ({
    height: "100%",
    width: "100%",
    position: "relative",
  })),

  Progress: styled("div")(({ theme }) => ({
    display: "flex",
    flex: "0.9",
    flexDirection: "column",
    padding: "1em",
    height: "100%",
    background: theme.palette.primary.light,
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      // webkitAppearance: "none",
      width: "5px",
      border: "1px solid gray",
    },
    "@media (max-width: 820px)": {
      width: "100%",
    },
  })),

  Heading: styled("p")(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "1.1em",
    color: "#FFF",
    opacity: "0.5",
    marginBottom: "1em",
  })),

  DashedBorder: styled("div")(({ theme }) => ({
    borderLeft: "2px dashed rgba(255, 255, 255, 0.2)",
    paddingLeft: "1em",
  })),

  Content: styled("div")(({ theme }) => ({
    // borderLeft: "2px dashed rgba(255, 255, 255, 0.2)",
    // paddingLeft: "1em",
    marginBottom: "1em",
  })),

  TitleLayout: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "-23px",
    marginTop: "-5px",
    marginBottom: "0.8em",
  })),

  Title: styled("div")(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "0.8em",
    letterSpacing: "-0.305426px",
    color: "#FFF",
  })),

  TitleIndicator: styled("div")(({ theme }) => ({
    width: "12px",
    height: "12px",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "100%",
    marginRight: "0.6em",
    background: theme.palette.primary.light,
  })),

  EventLayout: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1em",
  })),

  StatusHighlighter: styled("div")(({ theme }) => ({
    width: "70%",
    background: "#BA7B1D",
    position: "absolute",
    zIndex: "1",
    height: "100%",
    marginLeft: "-1em",
  })),

  EventCard: styled("div")(({ theme }) => ({
    background: "#0A1B29",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5em 1em",
    position: "relative",
  })),

  Name: styled("p")(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "0.7em",
    letterSpacing: "-0.305426px",
    color: "#FFF",
    zIndex: "2",
  })),

  Status: styled("p")(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "0.6em",
    letterSpacing: "-0.392715px",
    color: "#FFF",
    opacity: " 0.7",
    zIndex: "2",
  })),
};

export default LiveViewModalStyles;
