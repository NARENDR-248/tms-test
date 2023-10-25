import { Box, Select, MenuItem, styled, Button } from "@mui/material";

const FlightTerminalsDropdownStyles = {
  StyledSelect: styled(Select)(({ theme }) => ({
    color: theme.palette.common.white,
    border: `1px solid ${theme.palette.common.white}`,
    opacity: "0.5",
    // OVER RIDING MUI
    height: "2.5em",
    padding: "0px !important",
  })),
  StyledMenuItem: styled(MenuItem)(({ theme }) => ({
    display: "flex",
    color: theme.palette.common.white,
    paddingTop: "0 !important",
    paddingBottom: "0 !important",
  })),
  ButtonContainer: styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "15px",
    paddingBottom: "6px",
    paddingLeft: "6px",
    borderBottom: "1px solid rgba(245, 245, 245, 1)",
  })),
  StyledButton: styled(Button)(({ theme }) => ({
    color: "rgba(6, 167, 224, 1)",
    textTransform: "capitalize",
    fontWeight: "700",
    fontSize: "small",
  })),
};

export default FlightTerminalsDropdownStyles;
