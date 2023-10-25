import * as React from "react";

const BackwordFast = ({ player }: any) => {
  const backwordFastController = () => {
    const currentTime = player.currentTime();
    player.currentTime(currentTime - 20);
  };

  return (
    <svg
      style={{ cursor: "pointer" }}
      onClick={backwordFastController}
      xmlns="http://www.w3.org/2000/svg"
      width={33}
      height={25}
      fill="none"
      // {...props}
    >
      <path
        fill="#fff"
        stroke="#fff"
        strokeWidth={1.316}
        d="M15.549 12.993a.658.658 0 0 1 0-.986l7.949-7.037a.658.658 0 0 1 1.094.493v14.074c0 .567-.67.869-1.094.493l-7.95-7.037ZM5.548 12.993a.658.658 0 0 1 0-.986l7.95-7.037a.658.658 0 0 1 1.094.493v14.074c0 .567-.67.869-1.094.493l-7.95-7.037Z"
      />
      <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.263 19.737V5.263" />
    </svg>
  );
};
export default BackwordFast;
