import Remote from "../commons/shapes/remote";
import { largeGateArea } from "../configs";
import AttachedTerminal from "../commons/shapes/attachedterminal";

let offsetX = 2200;
let offsetY = 500;

let shapeOffsetX = 0; // Relative
let shapeOffsetY = 125; // Relative

const TerminalThree = {
  id: 1,
  name_en: "T E R M I N A L &nbsp; 3",
  name_ar: "3 &nbsp; المحطة",
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
      id: "tThree1",
      name: "301",
      x: offsetX + 127,
      y: offsetY + 230,
      rotate: -60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tThree2",
      name: "302",
      x: offsetX + 178,
      y: offsetY + 140,
      rotate: -60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tThree3",
      name: "303",
      x: offsetX + 230,
      y: offsetY + 50,
      rotate: -60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tThree4",
      name: "304",
      x: offsetX + 280,
      y: offsetY - 40, //110,
      rotate: -60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tThree5",
      name: "305",
      x: offsetX + 540,
      y: offsetY - 40,
      rotate: 60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tThree6",
      name: "306",
      x: offsetX + 590,
      y: offsetY + 50,
      rotate: 60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tThree7",
      name: "307",
      x: offsetX + 643,
      y: offsetY + 140,
      rotate: 60,
      width: largeGateArea.width,
      height: largeGateArea.height,
      level: 70,
    },
    {
      id: "tThree8",
      name: "308",
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

export default TerminalThree;
