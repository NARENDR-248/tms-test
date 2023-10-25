import { Button, Typography, styled } from "@mui/material";

const HeaderStyles = {
  Container: styled("div")(({}) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 0 1em 0",
  })),

  Heading: styled(Typography)(({}) => ({
    fontWeight: "700",
    fontSize: "1.4em",
  })),

  ActionsContainer: styled("div")(({}) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.7em",
  })),

  AddButton: styled(Button)(({}) => ({
    textTransform: "none",
    borderRadius: "0",
    backgroundColor: "#3BA5E1",
    ":hover": {
      backgroundColor: "#06A7E0",
    },
  })),
};

export default HeaderStyles;
