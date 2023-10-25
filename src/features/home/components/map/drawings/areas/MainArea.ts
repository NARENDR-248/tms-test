import Remote from "../commons/shapes/remote";
import { largeGateArea } from "../configs";
import AttachedTerminal from "../commons/shapes/attachedterminal";
import MainAreaSVG from "../commons/shapes/mainArea";

let offsetX = 450;
let offsetY = 940;

let shapeOffsetX = 0; // Relative
let shapeOffsetY = 125; // Relative

const MainArea = {
  id: 1,
  name: "",
  x: offsetX,
  y: offsetY,
  shape: MainAreaSVG,
  debug: false,
  containerWidth: 3600, // Static
  containerHeight: 600, // Static
  shapeWidth: 900, // Static
  shapeHeight: 450, // Static
  shapeOffsetX: shapeOffsetX, // Static
  shapeOffsetY: shapeOffsetY, // Static
  nameX: shapeOffsetX + 25, // value is offset to the shape
  nameY: shapeOffsetY + 10, // value is offset to the shape
};

export default MainArea;
