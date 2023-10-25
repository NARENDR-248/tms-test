import Remote from "../commons/shapes/remote";
import { largeGateArea } from "../configs";

let offsetX = 1960;
let offsetY = -100;

let shapeOffsetX = 0; // Relative
let shapeOffsetY = 125; // Relative

const CargoApron = {
  id: 1,
  name_en: "C A R G O &nbsp; A P R O N",
  name_ar: "البضائع &nbsp; ساحة",
  x: offsetX,
  y: offsetY,
  shape: Remote,
  debug: false,
  containerWidth: 620, // Static
  containerHeight: 350, // Static
  shapeWidth: 620, // Static
  shapeHeight: 80,
  shapeOffsetX: shapeOffsetX, // Static
  shapeOffsetY: shapeOffsetY, // Static
  nameX: shapeOffsetX + 230, // value is offset to the shape
  nameY: shapeOffsetY + 40, // value is offset to the shape
  gates: [
    {
      id: "ca1",
      name: "CA1",
      x: offsetX + 10,
      y: offsetY + 0,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 42,
        y: offsetY + 115,
      },
    },
    {
      id: "ca2",
      name: "CA2",
      x: offsetX + 140,
      y: offsetY + 0,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 175,
        y: offsetY + 115,
      },
    },
    {
      id: "ca3",
      name: "CA3",
      x: offsetX + 270,
      y: offsetY + 0,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 300,
        y: offsetY + 115,
      },
    },
    {
      id: "ca4",
      name: "CA4",
      x: offsetX + 400,
      y: offsetY + 0,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 430,
        y: offsetY + 115,
      },
    },
    {
      id: "ca5",
      name: "CA5",
      x: offsetX + 530,
      y: offsetY + 0,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 565,
        y: offsetY + 115,
      },
    },

    // BOTTOM GATES
    {
      id: "ca6",
      name: "CA6",
      flip: true,
      x: offsetX + 80,
      y: offsetY + 225,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 115,
        y: offsetY + 200,
      },
    },
    {
      id: "ca7",
      name: "CA7",
      flip: true,
      x: offsetX + 210,
      y: offsetY + 225,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 240,
        y: offsetY + 200,
      },
    },
    {
      id: "ca8",
      name: "CA8",
      flip: true,
      x: offsetX + 340,
      y: offsetY + 225,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 370,
        y: offsetY + 200,
      },
    },
    {
      id: "ca9",
      name: "CA9",
      flip: true,
      x: offsetX + 470,
      y: offsetY + 225,
      level: 50,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 500,
        y: offsetY + 200,
      },
    },
  ],
};

export default CargoApron;
