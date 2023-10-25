import { TextField, styled } from "@mui/material";

const InputFieldStyles = {
  InputField: styled(TextField)(({ theme }) => ({
    width: "96%",
    borderBottom: "1px solid rgba(255, 255, 255, 0.7)",
    margin: "0 8px !important",
    // "& .mui-style-1x51dt5-MuiInputBase-input-MuiInput-input": {
    //   color: "white",
    //   fontSize: "0.9em",
    //   marginLeft: "5px",
    // },
  })),
};

export default InputFieldStyles;
