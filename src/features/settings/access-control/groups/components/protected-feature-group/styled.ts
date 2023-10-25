import Image from "next/image";
import styled from "@emotion/styled";
import { FormControlLabel, Checkbox, Box, Skeleton } from "@mui/material";

const Components = {
  ProtectedFeatureGroup: {
    Wrapper: styled("div")(() => ({
      maxHeight: "450px",
      overflow: "auto",
      flex: 1,
    })),
    Container: styled("div")(() => ({
      position: "relative",
    })),
    SkeltonContainer: styled(Box)(() => ({
      display: "flex",
      gap: 10,
    })),
    Skelton: styled(Skeleton)(() => ({
      width: "85%",
      height: "20px",
      marginBottom: "10px",
    })),
    ParentFormControlLabel: styled(FormControlLabel)(() => ({
      flex: 1,
    })),
    FormControlLabel: styled(FormControlLabel)(() => ({
      flex: 1,
      textTransform: "capitalize",
    })),
    ParentBoxContainer: styled(Box)(() => ({
      display: "block",
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
    })),
    BoxContainer: styled(Box)(() => ({})),
    DropdownIcon: styled(Image)(() => ({
      cursor: "pointer",
      position: "absolute",
      right: "10px",
      top: "0px",
    })),
    Checkbox: styled(Checkbox)(() => ({
      padding: "0px 9px",
      cursor: "pointer",
      ".MuiCheckbox-root.custom-checkbox .MuiSvgIcon-root path": {
        /* Change the color of the tick */
        fill: "white" /* Change this to your desired color */,
      },
      "& .MuiSvgIcon-root": {
        // borderColor: "white",
        fill: "#3BA5E1",
        "&.Mui-checked": {
          color: "white",
        },
      },
    })),
  },
};

export { Components };
