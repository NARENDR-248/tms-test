import { MenuItem, Select, styled } from "@mui/material";

const DropdownStyles = {
  StyledSelect: styled(Select)(({ theme }) => ({
    color: theme.palette.common.white,
    // OVER RIDING MUI
    padding: "0px !important",
    backgroundColor: theme.palette.primary.main,
  })),

  StyledMenuItem: styled(MenuItem)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    color: theme.palette.common.white,
    fontWeight: 500,
    padding: "0.5em 1em !important",
    cursor: "pointer",
  })),
};

export default DropdownStyles;
