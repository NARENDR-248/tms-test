import { TableCell, styled } from "@mui/material";

const ConfigTableStyles = {
  Header: styled(TableCell)(({ theme }) => ({
    color: "white",
    opacity: 0.5,
    fontWeight: 600,
    padding: "8px",
    borderBottom: "1px solid rgba(255,255,255,0.5)",
  })),

  Cell: styled(TableCell)(({ theme }) => ({
    color: "#9f9f9f",
    borderBottom: "0px solid black!important",
    fontWeight: 600,
    padding: "8px",
    letterSpacing: "-0.36px",
  })),

  ButtonContainer: styled("div")(({}) => ({
    display: "flex",
    // gap: "5px",
  })),

  StaticBox: styled("div")(({}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  })),

  StaticText: styled("div")(({}) => ({
    color: "#fff",
  })),
};

export default ConfigTableStyles;
