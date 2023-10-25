import { Box, styled } from "@mui/material";
import Tab from "@mui/material/Tab";

const ModalCameraTabsStyles = {
  TabsBox: styled(Box)(({ theme }) => ({
    position: "absolute",
    zIndex: "999",
    left: "20px",
    top: "20px",
    height: "3em",
    display: "flex",
    borderRadius: "5px !important",
    alignItems: "center",
    padding: "0 0.5em",
    "@media (max-width: 420px)": {
      left: "15px",
      top: "15px",
      height: "2em",
      justifyContent: "space-between",
    },
  })),

  StyledTab: styled(Tab)(({ theme }) => ({
    textTransform: "none",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "1em",
    color: "#528DC4",
    height: "2em",
    padding: "0.5em",
    minHeight: "2em !important",
    "@media (max-width: 420px)": {
      fontSize: "0.7em",
      padding: "1em",
      minWidth: "auto",
      maxWidth: "auto",
    },
  })),

  LiveIndicator: styled("div")(({ theme }) => ({
    position: "absolute",
    top: "20px",
    right: "20px",
    zIndex: 999,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.3em",
    padding: "0.4em",
    borderRadius: "0.3em",
    backdropFilter: "blur(10px)",
    color: "#fff",
    "@media (max-width: 420px)": {
      top: "15px",
      right: "15px",
      fontSize: "1em",
    },
  })),

  LiveIndicatorCircle: styled(Box)(({ theme }) => ({
    width: "10px",
    height: "10px",
    backgroundColor: "#F44B4B",
    borderRadius: "100%",
  })),
};

export default ModalCameraTabsStyles;
