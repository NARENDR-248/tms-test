import Remote from "../commons/shapes/remote";
import { largeGateArea } from "../configs";

let offsetX = 0;
let offsetY = 750;

let shapeOffsetX = 0; // Relative
let shapeOffsetY = 125; // Relative

const BelowWestRemote = {
  id: 1,
  name_en: "",
  name_ar: "",
  x: offsetX,
  y: offsetY,
  shape: Remote,
  debug: false,
  containerWidth: 700, //620 // Static
  containerHeight: 350, // Static
  shapeWidth: 700, // Static
  shapeHeight: 50,
  shapeOffsetX: shapeOffsetX, // Static
  shapeOffsetY: shapeOffsetY, // Static
  nameX: shapeOffsetX + 230, // value is offset to the shape
  nameY: shapeOffsetY + 40, // value is offset to the shape
  gates: [
    {
      id: "bw1",
      name: "BW1",
      x: offsetX + 50,
      y: offsetY + 0,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 82,
        y: offsetY + 115,
      },
    },
    {
      id: "bw2",
      name: "BW2",
      x: offsetX + 180,
      y: offsetY + 0,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 215,
        y: offsetY + 115,
      },
    },
    {
      id: "bw3",
      name: "BW3",
      x: offsetX + 310,
      y: offsetY + 0,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 340,
        y: offsetY + 115,
      },
    },
    {
      id: "bw4",
      name: "BW4",
      x: offsetX + 440,
      y: offsetY + 0,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 470,
        y: offsetY + 115,
      },
    },
    {
      id: "bw5",
      name: "BW5",
      x: offsetX + 570,
      y: offsetY + 0,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 605,
        y: offsetY + 115,
      },
    },
  ],
};

export default BelowWestRemote;
