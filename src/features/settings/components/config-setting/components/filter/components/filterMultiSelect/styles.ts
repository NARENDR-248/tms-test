import { Button, Chip, MenuItem, Select, Stack, styled } from "@mui/material";

const MultiSelectStyles = {
  CustomSelect: styled(Select)(({}) => ({
    fontSize: "0.9em",
    "&:before": {
      borderBottom: "1px solid rgba(250, 250, 250, 0.15) !important",
    },
    "&:after": {
      borderBottom: "1px solid rgba(250, 250, 250, 0.15) !important",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "rgba(250, 250, 250, 0.15)", // Normal underline color
      borderBottomWidth: "1px", // Normal underline thickness
    },
    // hover state
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: "rgba(250, 250, 250, 0.15)", // Hover underline color
      borderBottomWidth: "1px", // Hover underline thickness
    },
    // focused state
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgba(250, 250, 250, 0.15)", // Focus underline color
      borderBottomWidth: "1px", // Focus underline thickness
    },
    // error state
    "& .MuiInput-underline.Mui-error:after": {
      borderBottomColor: "red", // Error underline color
      borderBottomWidth: "1px", // Error underline thickness
    },
    // disabled state
    "& .MuiInput-underline.Mui-disabled:before": {
      borderBottomColor: "gray", // Disabled underline color
      borderBottomWidth: "1px", // Disabled underline thickness
    },
    "& .MuiFormLabel-root": {
      color: "rgba(250, 250, 250, 0.15)", // label color
    },
    "& .MuiInputBase-input": {
      color: "rgba(250, 250, 250, 0.15)", // input color
    },
    "& .MuiIconButton-root": {
      color: "rgba(250, 250, 250, 0.15)", // end icon color
    },
  })),

  CustomStack: styled(Stack)(({}) => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "3px",
  })),

  CustomChip: styled(Chip)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    fontSize: "0.8em",
  })),

  CustomMenuItem: styled(MenuItem)(({ theme }) => ({
    color: "white",
    background: theme.palette.primary.light,
    "&:hover": { color: "#fff" },
    fontSize: "1em",
    "&.Mui-selected": { color: "#fff" },
  })),
};

export default MultiSelectStyles;
