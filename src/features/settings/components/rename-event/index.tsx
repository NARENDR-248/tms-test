import React, { FC } from "react";

// Importing Components
import MainContainer from "./components/MainContainer";
import RenameEventDialog from "./components/RenameEventDialog";

// Importing Css
import "./assets/css/global.css";

// Styled Components
import { Wrapper } from "./styled-components/sc-index";

const RenameEvent: FC = () => {
  return (
    <Wrapper>
      {/* Rename Event Dialog */}
      <RenameEventDialog />
      <MainContainer />
    </Wrapper>
  );
};

export default RenameEvent;
