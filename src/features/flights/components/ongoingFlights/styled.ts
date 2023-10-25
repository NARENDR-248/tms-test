import { styled } from "@mui/material";

const OngoingFlightsStyles = {
  MainContainer: styled("div")(({ theme }) => ({
    width: "100%",
    "@media (max-width: 420px)": {
      marginBottom: "2.7em",
    },
  })),
  Container: styled("div")(({ theme }) => ({
    width: "100%",
    minHeight: "60vh",
    overflowX: "auto",
  })),

  HeadersContainer: styled("div")(({ theme }) => ({
    border: "1px solid purple",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderBottom: "1px solid #F5F5F5",
    borderBottomWidth: "80%",
  })),

  Pagination: styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#629CCC",
    marginTop: "1em",
    padding: "0.7em 0",
  })),

  NoFlights: styled("div")(({ theme }) => ({
    width: "100%",
    height: "60vh",
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.6em",
    "@media (max-width: 420px)": {
      marginBottom: "1.7em",
    },
  })),
};

export default OngoingFlightsStyles;
