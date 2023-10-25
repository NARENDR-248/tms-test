import Remote from "../commons/shapes/remote";
import { largeGateArea } from "../configs";

let offsetX = 4030;
let offsetY = 500;

let shapeOffsetX = 0; // Relative
let shapeOffsetY = 125; // Relative

const EastRemote = {
  id: 1,
  name_en: "E A S T &nbsp; R E M O T E",
  name_ar: "البعيد &nbsp; الشرق",
  x: offsetX,
  y: offsetY,
  shape: Remote,
  debug: false,
  containerWidth: 620, // Static
  containerHeight: 350, // Static
  shapeWidth: 450, // Static
  shapeHeight: 50,
  shapeOffsetX: shapeOffsetX, // Static
  shapeOffsetY: shapeOffsetY, // Static
  nameX: shapeOffsetX + 150, // value is offset to the shape
  nameY: shapeOffsetY + 30, // value is offset to the shape
  gates: [
    {
      id: "er1",
      name: "ER1",
      x: offsetX + 50,
      y: offsetY + 0,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 85,
        y: offsetY + 115,
      },
    },
    {
      id: "er2",
      name: "ER2",
      x: offsetX + 190,
      y: offsetY + 0,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 220,
        y: offsetY + 115,
      },
    },
    {
      id: "er3",
      name: "ER3",
      x: offsetX + 320,
      y: offsetY + 0,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 350,
        y: offsetY + 115,
      },
    },
  ],
};

export default EastRemote;
