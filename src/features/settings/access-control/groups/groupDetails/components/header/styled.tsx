import { Button, Typography, styled } from "@mui/material";

const HeaderStyles = {
  Container: styled("div")(({}) => ({
    minWidth: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 0 1em 0",
  })),

  LHSContainer: styled("div")(({}) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.8em",
  })),

  RHSContainer: styled("div")(({}) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  })),

  ReturnButton: styled(Button)(({}) => ({
    textTransform: "none",
    color: "#fff",
    gap: "3px",
  })),

  DeleteButton: styled(Button)(({}) => ({
    textTransform: "none",
    borderRadius: "0",
    color: "#3BA5E1",
    border: " 1px solid #3BA5E1",
    gap: "5px",
  })),

  EditButton: styled(Button)(({}) => ({
    textTransform: "none",
    color: "#fff",
    backgroundColor: "#3BA5E1",
    borderRadius: "0",
    gap: "5px",
    ":hover": {
      backgroundColor: "#06A7E0",
    },
  })),

  Heading: styled(Typography)(({}) => ({
    fontWeight: "500",
    fontSize: "1.3em",
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
