import React from "react";
import MembersCardStyles from "./styled";
import Image from "next/image";
import { IconButton } from "@mui/material";
import MoreIcon from "@/__assets/icons/More";

const MemberCard = ({ avatar, name, email }) => {
  return (
    <MembersCardStyles.Container>
      <MembersCardStyles.AvatarContainer>
        <Image
          src={avatar}
          alt="avatar"
          width={50}
          height={50}
          style={{
            borderRadius: "100%",
          }}
        />
      </MembersCardStyles.AvatarContainer>

      <MembersCardStyles.UserDetailsContainer>
        <MembersCardStyles.Name>{name}</MembersCardStyles.Name>
        <MembersCardStyles.Email>{email}</MembersCardStyles.Email>
      </MembersCardStyles.UserDetailsContainer>

      <MembersCardStyles.MoreOptionsContainer>
        <IconButton>
          <MoreIcon isVertical={true} color="#9f9f9f" />
        </IconButton>
      </MembersCardStyles.MoreOptionsContainer>
    </MembersCardStyles.Container>
  );
};

export default MemberCard;
