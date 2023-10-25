import * as React from "react";
const Plane = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <mask
      id="b"
      width={30}
      height={30}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="url(#a)" d="M29.767 15.79h20.75v20.75h-20.75z" transform="rotate(138.223 29.767 15.79)" />
    </mask>
    <g mask="url(#b)">
      <path fill="#E1E1E1" d="M26.888 29.636H2.243V3.541h24.645z" />
    </g>
    <defs>
      <pattern id="a" width={1} height={1} patternContentUnits="objectBoundingBox">
        <use xlinkHref="#c" transform="scale(.005)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="c"
        width={200}
        height={200}
      />
    </defs>
  </svg>
);
export default Plane;