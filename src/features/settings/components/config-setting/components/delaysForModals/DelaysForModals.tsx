import React from "react";
import InputField from "../inputForModals/InputField";
import DelaysIndicator from "./DelaysIndicator";
import { CustTimeField } from "../inputForModals/CustTimeField";

const styles = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
};

const DelaysForModals = ({ values, setValues }: any) => {
  return (
    <div
      style={{
        width: "65%",
        display: "flex",
        justifyContent: "space-between",
        gap: "15px",
      }}
    >
      <div style={styles}>
        <DelaysIndicator bColor={"#A99908"} />
        <CustTimeField color={"#A99908"} value={values?.minDelay} setValue={setValues?.setMinDelay} />
        {/* <InputField
          type={"time"}
          color={"#A99908"}
          value={values?.minDelay}
          setValue={setValues?.setMinDelay}
        /> */}
      </div>
      <div style={styles}>
        <DelaysIndicator bColor={"#BC7710"} />
        <CustTimeField color={"#BC7710"} value={values?.middleDelay} setValue={setValues?.setMiddleDelay} />
        {/* <InputField
          type={"time"}
          color={"#BC7710"}
          value={values?.middleDelay}
          setValue={setValues?.setMiddleDelay}
        /> */}
      </div>
      <div style={styles}>
        <DelaysIndicator bColor={"#AF3434"} />
        <CustTimeField color={"#AF3434"} value={values?.maxDelay} setValue={setValues?.setMaxDelay} />
        {/* <InputField
          type={"time"}
          color={"#AF3434"}
          value={values?.maxDelay}
          setValue={setValues?.setMaxDelay}
        /> */}
      </div>
    </div>
  );
};

export default DelaysForModals;
