import * as React from "react";

const ForwardFast = ({ player }: any) => {
  const forwardFastController = () => {
    const currentTime = player.currentTime();
    player.currentTime(currentTime + 20);
  };

  return (
    <svg
      style={{ cursor: "pointer" }}
      onClick={forwardFastController}
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
        d="M27.3458 12.0074C27.6416 12.2692 27.6416 12.7308 27.3458 12.9926L19.3966 20.0298C18.9721 20.4056 18.3027 20.1042 18.3027 19.5372L18.3027 5.46285C18.3027 4.89581 18.9721 4.59439 19.3966 4.97024L27.3458 12.0074Z"
        fill="white"
        stroke="white"
        strokeWidth="1.31579"
      />
      <path
        d="M27.6316 5.26315L27.6316 19.7368"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ForwardFast;
