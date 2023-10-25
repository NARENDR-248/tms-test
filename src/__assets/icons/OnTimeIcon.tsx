import * as React from "react";
const OnTimeIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" {...props}>
    <ellipse cx={16.175} cy={15.838} fill="#6FCE74" rx={15.323} ry={15.294} />
    <path
      fill="#fff"
      d="M12.347 14.887c-.725 0-1.36-.159-1.904-.476a3.428 3.428 0 0 1-1.273-1.314c-.304-.566-.455-1.218-.455-1.956s.151-1.386.455-1.945a3.408 3.408 0 0 1 1.273-1.325c.545-.317 1.18-.476 1.904-.476.717 0 1.348.159 1.893.476.545.318.97.76 1.273 1.325.304.559.455 1.207.455 1.945s-.151 1.39-.455 1.956a3.333 3.333 0 0 1-1.273 1.314c-.545.317-1.176.476-1.893.476Zm0-1.19c.69 0 1.238-.228 1.645-.683.414-.455.62-1.08.62-1.873 0-.793-.206-1.418-.62-1.873-.407-.455-.956-.683-1.645-.683-.69 0-1.242.228-1.656.683-.414.455-.62 1.08-.62 1.873 0 .793.206 1.418.62 1.873.414.455.966.683 1.656.683Zm4.79 1.066V7.519h1.325l3.405 5.102V7.519h1.324v7.244h-1.324l-3.405-5.091v5.09h-1.324ZM10.104 23.365v-4.281H8.64v-.739h3.85v.739h-1.47v4.281h-.917Zm3.068 0v-5.02h.917v5.02h-.918Zm1.89 0v-5.02h1.09l1.6 3.184 1.577-3.184h1.09v5.02h-.918v-3.464l-1.398 2.747h-.725L15.98 19.9v3.464h-.918Zm6.33 0v-5.02h3.278v.739h-2.36v1.377h2.145v.717H22.31v1.448h2.359v.739h-3.277Z"
    />
  </svg>
);
export default OnTimeIcon;
