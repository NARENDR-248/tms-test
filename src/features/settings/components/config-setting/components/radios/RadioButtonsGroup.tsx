import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export const RadioButtonsGroup = ({ value, setValue, value1, value2, value3 }: any) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value={value1}
          control={
            <Radio
              size="small"
              sx={{
                color: "#fff",
                "&.Mui-checked": {
                  color: "#06A7E0",
                },
              }}
              checked={value1 === value}
            />
          }
          label={value1}
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "0.8em",
            },
            "& .MuiSvgIcon-root": {
              fontSize: "1em",
            },
          }}
        />
        <FormControlLabel
          value={value2}
          control={
            <Radio
              size="small"
              sx={{
                color: "#fff",
                "&.Mui-checked": {
                  color: "#06A7E0",
                },
              }}
              checked={value2 === value}
            />
          }
          label={value2}
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "0.8em",
            },
            "& .MuiSvgIcon-root": {
              fontSize: "1em",
            },
          }}
        />
        <FormControlLabel
          value={value3}
          control={
            <Radio
              size="small"
              sx={{
                color: "#fff",
                "&.Mui-checked": {
                  color: "#06A7E0",
                },
              }}
              checked={value3 === value}
            />
          }
          label={value3}
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "0.8em",
            },
            "& .MuiSvgIcon-root": {
              fontSize: "1em",
            },
          }}
        />
      </RadioGroup>
    </FormControl>
  );
};
