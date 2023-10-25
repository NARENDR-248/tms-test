import { TextField, styled } from "@mui/material";
import { TimeField } from "@mui/x-date-pickers";

export const InputsStyles = {
  Container: styled("div")(({ theme }) => ({
    width: "25%",
    "@media (max-width: 820px)": {
      width: "40%",
    },
    "@media (max-width: 420px)": {
      width: "50%",
    },
  })),

  CustomTextField: styled(TextField)(({ theme }) => ({
    backgroundColor: "#1F3A51",
    height: "30px",
    width: "100%",

    borderRadius: "5px",
    "& .mui-style-1d3z3hw-MuiOutlinedInput-notchedOutline, .mui-style-rtl-1d3z3hw-MuiOutlinedInput-notchedOutline": {
      //This class target the border of the input text
      border: "none",
    },
    "& input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button": {
      appearance: "none",
      margin: 0,
      "&:hover": {
        background: "transparent",
      },
    },
    "& input[type=number]": {
      appearance: "textfield",
    },
    // Hide increment and decrement icons
    "& .MuiIconButton-root": {
      display: "none",
    },
    // Specific styling for Firefox
    "@-moz-document url-prefix()": {
      "& input[type=number]": {
        mozAppearance: "textfield",
      },
    },
    "& input[type=time]::-webkit-calendar-picker-indicator": {
      background: "none",
      display: "none",
    },
  })),

  CustomTimeField: styled(TimeField)(({ theme }) => ({
    backgroundColor: "#1F3A51",
    width: "100%",
    minWidth: "auto !important",
    borderRadius: "5px",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },

    "& .MuiInputBase-input": {
      padding: "5px",
      // textAlign: "center",
    },
  })),
};
