import Remote from "../commons/shapes/remote";
import { largeGateArea } from "../configs";
import AttachedTerminal from "../commons/shapes/attachedterminal";

let offsetX = 700;
let offsetY = 500;

let shapeOffsetX = 0; // Relative
let shapeOffsetY = 125; // Relative

const TerminalOne = {
  id: 1,
  name_en: "T E R M I N A L &nbsp; 1",
  name_ar: "1 &nbsp; المحطة",
  x: offsetX,
  y: offsetY,
  shape: AttachedTerminal,
  debug: false,
  containerWidth: 900, // Static
  containerHeight: 450, // Static
  shapeWidth: 900, // Static
  shapeHeight: 450, // Static
  shapeOffsetX: shapeOffsetX, // Static
  shapeOffsetY: shapeOffsetY, // Static
  nameX: shapeOffsetX + 400, // value is offset to the shape
  nameY: shapeOffsetY + 300, // value is offset to the shape
  gates: [
    {
      id: "tOne1",
      name: "11",
      x: offsetX + 127,
      y: offsetY + 230,
      rotate: -60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tOne2",
      name: "12",
      x: offsetX + 178,
      y: offsetY + 140,
      rotate: -60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tOne3",
      name: "13",
      x: offsetX + 230,
      y: offsetY + 50,
      rotate: -60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tOne4",
      name: "14",
      x: offsetX + 280,
      y: offsetY - 40, //110,
      rotate: -60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tOne5",
      name: "15",
      x: offsetX + 540,
      y: offsetY - 40,
      rotate: 60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tOne6",
      name: "16",
      x: offsetX + 590,
      y: offsetY + 50,
      rotate: 60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tOne7",
      name: "17",
      x: offsetX + 643,
      y: offsetY + 140,
      rotate: 60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tOne8",
      name: "18",
      x: offsetX + 695,
      y: offsetY + 230,
      rotate: 60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    // REVERSE
  ],
};

export default TerminalOne;
