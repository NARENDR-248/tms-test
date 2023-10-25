import { Box, styled } from "@mui/material";
import Image from "next/image";

// Snippet to use later in sha Allah
// "@media (min-width: 420px)": {
//   display: "none",
// },

const FlightCodesStyles = {
  Container: styled("div")(({ theme }) => ({})),

  Code: styled("p")(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "1em",
    color: "#D6D6D6",
    textTransform: "uppercase",
  })),

  Split: styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "0.5em",
  })),

  Icon: styled(Image)(({ theme }) => ({
    height: "1em",
    width: "1em",
  })),

  Destination: styled("p")(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "0.8em",
    color: " #D6D6D6",
    opacity: "0.5",
    textTransform: "uppercase",
  })),
};

export default FlightCodesStyles;
