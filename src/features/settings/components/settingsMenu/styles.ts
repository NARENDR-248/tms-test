import { styled } from "@mui/material";

const SettingsMenuStyles = {
  Container: styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width:550px)": {
      overflow: "scroll",
      "&::-webkit-scrollbar": {
        width: "0",
        height: "0",
      },
    },
  })),

  TabsContainer: styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    textTransform: "capitalize",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    "& .MuiButtonBase-root": {
      paddingLeft: "18px",
      paddingRight: "18px",
      paddingBottom: "10px",
      textTransform: "capitalize",
      fontWeight: 700,
      fontSize: "1em",
    },
    "@media (max-width: 420px)": {
      width: "100%",
      paddingLeft: "0",
      "& .mui-style-cw3upo-MuiButtonBase-root-MuiTab-root.Mui-selected": {
        fontSize: "x-small",
      },
      "& .mui-style-cw3upo-MuiButtonBase-root-MuiTab-root": {
        fontSize: "x-small",
      },
    },
  })),
};

export default SettingsMenuStyles;
