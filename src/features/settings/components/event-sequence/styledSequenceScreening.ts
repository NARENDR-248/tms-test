import { styled, useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";

const sScreeningStyles = {
  MainContainer: styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    border: "1px dashed white",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "10px",
  })),
  MainEvent: styled("div")(({ theme }) => ({
    border: "1px solid white",
    width: "700px",
    height: "300px",
  })),
};

export default sScreeningStyles;
