// import { DM_Sans } from "next/font/google";

// const dmSans = DM_Sans({
//   weight: ["400", "500", "700"],
//   subsets: ["latin"],
// });

// export { dmSans };
// checking out

import DM_Sans from "next/font/local";
// Font files can be colocated inside of `pages`
const dmSans = DM_Sans({
  src: [
    {
      path: "/fonts/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/DMSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "/fonts/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/DMSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

// const dmSans = DM_Sans({
//   weight: ["400", "500", "700"],
//   subsets: ["latin"],
// });

export { dmSans };
