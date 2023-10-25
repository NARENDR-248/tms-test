import { Select, MenuItem, styled } from "@mui/material";

const SelectStyles = {
  StyledSelect: styled(Select)(({ theme }) => ({
    color: theme.palette.common.white,
    // OVER RIDING MUI
    height: "2em",
    // padding: "0px !important",
    width: "100%",
    background: "#1F3A51",
    border: "none",
    "&:hover": {
      border: "none",
    },
    "& .MuiSvgIcon-root": {
      color: "#7699B8",
    },
  })),

  StyledMenuItem: styled(MenuItem)(({ theme }) => ({
    display: "flex",
    color: theme.palette.common.white,
    paddingTop: "0 !important",
    paddingBottom: "0 !important",
  })),
};

export default SelectStyles;
