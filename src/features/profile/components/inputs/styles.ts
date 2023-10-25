import { TextField, styled } from "@mui/material";

export const InputsStyles = {
  CustomTextField: styled(TextField)(({ theme }) => ({
    backgroundColor: "#1F3A51",
    height: "30px",
    width: "55%",
    borderRadius: "5px",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiOutlinedInput-input": {
      padding: "5px 8px",
      color: "#fff",
    },
  })),
};
