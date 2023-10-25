import React from "react";
import { TextField } from "@mui/material";

const InputField = ({
  color,
  defaultValue,
  isDisabled,
  height,
  maxHeight,
  isMultiLine,
  rows,
  value,
  setValue,
}: any) => {
  const changeHandler = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <TextField
      //   type="number"
      // defaultValue={defaultValue}
      value={value}
      multiline={isMultiLine}
      rows={rows}
      //   disabled={isDisabled}
      //   inputProps={{
      //     min: "0",
      //   }}
      onChange={changeHandler}
      sx={{
        backgroundColor: "#1F3A51",
        height: { height },
        maxHeight: { maxHeight },
        width: "20em",
        borderRadius: "5px",
        ".MuiOutlinedInput-input": {
          color: "#fff !important",
        },
        //   {
        //     //This class target the border of the input text
        //     border: "none",
        //   },
        "& .MuiInputBase-input": {
          //This class targets the text inside the input.
          padding: "5px 8px",
          color: `${color} !important`,
        },
        // "& .mui-style-y0o9cr-MuiInputBase-root-MuiOutlinedInput-root": {
        //   padding: "5px 8px",
        // },
        // "& .MuiOutlinedInput-input.Mui-disabled": {
        //   color: `${color} !important`,
        //   "-webkit-text-fill-color": `${color} !important`,
        // },
        // "& input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button":
        //   {
        //     appearance: "none",
        //     margin: 0,
        //     "&:hover": {
        //       background: "transparent",
        //     },
        //   },
        // "& input[type=number]": {
        //   appearance: "textfield",
        // },
        // // Hide increment and decrement icons
        // "& .MuiIconButton-root": {
        //   display: "none",
        // },
        // // Specific styling for Firefox
        // "@-moz-document url-prefix()": {
        //   "& input[type=number]": {
        //     mozAppearance: "textfield",
        //   },
        // },
      }}
    />
  );
};

export default InputField;
