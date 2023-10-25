import Remote from "../commons/shapes/remote";
import { largeGateArea } from "../configs";

let offsetX = 600;
let offsetY = 1800;

let shapeOffsetX = 0; // Relative
let shapeOffsetY = 125; // Relative

const farEastRemoteOne = {
  id: 1,
  name_en: "F A R &nbsp; E A S T &nbsp; R E M O T E &nbsp; 1",
  name_ar: "1 &nbsp; البعيد &nbsp; الأقصى &nbsp; الشرق",

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
  nameX: shapeOffsetX + 250, // value is offset to the shape
  nameY: shapeOffsetY + 30, // value is offset to the shape
  gates: [
    {
      id: "FEOne1",
      name: "FE 101",
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
      id: "FEOne2",
      name: "FE 102",
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
      id: "FEOne3",
      name: "FE 103",
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
      id: "FEOne4",
      name: "FE 104",
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
      id: "FEOne5",
      name: "FE 105",
      x: offsetX + 570,
      y: offsetY + 0,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 605,
        y: offsetY + 115,
      },
    },
    // Down
    {
      id: "FEOne6",
      name: "FE 106",
      x: offsetX + 50,
      y: offsetY + 190,
      width: largeGateArea.width,
      height: largeGateArea.height,
      flip: true,
      connector: {
        x: offsetX + 82,
        y: offsetY + 170,
      },
    },
    {
      id: "FEOne7",
      name: "FE 107",
      x: offsetX + 180,
      y: offsetY + 190,
      width: largeGateArea.width,
      height: largeGateArea.height,
      flip: true,
      connector: {
        x: offsetX + 215,
        y: offsetY + 170,
      },
    },
    {
      id: "FEOne8",
      name: "FE 108",
      x: offsetX + 310,
      y: offsetY + 190,
      width: largeGateArea.width,
      height: largeGateArea.height,
      flip: true,
      connector: {
        x: offsetX + 340,
        y: offsetY + 175,
      },
    },
    {
      id: "FEOne9",
      name: "FE109",
      x: offsetX + 440,
      y: offsetY + 190,
      width: largeGateArea.width,
      height: largeGateArea.height,
      flip: true,
      connector: {
        x: offsetX + 470,
        y: offsetY + 170,
      },
    },
    {
      id: "FEOne10",
      name: "FE 110",
      x: offsetX + 570,
      y: offsetY + 190,
      width: largeGateArea.width,
      height: largeGateArea.height,
      flip: true,
      connector: {
        x: offsetX + 605,
        y: offsetY + 170,
      },
    },
  ],
};

export default farEastRemoteOne;
