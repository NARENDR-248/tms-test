import Remote from "../commons/shapes/remote";
import { largeGateArea } from "../configs";

let offsetX = 3910;
let offsetY = 750;

let shapeOffsetX = 0; // Relative
let shapeOffsetY = 125; // Relative

const BelowEastRemote = {
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
      id: "be1",
      name: "BE1",
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
      id: "be2",
      name: "BE2",
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
      id: "be3",
      name: "BE3",
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
      id: "be4",
      name: "BE4",
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
      id: "be5",
      name: "BE5",
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

export default BelowEastRemote;
