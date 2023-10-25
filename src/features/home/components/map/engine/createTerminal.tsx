import { foregroundColor } from "@/features/constants/colors";
import createGate from "./createGate";

// createTerminal creates the terminal in the map
const createTerminal = (map: any, obj: any, isArabic) => {
  const terminalObject = map
    .append("foreignObject")
    .attr("class", "terminal")
    .attr("x", obj.x)
    .attr("y", obj.y)
    .attr("width", obj.containerWidth)
    .attr("height", obj.containerHeight);

  // Create a container for the foreignObject content
  const terminalObjectContainer = terminalObject.append("xhtml:div");

  // Insert your custom SVG code into the foreignObject container
  terminalObjectContainer.html(
    obj.shape({
      name_en: obj.name_en,
      name_ar: obj.name_ar,
      nameX: obj.nameX,
      nameY: obj.nameY,
      debug: obj.debug,
      shapeWidth: obj.shapeWidth,
      shapeHeight: obj.shapeHeight,
      containerWidth: obj.containerWidth,
      containerHeight: obj.containerHeight,
      shapeOffsetX: obj.shapeOffsetX,
      shapeOffsetY: obj.shapeOffsetY,
    }),
  );
  if (typeof obj.gates != "undefined")
    // console.log("generating for gates", isArabic);
    // for (let i = 0; i < obj.gates.length; ++i) {
    // let gate = obj.gates[i];
    // createGate(map, gate);
    // }
    // } else {
    // console.log("generating for gates en", isArabic);
    for (let i = obj.gates.length - 1; i > -1; --i) {
      let gate = obj.gates[i];
      createGate(map, gate);
    }
  // }
};

export default createTerminal;
