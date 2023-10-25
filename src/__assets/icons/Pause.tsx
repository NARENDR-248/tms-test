import * as React from "react";

const Pause = ({ player }: any) => {
  const pauseHandler = () => {
    if (player.paused()) {
      player.play();
    } else {
      player.pause();
    }
  };

  return (
    <svg
      style={{ cursor: "pointer" }}
      onClick={pauseHandler}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="11.8423"
        y="2.94739"
        width="5.26316"
        height="15.7895"
        rx="0.657895"
        fill="white"
        stroke="white"
        strokeWidth="1.31579"
      />
      <rect
        x="3.94727"
        y="2.94739"
        width="5.26316"
        height="15.7895"
        rx="0.657895"
        fill="white"
        stroke="white"
        strokeWidth="1.31579"
      />
    </svg>
  );
};
export default Pause;
