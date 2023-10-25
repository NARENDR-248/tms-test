import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "@/utils/theme";

const HomeStyles = {
  Container: styled(Box)(({}) => ({
    display: "flex",
    height: "91vh", // webNavBar takes 9 vh
    // width: "100%",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: "#0A1A29",
    // Bottom Nav Bar comes in
    "@media (max-width: 500px)": {
      height: "100vh", // webNavBar takes 9 vh
    },
  })),
  MenuBarContainer: styled(Box)(({}) => ({})),
  TableContainer: styled("div")(({}) => ({
    backgroundColor: theme.palette.primary.main,
    width: "86vw",
    height: "100vh",
    borderRadius: "1em",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 1442px)": {
      width: "100vw",
    },
  })),
};

export default HomeStyles;
