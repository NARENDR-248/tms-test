import { foregroundColor } from "@/features/constants/colors";

const AttachedTerminal = (obj: any) => {
  return `
  <svg 
  direction="ltr"
  width="${obj.containerWidth}" height="${obj.containerHeight}">
  <svg width="${obj.containerWidth}" height="${obj.containerHeight}" viewBox="0 0 181 154" 
  xmlns="http://www. w3.org/2000/svg">
  <path d="M72.701 2.84998L0.874877 127.935C0.317102 128.906 0.189942 130.066 0.240 131.135L6.65526 150.755C7.17966 152.433 8.73376 153.576 10.4919 153.576H85.416L166.399 153.40.944 153.995 169.357 153.116 170.034 151.728L179.945 131.38C180.53 130.179 180.48 128.765 179.811 127.608L107.68 2.83977C106.961 1.59724 105.635 0.831999 104.2 0.831999H76.1868C74.7473 0.831999 73.4178 1.6017 72.701 2.84998Z" fill="${foregroundColor}"/>
  </svg>

  <text class="terminalName" name_en="${obj.name_en}" name_ar="${obj.name_ar}" x="${obj.nameX}" y="${obj.nameY}" fill="#A7A7A7">${obj.name_en}</text> 
  </svg>
  `;
};

export default AttachedTerminal;
