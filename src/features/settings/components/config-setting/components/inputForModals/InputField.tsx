import React from "react";
import { InputsStyles } from "./styles";

const InputField = ({ type, color, defaultValue, isDisabled, value, setValue }: any) => {
  const changeHandler = (e: any) => {
    if (type === "number") {
      setValue(e.target.value);
    } else if (type === "time") {
      const value_array = e.target.value.split(":").map((number) => {
        return parseInt(number);
      });

      if (value_array.length === 3) {
        const hrtoSec = value_array[0] * 60 * 60;
        const mintoSec = value_array[1] * 60;
        const totalSeconds = value_array[2] + hrtoSec + mintoSec;

        setValue(totalSeconds);
      } else {
        console.log("Please enter proper time.");
      }
    }
  };

  return (
    <InputsStyles.CustomTextField
      type={type}
      // defaultValue={value}
      value={value}
      disabled={isDisabled}
      inputProps={{
        min: "0",
        step: 1,
      }}
      onChange={changeHandler}
      sx={{
        "& .MuiInputBase-input": {
          //This class targets the text inside the input.
          padding: type === "time" ? "5px 3px" : "5px 8px",
          color: `${color} !important`,
        },
        "& .MuiOutlinedInput-input.Mui-disabled": {
          color: `${color} !important`,
          "-webkit-text-fill-color": `${color} !important`,
        },
      }}
    />
  );
};

export default InputField;
