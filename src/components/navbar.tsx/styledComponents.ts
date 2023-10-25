import { Button, styled } from "@mui/material";

const NavbarStyles = {
  Container: styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    // backgroundColor: "white",
    height: "5em",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    // backgroundColor: "blue",
  })),

  ButtonsContainer: styled("div")(({ theme }) => ({
    // backgroundColor: theme.palette.primary.main,
    // backgroundColor: "red",
    // padding: "1% 0",
    height: "100%",
    // width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  })),

  Button: styled(Button)(({ theme }) => ({
    textTransform: "capitalize",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    border: "none",
    // height: "2em",
    marginLeft: "1em",
    ":hover": {
      border: "none",
      backgroundColor: theme.palette.primary.main,
    },
    "@media (max-width:420px)": {
      marginLeft: "0em",
      // marginTop: "7%",
    },
  })),
  FiltersButton: styled("div")(({ theme }) => ({
    cursor: "pointer",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    gap: "0.5em",
    marginRight: "1em",
    "@media (min-width: 590px)": {
      display: "none",
    },
  })),
};

export default NavbarStyles;
