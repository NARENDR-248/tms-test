import styled from "@emotion/styled";
import { Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import theme from "@/utils/theme";

export const FiltersFormComponents = {
  FormContainer: styled(Box)(({}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "space-between",
    gap: "1em",
    margin: "2em",
  })),

  Heading: styled(Typography)(({}) => ({
    color: "black",
    fontWeight: "bolder",
    fontSize: "2em",
  })),

  TextSearch: styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
    "& .MuiInputLabel-root": {
      color: "black",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "black",
      opacity: "1",
    },
  }),

  //terminal dd styles
  StyledSelect: styled(Select)(({ theme }) => ({
    border: `1px solid black`,
    boxShadow: "none", //remove shadow
    //set placeholder color
    "& .MuiSelect-icon": {
      color: "black",
      opacity: "1",
    },
    "& .MuiSelect-select": {
      color: "black",
      opacity: "1",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      boxShadow: "none", //remove inner shadow
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  })),
  StyledMenuItem: styled(MenuItem)(({ theme }) => ({})),
  ButtonContainer: styled(Box)(({ theme }) => ({})),
  StyledButton: styled(Button)(({ theme }) => ({})),

  // date range styles
  Align: styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    "& .disabled": {
      display: "none",
    },
  })),

  Dash: styled("div")(({ theme }) => ({
    color: "rgba(0, 0, 0, 1)",
    margin: "0 0.5em",
    cursor: "default",
  })),

  DateContainer: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  })),

  CalendarWrapper: styled("div")(({ theme }) => ({
    width: "100%",
    backgroundColor: "#ffff",
    color: "rgba(0, 0, 0, 1)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: "0.9em 0.57em 0.8em 0.57em",
    border: "1px solid rgba(0, 0, 0, 1)",
    borderRadius: "3px",
    "& input": {
      color: "rgba(0, 0, 0, 1)",
    },
    "& .react-datepicker-wrapper": {
      width: "86px !important",
      overflow: "hidden",
    },
    "& .react-datepicker-wrapper input": {
      border: "none",
      cursor: "pointer",
      outline: "none !important",
    },
    "& .disabled": {
      cursor: "not-allowed !important",
    },
    "& .react-datepicker-wrapper input:focused": {
      border: "none !important",
      outline: "none !important",
    },
    "& input:focused": {
      border: "none !important",
      outline: "none !important",
    },
  })),

  ApplyButton: styled(Button)(({}) => ({
    backgroundColor: "#152E44",
    color: "white",
    padding: "1.2em 0 1em 0",
    margin: "0.5em 0 0.5em 0",
  })),
};
