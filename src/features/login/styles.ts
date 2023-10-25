import { Box, Button, TextField, styled } from "@mui/material";

const LoginStyles = {
  RootContainer: styled(Box)(({ theme }) => ({
    height: "100vh",
    width: "100%",
    background: theme.palette.primary.main,
    display: "flex",
    flexDirection: "row",
    "@media (max-width:500px)": {
      flexDirection: "column",
      background: "none",
      position: "relative",
    },
  })),

  LeftContainer: styled("div")(({ theme }) => ({
    height: "100%",
    width: "40%",
    padding: "2em",
    display: "flex",
    flexDirection: "column",
    "@media (max-width:1120px)": {
      width: "45%",
    },
    "@media (max-width:500px)": {
      backgroundColor: theme.palette.primary.main,
      width: "100%",
      height: "60%",
      order: "2",
      borderTopLeftRadius: "46px",
      borderTopRightRadius: "46px",
      bottom: "0",
      position: "absolute",
      zIndex: "2",
    },
  })),

  RightContainer: styled("div")(({ theme }) => ({
    height: "100%",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    "@media (max-width:1120px)": {
      width: "55%",
    },
    "@media (max-width:500px)": {
      width: "100%",
      order: "1",
      height: "50%",
      overflow: "hidden",
      position: "absolute",
      zIndex: "1",
    },
  })),

  Logo: styled("img")(({ theme }) => ({
    height: "1.5em",
    width: "5em",
    "@media (max-width:500px)": {
      position: "absolute",
      left: "2em",
      top: "2em",
      zIndex: "3",
    },
  })),

  Content: styled("div")(({ theme }) => ({
    margin: "auto 1.5em",
    height: "40%",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    "@media (max-width:1450px)": {
      width: "65%",
    },
    "@media (max-width:1350px)": {
      width: "70%",
    },
    "@media (max-width:1130px)": {
      width: "73%",
    },
    "@media (max-width:935px)": {
      width: "75%",
    },
    "@media (max-width:821px)": {
      width: "100%",
      margin: "auto 0",
    },
    "@media (max-width:500px)": {
      margin: "0",
    },
  })),

  Heading: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
  })),

  Header: styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "end",
  })),

  Text: styled("p")(({ theme }) => ({
    color: "#FFF",
    fontSize: "3em",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    letterSpacing: "0.64px",

    "@media (max-width:340px)": {
      fontSize: "2.5em",
    },
  })),

  Dot: styled("div")(({ theme }) => ({
    height: "7px",
    width: "7px",
    borderRadius: "100%",
    background: "#3BA5E1",
    marginBottom: "1em",
  })),

  Slogan: styled("p")(({ theme }) => ({
    color: "#FFF",
    fontSize: "1em",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "33px",
    letterSpacing: "0.2px",
    opacity: 0.5,
    marginTop: "-14px",
    "@media (max-width:340px)": {
      fontSize: "0.85em",
    },
  })),

  FormContainer: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  })),

  FormField: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
  })),

  FormLabel: styled("p")(({ theme }) => ({
    color: "#FFF",
    fontSize: "0.8em",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  })),

  CustomTextField: styled(TextField)(({ theme }) => ({
    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
    "& .MuiInput-underline:hover:before": {
      border: "none !important",
    },
    "& .MuiInputBase-input": {
      color: "#fff",
      // opacity: 0.3,
    },
  })),

  ButtonGroup: styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  })),

  CustomButton: styled("button")(({ theme }) => ({
    color: "#fff",
    textAlign: "center",
    fontSize: "1em",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    cursor: "pointer",
    textTransform: "capitalize",
    borderRadius: "0",

    background: "#3BA5E1",
    padding: "0.6em 3em",
    border: "0",

    "&:hover": {
      backgroundColor: "#3BA5E1",
    },

    "&:disabled": {
      color: "#fff",
      background: "#af9e9e30",
      cursor: "not-allowed",
      pointerEvents: "all !important",
    },

    "@media (max-width:1350px)": {
      padding: "0.6em 2em",
    },

    "@media (max-width:500px)": {
      padding: "0.6em 3em",
    },

    "@media (max-width:340px)": {
      padding: "0.6em 2.5em",
      fontSize: "0.85em",
    },
  })),

  CustomLink: styled("a")(({ theme }) => ({
    color: "#3BA5E1",
    fontSize: "1em",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    opacity: 0.5,
    cursor: "pointer",

    "@media (max-width:1000px)": {
      fontSize: "0.9em",
    },
    "@media (max-width:340px)": {
      fontSize: "0.8em",
    },
  })),

  Poster: styled("img")(({ theme }) => ({
    width: "100%",
    height: "100%",
    objectPosition: "40% 59%",
    objectFit: "cover",
    "@media (max-width:500px)": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "0 92%",
      zIndex: "1",
    },
  })),

  Shadow: styled("div")(({ theme }) => ({
    height: "100%",
    width: "100%",
    background: "black",
    position: "absolute",
    opacity: 0.6,
    display: "none",
    zIndex: "2",

    "@media (max-width:500px)": {
      display: "block",
    },
  })),

  ErrorText: styled("p")(({ theme }) => ({
    color: "red",
  })),
};

export default LoginStyles;
