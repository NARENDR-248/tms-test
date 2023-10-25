import { styled } from "@mui/material";

const FlightTimesStyles = {
  Container: styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.9em",
    // flex: 1,
    // "@media (min-width: 420px)": {
    //   display: "none",
    // },
  })),

  Title: styled("p")(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "1em",
    textAlign: "right",
    color: " #D6D6D6",
    opacity: " 0.3",
    // "@media (min-width: 420px)": {
    //   display: "none",
    // },
  })),

  Time: styled("p")(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "1em",
    textAlign: "right",
    color: "#D6D6D6",
    // "@media (min-width: 420px)": {
    //   display: "none",
    // },
  })),
};

export default FlightTimesStyles;
