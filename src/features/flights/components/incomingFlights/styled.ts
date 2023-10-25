import { styled } from "@mui/material";

const IncomingFlightsStyles = {
  Container: styled("div")(({ theme }) => ({
    width: "100%",
    marginBottom: "1.7em",
    overflowX: "auto",
    "@media (max-width: 420px)": {
      width: "97%",
    },
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
};

export default IncomingFlightsStyles;
