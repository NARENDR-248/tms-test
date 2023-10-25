import { Box, MenuItem, Select, styled } from "@mui/material";

const TurnaroundsDropdownStyles = {
  FilterSection: styled("div")(({ theme }) => ({
    background: theme.palette.primary.light,
    // border: "2px solid #0A1313",
    // marginBottom: "1em",
    marginTop: "0.75rem",
    paddingBottom: "1em",
  })),

  FilterDropdowns: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "0.5em",
    gap: "0.5em",
    borderBottom: "2px solid #0a1313",
    paddingBottom: "1em",
    // marginBottom: "1em",
  })),

  Section: styled(Box)(({ theme }) => ({
    width: "24em",
    backgroundColor: theme.palette.primary.light,
    border: "5px solid red",
    "@media (max-width: 420px)": {
      width: "22.5em",
    },
  })),

  ListSection: styled("div")(({ theme }) => ({
    background: theme.palette.primary.light,
    maxHeight: "15em",
    overflowY: "scroll",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: "0",
      border: "2px solid gray",
    },
  })),

  StaticText: styled("p")(({ theme }) => ({
    background: theme.palette.primary.light,
    padding: "1em",
    color: "white",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
  })),

  StyledSelectFlight: styled(Select)(({ theme }) => ({
    color: theme.palette.common.white,
    border: `2px solid ${theme.palette.common.white}`,
    opacity: "0.5",
    height: "2.5em",
    // OVER RIDING MUI
    padding: "0px !important",
    "@media (max-width: 420px)": {
      display: "flex",
      flex: 1,
    },

    "& .MuiPaper-root .MuiList-padding .MuiMenu-list .mui-style-6hp17o-MuiList-root-MuiMenu-list": {
      border: "10px solid red",
    },
  })),
  StyledMenuItem: styled(MenuItem)(({ theme }) => ({
    display: "flex",
    color: theme.palette.common.black,
    // background: `${theme.palette.primary.light} !important`,
    paddingTop: "0 !important",
    paddingBottom: "0 !important",
    marginBottom: "0.5em",
    "@media (max-width: 420px)": {
      minHeight: "auto",
    },
  })),
  SelectValueAlign: styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    gap: "1em",
    width: "100%",
    color: "white",
  })),
  FlightName: styled("div")(({ theme }) => ({
    color: theme.palette.common.white,
    marginRight: "0em",
    display: "flex",
    fontSize: "0.9em",
    alignItems: "center",
    "@media (max-width: 420px)": {
      marginRight: "0.5em",
    },
  })),
  FlightTime: styled("p")(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: "0.8em",
    textAlign: "right",
    marginRight: "0.4em",
    textTransform: "capitalize",
  })),
};

export default TurnaroundsDropdownStyles;
