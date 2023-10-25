import { Box, styled } from "@mui/material";

const CardStyles = {
  Container: styled(Box)(({ theme }) => ({
    padding: "0.5em",
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    marginBottom: "0.3em",
    width: "100%",
  })),
  TopBar: styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
  })),
  ID: styled("p")(({ theme }) => ({
    padding: "0 0.3em",
    minWidth: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })),

  Time: styled("p")(({ theme }) => ({
    marginLeft: "1em",
    padding: "0.3em",
    opacity: 0.5,
  })),
  Text: styled("p")(({ theme }) => ({
    opacity: 0.9,
  })),
  Call: styled("p")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: "1em",
    padding: "0.3em",
    width: "100%",
  })),
};

export default CardStyles;
