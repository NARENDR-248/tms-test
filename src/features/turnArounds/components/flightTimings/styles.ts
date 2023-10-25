import { Box, styled } from "@mui/material";

const FlightTimingsStyles = {
  Container: styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    width: "100%",
    padding: "2em 1.5em",
    display: "flex",
    flexDirection: "row",
    gap: "2em",
    alignItems: "center",

    "@media (min-width: 820px)": {
      flex: "2",
    },
    "@media (max-width: 420px)": {
      overflowX: "scroll",
    },
  })),

  SubContainer: styled(Box)(({ theme }) => ({
    display: "flex",
    flex: 2,
    flexDirection: "column",

    "@media (max-width: 420px)": {
      flex: 1,
      // flexDirection: "column",
    },
  })),

  SideLayout: styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1em",
  })),

  CodeContent: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1em",
    "&:first-of-type": {
      marginBottom: "3em",
    },
  })),
  BottomContent: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1em",
    "&:first-of-type": {
      marginBottom: "3em",
    },
  })),

  InBlock: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1em",
  })),

  InFlexer: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: "1em",
    minHeight: "3em",
  })),

  OutBlock: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    // flexWrap: "wrap",
    gap: "1em",
    // width: "13em",
    justifyContent: "flex-end",
  })),

  DashDivider: styled("div")(({ theme }) => ({
    height: "2px",
    width: "60%",
    background: "",
    opacity: "0.5",
    border: "1.7px dashed #fff",
  })),

  Divider: styled("div")(({ theme }) => ({
    width: "0px",
    height: "14em",
    opacity: "0.3",
    border: "1px solid #354049",
    "@media (max-width: 420px)": {
      display: "none",
    },
  })),

  DividerReplacer: styled("div")(({ theme }) => ({
    "@media (max-width: 420px)": {
      weidth: "2em",
      height: "2em",
    },
  })),

  Wrapper: styled("div")(({ theme }) => ({
    display: "block",
    "@media (min-width: 420px)": {
      display: "flex",
      flex: 1,
      gap: "2em",
      justifyContent: "space-around",
    },
  })),
};

export default FlightTimingsStyles;
