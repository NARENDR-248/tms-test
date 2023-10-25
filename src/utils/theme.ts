// import { DM_Sans } from "next/font/google";
import DM_Sans from "next/font/local";

import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// export const dmSans = DM_Sans({
//   weight: ["400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
//   fallback: ["Helvetica", "Arial", "sans-serif"],
// });
export const dmSans = DM_Sans({
  src: [
    {
      path: "../../public/fonts/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/DMSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/DMSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#0A1A29",
      light: "#0B2032",
    },
    secondary: {
      main: "#528DC4",
      dark: "#08131D",
    },
    error: {
      main: red.A400,
    },
    common: {
      white: "#fff",
      black: "#000",
    },
  },
  typography: {
    fontFamily: dmSans.style.fontFamily,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        color: "secondary",
        variant: "outlined",
      },
    },
  },
});

export default theme;
