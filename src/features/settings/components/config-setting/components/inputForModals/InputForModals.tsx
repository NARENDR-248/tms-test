import React from "react";
import InputField from "./InputField";

const InputForModals = ({ isDisabled, value, setValue }: any) => {
  return (
    <div
      style={{
        width: "65%",
      }}
    >
      <InputField
        type={"number"}
        color={"#fff"}
        value={value === -1 ? 1 : value}
        setValue={setValue}
        isDisabled={isDisabled}
      />
    </div>
  );
};

export default InputForModals;
