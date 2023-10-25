import * as React from "react";
const CloseX = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none" {...props}>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.875}
      d="m8.75 21.25 12.5-12.5m0 12.5L8.75 8.75"
    />
  </svg>
);
export default CloseX;
