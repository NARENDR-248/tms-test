import { foregroundColor } from "@/features/constants/colors";

const TerminalFiveRemote = (obj: any) => {
  return `
    <svg
    direction="ltr"
     xmlns="http://www.w3.org/2000/svg" width="${obj.containerWidth}" height="${obj.containerHeight}">
    <rect x="${obj.shapeOffsetX}" y="${obj.shapeOffsetY}" width="${obj.shapeWidth}" height="${
      obj.shapeHeight
    }" fill="${foregroundColor}"/>
  <rect x="${obj.shapeOffsetX + obj.shapeWidth / 3}" y="${obj.shapeOffsetY + obj.shapeHeight}" width="${
    obj.shapeWidth / 3
  }" height="${obj.shapeHeight * 3}" fill="${foregroundColor}" />
  // Bottom Bar
  <rect rx=10 ry=10 x="${obj.shapeOffsetX + ((obj.shapeWidth / 3) * 75) / 100}" y="${
    obj.shapeOffsetY + obj.shapeHeight + obj.shapeHeight * 3 - 5
  }" width="${obj.shapeWidth / 2}" height="${10}" fill="${foregroundColor}" style="border-radius: 20px;" /> 

    <text class="terminalName" name_en="${obj.name_en}" name_ar="${obj.name_ar}" x="${obj.nameX}" y="${
      obj.nameY
    }" fill="#A7A7A7">${obj.name_en}</text> 
    </svg>
    `;
};

export default TerminalFiveRemote;
