import React from "react";
import { styled } from "@mui/material";

// Importing Libs

// Importing Components
import MainContainer from "./components/MainContainer";

// Styled Components
const Wrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  background: "#0A1A29", //theme.palette.primary.main,
}));

const SequenceScreening = () => {
  return (
    <Wrapper>
      <MainContainer />
    </Wrapper>
  );
};

export default SequenceScreening;
