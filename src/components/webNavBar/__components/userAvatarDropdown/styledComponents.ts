import { Avatar, Box, styled } from "@mui/material";

const UserAvatar = {
  Container: styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5em 1em",
    zIndex: "4",
    // borderBottom: `2px solid ${theme.palette.common.black}`,
    // "@media (max-width: 420px)": {
    //   display: "none",
    // },
  })),
  StyledAvatar: styled(Avatar)(({}) => ({
    cursor: "pointer",
  })),
};

export default UserAvatar;
