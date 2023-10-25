import { foregroundColor } from "@/features/constants/colors";

const createGate = (map: any, gate: any) => {
  if (gate.hide) {
    return;
  }
  // Assign a unique ID to the gate element for rotation
  const gateGroup = map.append("g");
  // .attr("id", `gate${gate.id}`);

  if (typeof gate.connector !== "undefined") {
    gateGroup
      .append("rect")
      .attr("x", gate.connector.x)
      .attr("y", gate.connector.y)
      .attr("width", 15)
      .attr("height", 15)
      .style("fill", "#12283D");
  }

  const gateForeignObject = gateGroup
    .append("foreignObject")
    .style("overflow", `visible`)
    .style("direction", `ltr`)
    .attr("id", `${gate.id}`)
    .attr("class", `gates`)
    .attr("name", `${gate.name}`)
    .attr("rot", gate.rotate ? gate.rotate : 0)
    .attr("flip", gate.flip ? gate.flip : false)
    .attr("x", gate.x)
    .attr("y", gate.y)
    .attr("width", gate.width)
    .attr("height", gate.height)
    .style("fill", foregroundColor);

  // if (typeof gate.rotate !== "undefined") {
  //   gateForeignObject.attr("transform", function () {
  //     var x1 = gate.x + gate.width / 2; //the center x about which you want to rotate
  //     var y1 = gate.y + gate.height / 2; //the center y about which you want to rotate
  //     return `rotate(${gate.rotate}, ${x1}, ${y1})`; //rotate 180 degrees about x and y
  //   });
  // }
};

export default createGate;
