import * as React from "react";

const Backword = ({ player }: any) => {
  const backwordController = () => {
    const currentTime = player.currentTime();
    player.currentTime(currentTime - 5);
  };

  return (
    <svg
      style={{ cursor: "pointer" }}
      onClick={backwordController}
      width="33"
      height="25"
      viewBox="0 0 33 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5485 12.9926C15.2527 12.7308 15.2527 12.2692 15.5485 12.0074L23.4976 4.97024C23.9222 4.59438 24.5916 4.89581 24.5916 5.46284L24.5916 19.5372C24.5916 20.1042 23.9222 20.4056 23.4976 20.0298L15.5485 12.9926Z"
        fill="white"
        stroke="white"
        strokeWidth="1.31579"
      />
      <path
        d="M5.54848 12.9926C5.25273 12.7308 5.25273 12.2692 5.54848 12.0074L13.4976 4.97024C13.9222 4.59438 14.5916 4.89581 14.5916 5.46284L14.5916 19.5372C14.5916 20.1042 13.9222 20.4056 13.4976 20.0298L5.54848 12.9926Z"
        fill="white"
        stroke="white"
        strokeWidth="1.31579"
      />
    </svg>
  );
};
export default Backword;
