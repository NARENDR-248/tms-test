import Remote from "../commons/shapes/remote";
import { largeGateArea } from "../configs";
import AttachedTerminal from "../commons/shapes/attachedterminal";

let offsetX = 1450;
let offsetY = 500;

let shapeOffsetX = 0; // Relative
let shapeOffsetY = 125; // Relative

const TerminalTwo = {
  id: 1,
  name_en: "T E R M I N A L &nbsp; 2",
  name_ar: "2 &nbsp; المحطة",
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
      id: "tTwo1",
      name: "21",
      x: offsetX + 127,
      y: offsetY + 230,
      rotate: -60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },

    {
      id: "tTwo2",
      name: "22",
      x: offsetX + 178,
      y: offsetY + 140,
      rotate: -60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tTwo3",
      name: "23",
      x: offsetX + 230,
      y: offsetY + 50,
      rotate: -60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tTwo4",
      name: "24",
      x: offsetX + 280,
      y: offsetY - 40, //110,
      rotate: -60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },

    {
      id: "tTwo5",
      name: "25",
      x: offsetX + 540,
      y: offsetY - 40,
      rotate: 60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tTwo6",
      name: "26",
      x: offsetX + 590,
      y: offsetY + 50,
      rotate: 60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tTwo7",
      name: "27",
      x: offsetX + 643,
      y: offsetY + 140,
      rotate: 60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },

    {
      id: "tTwo8",
      name: "28",
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

export default TerminalTwo;
