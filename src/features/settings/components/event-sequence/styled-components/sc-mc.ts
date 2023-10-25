import { styled } from "@mui/material";

export const Components = {
  RootWrapper: styled("div")(() => ({
    display: "flex",
    gap: "28px",
    padding: "25px 34px",
  })),
  FilterWrapper: styled("div")(() => ({
    flex: 0,
  })),
  MobileWrapper: styled("div")(()=>({
    width: "100%",
    overflow: "auto",
  })),
  ChartWrapper: styled("div")(() => ({
    flex: 1,
    minHeight: "75vh",
    maxHeight: "calc(100vh - 73px)",
    height: "calc(100vh - 73px)",
    overflowY: "auto",
  })),
};
