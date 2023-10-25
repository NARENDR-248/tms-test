import Remote from "../commons/shapes/remote";
import { largeGateArea } from "../configs";
import AttachedTerminal from "../commons/shapes/attachedterminal";

let offsetX = 2950;
let offsetY = 500;

let shapeOffsetX = 0; // Relative
let shapeOffsetY = 125; // Relative

const TerminalFour = {
  id: 1,
  name_en: "T E R M I N A L &nbsp; 4",
  name_ar: "4 &nbsp; المحطة",
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
      id: "tFour1",
      name: "401",
      x: offsetX + 127,
      y: offsetY + 230,
      rotate: -60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tFour2",
      name: "402",
      x: offsetX + 178,
      y: offsetY + 140,
      rotate: -60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tFour3",
      name: "403",
      x: offsetX + 230,
      y: offsetY + 50,
      rotate: -60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tFour4",
      name: "404",
      x: offsetX + 280,
      y: offsetY - 40, //110,
      rotate: -60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tFour5",
      name: "405",
      x: offsetX + 540,
      y: offsetY - 40,
      rotate: 60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tFour6",
      name: "406",
      x: offsetX + 590,
      y: offsetY + 50,
      rotate: 60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tFour7",
      name: "407",
      x: offsetX + 643,
      y: offsetY + 140,
      rotate: 60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },

    {
      id: "tFour8",
      name: "408",
      hide: true,
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

export default TerminalFour;
