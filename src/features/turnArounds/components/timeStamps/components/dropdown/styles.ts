import { Box, MenuItem, Select, styled } from "@mui/material";

const DropdownStyles = {
  Container: styled(Box)(({ theme }) => ({
    background: "#11293E",
    boxShadow: "0px 0px 17.0272px rgba(0, 0, 0, 0.1)",
    borderRadius: "2px",
    padding: "1em",
    position: "absolute",
    marginLeft: "-8em",
  })),
  Text: styled("p")(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "14px",
    color: "#EFEFEF",
    cursor: "pointer",
  })),
  StyledSelect: styled(Select)(({ theme }) => ({
    color: theme.palette.common.white,
    // OVER RIDING MUI
    padding: "0px !important",
  })),
  StyledMenuItem: styled(MenuItem)(({ theme }) => ({
    display: "flex",
    color: theme.palette.common.black,
  })),
};

export default DropdownStyles;
