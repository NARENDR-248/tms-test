import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";

export const Components = {
  MobileHeading: styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  })),
  MobilePageName: styled(Typography)(() => ({
    fontSize: "18px",
    fontWeight: 700,
    color: "#ffffff",
  })),
  MobileFilter: styled(Box)(() => ({
    position: "relative",
  })),
  MobileFilterIcon: styled(Image)(() => ({
    cursor: "pointer",
  })),
  MobileIsFilterApplied: styled(Box)(() => ({
    width: "12px",
    height: "12px",
    borderRadius: "6px",
    background: "#3BA5E1",
    position: "absolute",
    right: "-2px",
    top: "-3px",
  })),
};
