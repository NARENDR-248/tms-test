import { Drawer, styled, Box } from "@mui/material";

export const ConfigDrawerStyles = {
  Drawer: styled(Drawer)(({ theme }) => ({
    "& .MuiPaper-root": {
      background: theme.palette.primary.main,
      padding: "2em 3em",
      width: "40em",
    },
    "@media (max-width: 460px)": {
      "& .MuiPaper-root": {
        padding: "1em 1em 5em 1em",
        width: "100% !important",
      },
    },
  })),
  ListContainer: styled(Box)(({ theme }) => ({
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      width: "0",
      height: "0",
    },
  })),
};
