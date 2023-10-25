import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CheckboxGroupStyles from "./styles";

export const CheckboxGroup = ({
  value1,
  value2,
  value3,
  isLastChild,
  values,
  setValues,
}) => {
  const handleChange = (e: any) => {
    setValues((prevValues: any) => {
      if (e.target.checked) {
        return [...prevValues, e.target.value];
      } else {
        return prevValues.filter((value: any) => value !== e.target.value);
      }
    });
  };

  return (
    <FormGroup
      row
      sx={{
        borderBottom: isLastChild ? "none" : "1px solid rgba(250, 250, 250, 0.15)",
      }}
    >
      <CheckboxGroupStyles.CustomFormControlLabel
        control={<CheckboxGroupStyles.CustomCheckbox size="small" />}
        label={value1}
        value={value1}
        checked={values.includes(value1)}
        onChange={handleChange}
      />
      <CheckboxGroupStyles.CustomFormControlLabel
        control={<CheckboxGroupStyles.CustomCheckbox size="small" />}
        label={value2}
        value={value2}
        checked={values.includes(value2)}
        onChange={handleChange}
      />
      <CheckboxGroupStyles.CustomFormControlLabel
        control={<CheckboxGroupStyles.CustomCheckbox size="small" />}
        label={value3}
        value={value3}
        checked={values.includes(value3)}
        onChange={handleChange}
      />
    </FormGroup>
  );
};
