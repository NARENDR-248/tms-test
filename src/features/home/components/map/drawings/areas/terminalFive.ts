import Remote from "../commons/shapes/remote";
import { largeGateArea } from "../configs";
import TerminalFiveRemote from "../commons/shapes/terminalFiveRemote";

let offsetX = 1820;
let offsetY = 2500;

let shapeOffsetX = 0; // Relative
let shapeOffsetY = 125; // Relative

const terminalFive = {
  id: 1,
  name_en: "T E R M I N A L &nbsp; 5",
  name_ar: "5 &nbsp; المحطة",
  x: offsetX,
  y: offsetY,
  shape: TerminalFiveRemote,
  debug: false,
  containerWidth: 1090, //620 // Static
  containerHeight: 350, // Static
  shapeWidth: 1090, // Static
  shapeHeight: 50,
  shapeOffsetX: shapeOffsetX, // Static
  shapeOffsetY: shapeOffsetY, // Static
  nameX: shapeOffsetX + 480, // value is offset to the shape
  nameY: shapeOffsetY + 100, // value is offset to the shape
  gates: [
    {
      id: "tFive1",
      name: "504",
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
      id: "tFive2",
      name: "505",
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
      id: "tFive3",
      name: "506",
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
      id: "tFive4",
      name: "507",
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
      id: "tFive5",
      name: "508",
      x: offsetX + 570,
      y: offsetY + 0,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 605,
        y: offsetY + 115,
      },
    },
    {
      id: "tFive6",
      name: "509",
      x: offsetX + 700,
      y: offsetY + 0,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 730,
        y: offsetY + 115,
      },
    },
    {
      id: "tFive7",
      name: "510",
      x: offsetX + 830,
      y: offsetY + 0,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 862,
        y: offsetY + 115,
      },
    },
    {
      id: "tFive8",
      name: "511",
      x: offsetX + 960,
      y: offsetY + 0,
      width: largeGateArea.width,
      height: largeGateArea.height,
      connector: {
        x: offsetX + 993,
        y: offsetY + 115,
      },
    },
  ],
};

export default terminalFive;
