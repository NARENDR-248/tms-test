import { styled } from "@mui/material";

const MenubarStyles = {
  Container: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "1em",
    "@media (max-width: 1100px)": {
      // display: "none",
      flexDirection: "column",
    },
  })),
  TabsContainer: styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    // width: "50%",
    textTransform: "capitalize",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: "1em",
    paddingTop: "0.7em",
    alignItems: "flex-start",
    "@media (max-width: 590px)": {
      "& .MuiButtonBase-root": {
        paddingLeft: "8px",
        paddingRight: "8px",
        textTransform: "capitalize",
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
    },
  })),
  FiltersContainer: styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "0.5em",
    marginTop: "1em",
    marginRight: "1em",
    "@media (max-width: 590px)": {
      display: "none",
    },
  })),
};
export default MenubarStyles;
