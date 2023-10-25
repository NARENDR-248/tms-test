import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

const ChangePasswordStyles = {
  Container: styled(Box)(({}) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    width: "30em",
  })),

  Text: styled("p")(({}) => ({
    color: "#FFF",
    fontSize: "1.2em",
    fontStyle: "normal",
  })),

  Content: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1em",
  })),

  InputGroup: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1em",
  })),

  Label: styled("p")(({ theme }) => ({
    color: "#9F9F9F",
    fontSize: "1em",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    letterSpacing: "-0.363px",
  })),

  Error: styled("p")(({ theme }) => ({
    color: "red",
    fontSize: "1em",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    letterSpacing: "-0.363px",
  })),

  CustomButton: styled(Button)(({ theme }) => ({
    backgroundColor: "#06A7E0",
    color: "#fff",
    width: "130px",
    height: "40px",
    border: "none",
    textTransform: "none",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#06A7E0",
    },
    "&:disabled": {
      color: "#fff",
      background: "#af9e9e30",
      cursor: "not-allowed",
    },
  })),
};

export default ChangePasswordStyles;
