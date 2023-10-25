import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const ProfileDetailsStyles = {
  Container: styled(Box)(({}) => ({
    display: "flex",
    flexDirection: "column",
    gap: "2em",
    width: "50em",
  })),

  ImageBox: styled("div")(({ theme }) => ({
    position: "relative",
    height: "6em",
    width: "6em",
  })),

  CustomImage: styled("img")(({ theme }) => ({
    position: "absolute",
    height: "100%",
    width: "100%",
    borderRadius: "100%",
  })),

  IconBox: styled("div")(({ theme }) => ({
    position: "absolute",
    height: "1.8em",
    width: "1.8em",
    borderRadius: "100%",
    background: "#3BA5E1",
    right: "0",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })),

  Content: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "2em",
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
    minWidth: "8em",
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
