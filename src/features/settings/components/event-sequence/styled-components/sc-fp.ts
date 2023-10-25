import Image from "next/image";
import { Typography, ListItemButton, Chip, Stack, styled } from "@mui/material";

export const Components = {
  FilterPanel: styled("div")(() => ({
    width: "293px",
    height: "75vh",
    maxHeight: "75vh",
    background: "#0B2032",
    padding: "25px 0px",
    position: "relative",
  })),
  PanelName: styled(Typography)({
    paddingLeft: "23px",
    fontSize: "18px",
    fontWeight: "700px",
    color: "white",
  }),
  ListButton: styled(ListItemButton)({
    paddingLeft: "23px",
    color: "rgba(255,255,255,0.5)",
    fontSize: "14px",
    fontWeight: "500",
  }),
  ListText: styled(Typography)({
    color: "rgba(255,255,255,0.5)",
    fontSize: "14px",
    fontWeight: "500",
  }),
  SearchInputWrapper: styled("div")({
    padding: "0px 23px",
  }),
  SearchInput: styled("div")(() => ({
    height: "38px",
    backgroundColor: "#1F3A51",
    borderRadius: "4px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginTop: "17px",
    marginBottom: "17px",
  })),
  SearchIcon: styled(Image)(() => ({
    position: "absolute",
    left: "12px",
    top: "11.28px",
  })),
  Input: styled("input")(() => ({
    background: "transparent",
    outline: "none",
    border: "none",
    textIndent: "20px",
    marginLeft: "12px",
    color: "#ffffff",
    "&::placeholder": {
      color: "rgba(255, 255, 255, 0.5)",
    },
  })),
  ChipWrapper: styled(Stack)({
    padding: "0px 23px",
    overflowX: "auto",
    "&:-webkit-scroll": {},
  }),
  Chip: styled(Chip)({
    width: "inherit",
    background: "white",
    fontSize: "10.74px",
    fontWeight: 500,
    color: "#0B2032",
  }),
  ClearAll: styled(Typography)(() => ({
    fontSize: "11px",
    fontWeight: 600,
    color: "#3BA5E1",
    marginTop: "10px",
    position: "absolute",
    right: "25px",
    cursor: "pointer",
  })),
  ButtonWrapper: styled("div")({
    position: "absolute",
    width: "inherit",
    background: "#0B2032",
    bottom: "0px",
    paddingRight: "24px",
    paddingTop: "15px",
    paddingBottom: "15px",
    display: "flex",
    justifyContent: "flex-end",
  }),
};
