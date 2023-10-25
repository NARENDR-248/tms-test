import React from "react";
import PermissionCardStyles from "./styled";
import { IconButton } from "@mui/material";
import MoreIcon from "@/__assets/icons/More";

const PermissionCard = ({ name, description }) => {
  return (
    <PermissionCardStyles.Container>
      <PermissionCardStyles.TopContainer>
        <PermissionCardStyles.Title>{name}</PermissionCardStyles.Title>
        {/* <PermissionCardStyles.ModalContainer> */}
        {/* <IconButton>
          <MoreIcon isVertical={true} color="#9f9f9f" />
        </IconButton> */}
        {/* </PermissionCardStyles.ModalContainer> */}
      </PermissionCardStyles.TopContainer>
      <PermissionCardStyles.Description>{description}</PermissionCardStyles.Description>
    </PermissionCardStyles.Container>
  );
};

export default PermissionCard;
