import * as React from "react";

const Forward = ({ player }: any) => {
  const forwardController = () => {
    const currentTime = player.currentTime();
    player.currentTime(currentTime + 5);
  };

  return (
    <svg
      style={{ cursor: "pointer" }}
      onClick={forwardController}
      width="33"
      height="25"
      viewBox="0 0 33 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.3461 12.0074C17.6418 12.2692 17.6418 12.7308 17.3461 12.9926L9.39689 20.0298C8.97233 20.4056 8.30292 20.1042 8.30292 19.5372L8.30291 5.46285C8.30291 4.89581 8.97233 4.59439 9.39689 4.97024L17.3461 12.0074Z"
        fill="white"
        stroke="white"
        strokeWidth="1.31579"
      />
      <path
        d="M27.3461 12.0074C27.6418 12.2692 27.6418 12.7308 27.3461 12.9926L19.3969 20.0298C18.9723 20.4056 18.3029 20.1042 18.3029 19.5372L18.3029 5.46285C18.3029 4.89581 18.9723 4.59439 19.3969 4.97024L27.3461 12.0074Z"
        fill="white"
        stroke="white"
        strokeWidth="1.31579"
      />
    </svg>
  );
};
export default Forward;
