import { foregroundColor } from "@/features/constants/colors";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Remote = (obj: any) => {
  return `
    <svg 
    direction="ltr"
    xmlns="http://www.w3.org/2000/svg" width="${obj.containerWidth}" height="${obj.containerHeight}">
    <rect x="${obj.shapeOffsetX}" y="${obj.shapeOffsetY}" width="${obj.shapeWidth}" height="${obj.shapeHeight}" fill="${foregroundColor}"/>
    <text class="terminalName" name_en="${obj.name_en}" name_ar="${obj.name_ar}" x="${obj.nameX}" y="${obj.nameY}" fill="#A7A7A7">${obj.name_en}</text> 
    </svg>
    `;
};

export default Remote;
