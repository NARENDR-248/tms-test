import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import { foregroundColor } from "@/features/constants/colors";

// Custom UI Component
const Tooltip = ({ gate }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <>
      <foreignObject
        x={gate.x}
        y={gate.y}
        width={gate.width}
        height={gate.height}
        style={{ fill: foregroundColor }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Add your content here */}
      </foreignObject>
      {isTooltipVisible && <g className="tooltip">{/* Render your tooltip content here */}</g>}
    </>
  );
};

export default Tooltip;
