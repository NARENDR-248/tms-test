import React, { FC } from "react";

function LineConnector({ x1, y1, x2, y2, style }) {
  return (
    <svg height={y2} width="10" className="connecter-line" style={{ ...style, position: "absolute" }}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(59, 165, 225, 0.1)" strokeWidth={2} />
    </svg>
  );
}

export default LineConnector;
