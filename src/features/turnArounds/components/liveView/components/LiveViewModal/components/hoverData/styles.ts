import { Box, styled } from "@mui/material";

const HoverDataStyles = {
  Container: styled(Box)(({ theme }) => ({
    background: "#F5F5F5",
    padding: "1em",
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    position: "absolute",
    right: 0,
    top: "18px",
    zIndex: "999",
  })),

  Content: styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    gap: "0.5em",
    textAlign: "center",
  })),

  TimeCard: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
  })),

  Title: styled("p")(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "0.75em",
    letterSpacing: "-0.409488px",
    color: "#313131",
    opacity: "0.5",
  })),

  Status: styled("p")(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "0.75em",
    letterSpacing: "-0.764377px",
    color: "#313131",
  })),
};

export default HoverDataStyles;
