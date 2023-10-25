import { styled } from "@mui/material";

const ModalsStyles = {
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
};

export default ModalsStyles;
