import { Box, Button, Menu, styled } from "@mui/material";

const ConfigFilterStyles = {
  MainButton: styled(Button)(({}) => ({
    border: "1px solid #fff",
    background: "transparent",
    color: "#fff",
    textTransform: "capitalize",
    padding: "4px 12px",
    borderRadius: "2px",
    "&:hover": {
      border: "1px solid #fff",
    },
  })),

  CustomMenu: styled(Menu)(({}) => ({
    marginTop: "20px",
    "& .MuiPaper-root": {
      overflow: "visible",
    },
  })),

  CustomBox: styled(Box)(({ theme }) => ({
    position: "relative",
    borderRadius: 0,
    backgroundColor: theme.palette.primary.light,
  })),

  Connector: styled("div")(({ theme }) => ({
    position: "absolute",
    height: "23px",
    width: "23px",
    background: theme.palette.primary.light,
    borderRadius: 0,
    rotate: "45deg",
    top: "-10px",
    zIndex: "-1",
  })),

  Container: styled("div")(({}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  })),

  Filters: styled("div")(({}) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    padding: "1em",
  })),

  InputGroup: styled("div")(({}) => ({
    display: "flex",
    flexDirection: "column",
    marginBottom: "0.5em",
  })),

  InputLabel: styled("p")(({}) => ({
    color: "#fff",
    fontSize: "1em",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    opacity: 0.5,
  })),

  ButtonGroup: styled("div")(({}) => ({
    width: "100%",
    borderTop: "1px solid #0A1313",
    display: "flex",
    justifyContent: "flex-end",
    padding: "1em",
    gap: "15px",
  })),

  CustomButton: styled(Button)(({}) => ({
    width: "8em",
    height: "2.8em",
    color: "#fff",
    textTransform: "none",
    borderRadius: "0",
  })),
};

export default ConfigFilterStyles;
