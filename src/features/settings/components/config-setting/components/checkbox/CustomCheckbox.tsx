import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const CustomCheckbox = ({
  label,
  isInfiniteOccurrence,
  setIsInfiniteOccurrence,
}: any) => {
  const handleChange = (e: any) => {
    setIsInfiniteOccurrence(e.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          size="small"
          sx={{
            color: "#fff",
            "&.Mui-checked": {
              color: "#06A7E0",
            },
          }}
          onChange={handleChange}
          checked={isInfiniteOccurrence}
        />
      }
      label={label}
      sx={{
        "& .MuiFormControlLabel-label": {
          fontSize: "0.8em",
        },
        "& .MuiSvgIcon-root": {
          fontSize: "1em",
        },
      }}
    />
  );
};

export default CustomCheckbox;
