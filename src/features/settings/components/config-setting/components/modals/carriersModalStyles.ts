import { styled } from "@mui/material";
import Image from "next/image";

const CarriersModalStyles = {
  Container: styled("div")(() => ({
    padding: "1.5em",
  })),

  Header: styled("div")(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1em",
  })),

  Title: styled("p")(() => ({
    color: "#FFF",
    fontSize: "26px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  })),

  List: styled("div")(() => ({
    height: "60vh",
  })),

  ButtonGroup: styled("div")(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: "20px",
  })),
};

export default CarriersModalStyles;
