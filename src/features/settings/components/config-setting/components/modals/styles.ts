import { styled } from "@mui/material";

const ConfigModalsStyles = {
  ButtonContainer: styled("div")(({}) => ({
    display: "flex",
    gap: "5px",
  })),

  Container: styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    minHeight: "100%",
    "@media (max-width: 420px)": {
      gap: "15px",
    },
  })),

  HeadingContainer: styled("div")(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  })),

  Heading: styled("p")(() => ({
    color: " #FFF",
    fontSize: "24px",
    fontWeight: 700,
  })),

  SubContainer: styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    marginBottom: "10px",
  })),

  FeildContainer: styled("div")(() => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (max-width: 450px)": {
      gap: "10px",
    },
  })),

  FeildTextContainer: styled("div")(() => ({
    width: "30%",
  })),

  ButtonsContainer: styled("div")(() => ({
    display: "flex",
    justifyContent: "flex-end",
    gap: "20px",
  })),

  FeildText: styled("p")(() => ({
    color: "#9F9F9F",
    // textAlign: "right",
    fontSize: "0.8em",
    fontWeight: 500,
    letterSpacing: "-0.36 px",
  })),

  DeleteDiv: styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "25px",
    borderRadius: "8px",
  })),

  DeleteSubDiv: styled("div")(() => ({
    display: "flex",
    gap: "30px",
  })),

  DeleteText: styled("p")(() => ({
    color: "#fff",
    fontSize: "24px",
    fontWeight: 700,
  })),

  DeleteSubText: styled("p")(() => ({
    fontWeight: "400",
    fontSize: "0.9em",
    textAlign: "center",
    color: "#FFF",
    opacity: 0.5,
  })),

  DeleteButtonDiv: styled("div")(() => ({
    display: "flex",
    gap: "10px",
  })),

  PlainDiv: styled("div")(() => ({
    width: "65%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "@media (max-width: 420px)": {
      gap: "10px",
    },
  })),

  PlainSubDiv: styled("div")(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "5px",
  })),

  PlainText: styled("p")(() => ({
    color: "#fff",
    fontSize: "0.8em",
  })),

  Error: styled("div")(() => ({
    color: "red",
  })),
};

export default ConfigModalsStyles;
