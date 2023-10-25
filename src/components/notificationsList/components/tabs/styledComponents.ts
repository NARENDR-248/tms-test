import { Box, Select, MenuItem, styled } from "@mui/material";

const Tabs = {
  Select: styled(Select)(({ theme }) => ({
    color: theme.palette.common.white,
    // border: `0px solid ${theme.palette.common.white}`,
    opacity: "0.5",
    // OVER RIDING MUI
    height: "2.5em",
    padding: "0px !important",
  })),
  MenuItem: styled(MenuItem)(({ theme }) => ({
    display: "flex",
    color: theme.palette.common.black,
  })),
  CardsContainer: styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "red",
    gap: "0.2em",
    marginTop: "0.2em",
  })),
};

export default Tabs;
