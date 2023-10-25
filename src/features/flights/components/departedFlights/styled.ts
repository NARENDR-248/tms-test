import styled from "@emotion/styled";

const DepartedFlightsStyles = {
  Container: styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 420px)": {
      marginBottom: "2.7em",
    },
  })),
  CardContainer: styled("div")(({ theme }) => ({
    width: "100%",
    minHeight: "70vh",
    display: "grid",
    overflow: "visible",
    gridTemplateColumns: "repeat(5, 1fr)",
    justifyContent: "space-between",
    gap: "1.5em",
    overflowX: "auto",
    "@media (max-width: 1220)": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    "@media (max-width: 1025px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@media (max-width: 420px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
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

export default DepartedFlightsStyles;
