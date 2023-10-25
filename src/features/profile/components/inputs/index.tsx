import React, { useEffect } from "react";
import { InputsStyles } from "./styles";

const Inputs = ({ value, setValue, setPasswordError, type, isPasswordField }) => {
  const handleInputChange = (event: any) => {
    const { value } = event.target;
    setValue(value);
    if (isPasswordField) {
      handleValidations(event);
    }
  };

  const handleValidations = (event: any) => {
    const { value } = event.target;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{10,}$/;

    if (!passwordRegex.test(value)) {
      setPasswordError("Invalid password.");
    } else {
      setPasswordError(null);
    }
  };

  return (
    <InputsStyles.CustomTextField
      type={type}
      value={value}
      onChange={handleInputChange}
      inputProps={{ readOnly: type === "email" ? true : false }}
    />
  );
};

export default Inputs;
