import { Box, styled } from "@mui/material";

const CardStyles = {
  Container: styled(Box)(({ theme }) => ({
    padding: "0.5em",
    display: "flex",
    flexDirection: "column",
    gap: "1em",
  })),
  TopBar: styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
  })),
  ID: styled("p")(({ theme }) => ({
    padding: "0.3em",
  })),

  Time: styled("p")(({ theme }) => ({
    padding: "0.3em",
    opacity: 0.5,
  })),
  Text: styled("p")(({ theme }) => ({
    opacity: 0.9,
  })),
};

export default CardStyles;
