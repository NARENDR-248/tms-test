import { Drawer } from "@mui/material";
import theme from "@/utils/theme";
import { Stack, styled, Box, TextField } from "@mui/material";

export const NotificationsDrawerComponents = {
  Drawer: styled(Drawer)(({}) => ({
    // overflow: "hidden",
    // position: "absolute",
    // zIndex: "1",
  })),
  ListContainer: styled(Box)(({ theme }) => ({
    // marginTop: "4.6em",
    // width: "25vw",
    // backgroundColor: theme.palette.primary.light,
    // overflow: "scroll",
    display: "flex",
    height: "100vh",
    flexDirection: "column",
  })),
};
