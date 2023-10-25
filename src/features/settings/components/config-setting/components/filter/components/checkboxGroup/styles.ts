import { Checkbox, FormControlLabel, styled } from "@mui/material";

const CheckboxGroupStyles = {
  CustomCheckbox: styled(Checkbox)(({}) => ({
    color: "#fff",
    "&.Mui-checked": {
      color: "#06A7E0",
    },
  })),

  CustomFormControlLabel: styled(FormControlLabel)(({}) => ({
    marginRight: "8px",
  })),
};

export default CheckboxGroupStyles;
