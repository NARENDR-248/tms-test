import { styled } from "@mui/material";

const EventCardStyles = {
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

export default EventCardStyles;
