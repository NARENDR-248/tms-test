import { Typography, styled, Select } from "@mui/material";
import Image from "next/image";

export const Components = {
  EventContainer: styled("div")(() => ({
    position: "relative",
    // display: "inline-flex",
    // flexWrap: "wrap",
    // flex: 1,
  })),
  EventTile: styled("div")(() => ({
    width: "100%",
    height: "72px",
    backgroundColor: "#0B2032",
    borderBottom: "2px solid #1F3A51",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 36px",
    // "@media (max-width: 576px)": {
    //   flexWrap: "wrap",
    //   height: "auto",
    //   paddingTop: "10px",
    //   paddingBottom: "10px",
    // },
  })),
  EventDetailWrapper: styled("div")(() => ({
    display: "flex",
    flex: 2,
    // "@media (max-width: 576px)": {
    //   flexWrap: "wrap",
    //   height: "auto",
    // },
  })),
  EventPriorityWrapper: styled("div")(() => ({
    flex: 0,
  })),
  EventName: styled(Typography)(() => ({
    fontSize: "14px",
    fontWeight: "600",
    color: "white",
    alignSelf: "center",
    marginLeft: "10px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    "@media (max-width: 576px)": {
      maxWidth: "130px",
    },
  })),
  EventInfoText: styled(Typography)(() => ({
    fontSize: "14px",
    fontWeight: "600",
    color: "rgba(255,255,255,0.5)",
    marginLeft: "12px",
    alignSelf: "center",
    whiteSpace: "nowrap",
  })),
  EventTag: styled("div")(() => ({
    width: "inherit",
    height: "26px",
    borderRadius: "29px",
    backgroundColor: "rgba(198, 189, 205, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 10px",
    marginLeft: "12px",
    whiteSpace: "nowrap",
    // "@media (max-width: 576px)": {
    //   width: "26px",
    //   borderRadius: "26px",
    //   padding: "0px 5px",
    //   marginLeft: "5px",
    //   overflow: "hidden",
    //   justifyContent: "flex-start",
    // },
  })),
  EventTagText: styled(Typography)(() => ({
    fontSize: "11.92px",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.5)",
    marginLeft: "4.33px",
  })),
  EventPriority: styled(Select)(() => ({
    height: "26px",
    borderRadius: "29px",
    background: "rgba(198, 189, 205, 0.10)",
    display: "flex",
    border: "none",
    fill: "rgba(255, 255, 255, 0.50)",
    ".MuiList-root": {
      backgroundColor: "#11293E",
    },
    ".MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    ".MuiSelect-icon": {
      fill: "rgba(255, 255, 255, 0.50)",
    },
  })),
  EventPriorityTextDimmed: styled("span")(() => ({
    fontSize: "14px",
    fontWeight: "600",
    color: "rgba(255,255,255,0.5)",
  })),
  EventPriorityTextCount: styled("span")(() => ({
    fontSize: "14px",
    fontWeight: "600",
    color: "#fff",
    marginLeft: "5px",
    marginRight: "5px",
  })),
  EventCollapser: styled(Image)(() => ({
    cursor: "pointer",
  })),
};
