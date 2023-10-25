import React, { FC } from "react";
import { motion } from "framer-motion";

// Importing global css
import "../assets/css/global.css";
function LineConnector({ x1, y1, x2, y2, style }) {
  return (
    <motion.svg height={y2} width="10" className="connecter-line" style={style}>
      <motion.line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#434E59"
        strokeWidth={2}
        initial={{ opacity: 0, y2: 0 }} // Initial state
        animate={{ opacity: 1, y2: y2 }} // Animation state
        transition={{ duration: 0.5 }} // Animation duration
      />
    </motion.svg>
  );
}

export default LineConnector;
