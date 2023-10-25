import { Typography, Button, styled } from "@mui/material";
import Image from "next/image";

export const Components = {
  RenameBtn: styled(Button)(() => ({
    padding: "8px 10px",
    borderRadius: "5px",
    border: "1px solid #3BA5E1",
    background: "transparent",
    position: "absolute",
    right: "22px",
  })),
  RenamePencil: styled(Image)(() => ({
    marginRight: "7.88px",
  })),
  RenameText: styled(Typography)(() => ({
    fontSize: "14px",
    color: "#06A7E0",
    fontWeight: 500,
    textTransform: "capitalize",
  })),
};
