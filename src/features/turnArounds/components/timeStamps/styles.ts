import { Box, styled } from "@mui/material";

const TimeStampsTableStyles = {
  Container: styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    width: "100%",
    padding: "1em",
    // overflowX:'scroll'
  })),

  Heading: styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1em",
  })),

  Title: styled("p")(({ theme }) => ({
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1em",
    color: "#FFF",
  })),

  Downloads: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  })),
};

export default TimeStampsTableStyles;
