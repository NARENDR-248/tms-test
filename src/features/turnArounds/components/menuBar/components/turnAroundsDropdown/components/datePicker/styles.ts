import { DatePicker } from "@mui/lab";
import { styled } from "@mui/material";

const DatePickerStyles = {
  CustomDatePicker: styled(DatePicker)(({ theme }) => ({
    color: "white",
    width: "100%",
    borderBottom: "2px solid white !important",
    borderRadius: "0",
    padding: "0.6em 0 !important",
    outline: "none",
    "& .MuiInputBase-input": {
      color: "white",
      fontSize: " 0.9em",
      padding: "0.5em",
    },
    "& .MuiInput-underline:before, & .MuiInput-underline:after, & .MuiInput-underline:hover": {
      border: "0 !important",
      outline: "none !important",
    },
    "& .MuiPickersModal-dialogRoot .MuiPickersDatePickerRoot .MuiPickersDatePickerToolbar": {
      background: "#0b2032 !important",
    },
    // "& .MuiPickersModal-dialogRoot .MuiPickersDatePickerRoot-toolbar": {
    //   background: "#0b2032 !important",
    // },
  })),
};

export default DatePickerStyles;
