import { Button, Typography, styled } from "@mui/material";

const GroupDetailsStyles = {
  Container: styled("div")(({}) => ({
    minWidth: "100%",
    display: "flex",
    flexDirection: "column",
  })),
  BodyContainer: styled("div")(({}) => ({
    minWidth: "100%",
    margin: "0.5em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "2em",
  })),
  MiniHeading: styled(Typography)(({}) => ({
    color: "#fff",
    opacity: "0.5",
    fontWeight: "500",
    fontSize: "1.2em",
  })),
  DescriptionContainer: styled("div")(({}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "0.3em",
  })),
  DescriptionText: styled(Typography)(({}) => ({
    color: "#fff",
    fontWeight: "500",
    fontSize: "1em",
  })),
  PermissionsContainer: styled("div")(({}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "0.3em",
  })),
  PermissionCardsContainer: styled("div")(({}) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "1em",
  })),
  MembersContainer: styled("div")(({}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "0.3em",
  })),
  MemberCardsContainer: styled("div")(({}) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    alignItems: "flex-start",
    gap: "1em",
  })),
};

export default GroupDetailsStyles;
