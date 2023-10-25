import { styled, Box } from "@mui/material";

const StreamerStyles = {
  Container: styled(Box)(({ theme }) => ({
    position: "relative",
    overflowX: "hidden",
  })),
  LiveIndicator: styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 5,
    left: 5,
    zIndex: 1000,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.3em",
    padding: "0.4em",
    borderRadius: "0.3em",
    backdropFilter: "blur(10px)",
  })),
  LiveIndicatorCircle: styled(Box)(({ theme }) => ({
    width: "10px",
    height: "10px",
    backgroundColor: "#F44B4B",
    borderRadius: "100%",
  })),
};

export default StreamerStyles;
