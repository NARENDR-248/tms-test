import { Typography, styled } from "@mui/material";

const MembersCardStyles = {
  Container: styled("div")(({ theme }) => ({
    minWidth: "22em",
    minHeight: "6em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0.5em 1em",
    backgroundColor: "#152E44",
    borderRadius: "0.3em",
  })),
  AvatarContainer: styled("div")(({ theme }) => ({
    minWidth: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })),
  UserDetailsContainer: styled("div")(({ theme }) => ({
    minWidth: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  })),
  Name: styled(Typography)(({}) => ({
    fontWeight: "500",
    fontSize: "1em",
    opacity: "0.7",
  })),
  Email: styled(Typography)(({}) => ({
    fontWeight: "400",
    fontSize: "0.8em",
    opacity: "0.6",
  })),
  MoreOptionsContainer: styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  })),
};

export default MembersCardStyles;
