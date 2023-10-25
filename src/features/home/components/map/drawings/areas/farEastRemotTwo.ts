import Remote from "../commons/shapes/remote";
import { largeGateArea } from "../configs";

let offsetX = 2000;
let offsetY = 1800;

let shapeOffsetX = 0; // Relative
let shapeOffsetY = 125; // Relative

const farEastRemoteTwo = {
  id: 1,
  name_en: "F A R &nbsp; E A S T &nbsp; R E M O T E &nbsp; 2",
  name_ar: "2 &nbsp; البعيد &nbsp; الأقصى &nbsp; الشرق",
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
      id: "FETwo1",
      name: "FE 201",
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
      id: "FETwo2",
      name: "FE 202",
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
      id: "FETwo3",
      name: "FE 203",
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
      id: "FETwo4",
      name: "FE 204",
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
      id: "FETwo5",
      name: "FE 205",
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
      id: "FETwo6",
      name: "FE 206",
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
      id: "FETwo7",
      name: "FE 207",
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
      id: "FETwo8",
      name: "FE 208",
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
      id: "FETwo9",
      name: "FE 209",
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
      id: "FETwo10",
      name: "FE 210",
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

export default farEastRemoteTwo;
