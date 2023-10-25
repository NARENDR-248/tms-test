import { styled, Box } from "@mui/material";

const VideoStyles = {
  Video: styled("video")(({ theme }) => ({
    "& .vjs-error-display ": {
      display: "none",
    },
    "& .vjs-tech": {
      backgroundColor: theme.palette.primary.light,
    },
  })),

  VideoBox: styled("video")(({ theme }) => ({
    width: "100%",
    height: "100%",
    "& .vjs-control-bar": {
      backgroundColor: `${theme.palette.primary.light} !important`,
      opacity: "1 !important",
      padding: "1em",
      width: "100%",
      height: "5em",
    },
    "& .vjs-progress-control": {
      order: "1",
    },
    "& .my-custom-icon": {
      background: `url(/FlightLand.svg) center center no-repeat !important`,
      backgroundSize: "cover !important",
      width: "24px !important",
      height: "24px !important",
      cursor: "pointer !important",
    },
    "& .vjs-play-control": { order: "2" },
    "& .vjs-volume-panel, .vjs-remaining-time, .vjs-picture-in-picture-control, .vjs-fullscreen-control": {
      display: "none !important",
    },
    "& .vjs-play-progress": {
      background: "#3BA5E1 !important",
    },
    "& .vjs-play-progress:before": {
      color: "#3BA5E1 !important",
    },
  })),

  ControllBar: styled("div")(({ theme }) => ({
    background: theme.palette.primary.light,
    padding: "1em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1.5em",
  })),

  Slider: styled("div")(({ theme }) => ({
    display: "flex",
    flex: 2,
  })),

  Controlls: styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 0.7,
  })),
};

export default VideoStyles;
