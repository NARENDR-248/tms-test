import { TextField, styled } from "@mui/material";

const SearchStyles = {
  Search: styled(TextField)(({ theme }) => ({
    // width: "30%",
    height: "2.5em",
    padding: "0.2em 0.5em 0 0.5em",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "3px",
    color: "rgba(255, 255, 255, 0.5)",
    // "@media (max-width:1000px)": {
    //   color: "rgba(0, 0, 0, 1)",
    //   border: "1px solid rgba(0, 0, 0, 1)",
    //   "& .MuiInput-input": {
    //     color: "rgba(0, 0, 0, 1)",
    //   },
    // },
  })),
};

export default SearchStyles;
