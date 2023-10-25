import * as React from "react";
const Trash = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={29} height={33} fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        stroke="#FF375E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.632}
        d="M27.74 7.362c-4.9-.501-9.827-.76-14.74-.76-2.913 0-5.825.152-8.738.456l-3 .304m8.09-1.534.323-1.988c.236-1.442.412-2.52 2.898-2.52h3.854c2.486 0 2.678 1.138 2.898 2.535l.324 1.973m4.928 6.33-.957 15.287c-.161 2.383-.294 4.235-4.398 4.235H9.778c-4.104 0-4.236-1.852-4.398-4.235l-.956-15.287m7.62 11.173h4.898m-6.12-6.072h7.356"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h29v33H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Trash;
