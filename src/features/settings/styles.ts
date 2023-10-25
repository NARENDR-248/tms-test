import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "@/utils/theme";

const SettingsStyles = {
  RootContainer: styled(Box)(({}) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    display: "flex",
    padding: "1em",
    flexDirection: "column",
  })),

  Container: styled(Box)(({}) => ({
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    // padding: "0 1.5em",
  })),

  Text: styled("div")(({}) => ({
    color: "#FFF",
    fontSize: "1.7em",
    fontStyle: "normal",
    paddingLeft: "18px", // required becuase of menu
    fontWeight: 600,
  })),

  TabsContainer: styled(Box)(({}) => ({
    // margin: "1.5em 0",
  })),
};

export default SettingsStyles;
