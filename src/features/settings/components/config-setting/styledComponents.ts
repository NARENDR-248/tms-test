import { styled } from "@mui/material";
import { Box } from "@mui/material";

const ConfigStyles = {
  Container: styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    "@media (max-width:420px)": {
      marginBottom: "56px",
    },
  })),

  Heading: styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-end",
    gap: "17px",
    alignItems: "center",
  })),

  Create: styled("button")(({ theme }) => ({
    width: "8.2em",
    height: "2.6em",
    backgroundColor: "#06A7E0",
    color: theme.palette.common.white,
    border: "none",
    cursor: "pointer",
  })),
};

export default ConfigStyles;
