import { Avatar, BottomNavigation, Box, styled } from "@mui/material";

const BottomNavBarStyles = {
  Container: styled(BottomNavigation)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    position: "absolute",
    bottom: 0,
    "@media (min-width: 420px)": {
      display: "none",
    },
  })),
  ActionLabel: styled("p")(({ theme }) => ({
    color: theme.palette.common.white,
  })),
};

export default BottomNavBarStyles;
