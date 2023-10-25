import { Avatar, BottomNavigation, Box, styled } from "@mui/material";

const BottomNavBarSC = {
  Container: styled(BottomNavigation)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    position: "fixed",
    bottom: 0,
    "@media (min-width: 420px)": {
      display: "none",
    },
  })),
  ActionLabel: styled("span")(({ theme }) => ({
    color: theme.palette.common.white,
  })),
};

export default BottomNavBarSC;
