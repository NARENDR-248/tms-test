import { styled } from "@mui/material";

const GateCardStyles = {
  Container: styled("div")(({}) => ({
    cursor: "pointer",
    width: "100%",
    height: "100%",
    backgroundColor: "#12283D",
    display: "flex",
    overflow: "visible",
    position: "relative",
  })),
  Bar: styled("div")(({}) => ({
    backgroundColor: "#E1E1E1",
    height: "20%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 3px",
  })),
  Number: styled("p")(({}) => ({
    color: "#676767",
  })),
  Area: styled("div")(({}) => ({
    position: "relative",
    height: "80%",
    overflow: "hidden",
  })),
  Wrapper: styled("div")(({}) => ({
    width: "100%",
    height: "100%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  })),
  Indicator: styled("div")(({}) => ({
    width: "100%",
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  })),
  Tooltip: {
    Container: styled("div")(({}) => ({
      position: "absolute",
      backgroundColor: "white",
      top: 10,
      left: 10,
      width: "280px",
      overflow: "scroll",
      zIndex: 99,
    })),
    FlightInfoContainer: styled("div")(({}) => ({
      padding: "1em",
      alignItems: "center",
      display: "flex",
      flexWrap: "nowrap",
      gap: "1em",
      justifyContent: "space-evenly",
    })),
    Circle: styled("p")(({}) => ({
      backgroundColor: "#7B7B7B",
      width: "0.5em",
      height: "0.5em",
      borderRadius: "100%",
    })),
    FlightInfoCol: styled("div")(({}) => ({
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
    })),

    FlightInfoColSubContainer: styled("div")(({}) => ({
      display: "flex",
      gap: "0.2em",
    })),
    FlightCode: styled("p")(({}) => ({
      fontWeight: "bold",
    })),
    CountryCode: styled("p")(({}) => ({
      fontWeight: "bold",
      color: "rgba(0,0,0,0.3)",
    })),
  },
  DelayContainer: styled("div")(({}) => ({
    backgroundColor: "#E7E7E7",
    padding: "1em",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })),

  DelayLabel: styled("p")(({}) => ({
    color: "#31313199",
    fontSize: "0.7em",
    fontWeight: "bold",
  })),

  DelayDesc: styled("p")(({}) => ({
    fontSize: "0.8em",
    fontWeight: "bold",
  })),
};

export default GateCardStyles;
