import * as React from "react";

const Play = ({ player }: any) => {
  const playHandler = () => {
    if (player.paused()) {
      player.play();
    } else {
      player.pause();
    }
  };

  return (
    <svg
      style={{ cursor: "pointer" }}
      onClick={playHandler}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2240_24369)">
        <path
          d="M20.1564 10.2869C21.447 11.0644 21.447 12.9356 20.1564 13.7131L8.78208 20.5656C7.44909 21.3687 5.75 20.4087 5.75 18.8525L5.75 5.14751C5.75 3.59131 7.4491 2.63132 8.78208 3.43438L20.1564 10.2869Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2240_24369">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default Play;
