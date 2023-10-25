import { FormGroup, Typography, styled } from "@mui/material";

const PermissionsCardStyles = {
  Container: styled("div")(({ theme }) => ({
    height: "13em",
    minWidth: "15em",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "1.5em",
    backgroundColor: "#152E44",
    borderRadius: "0.5em",
  })),
  Heading: styled(Typography)(({}) => ({
    fontWeight: "500",
    fontSize: "1em",
  })),
  PermissionsContainer: styled("div")(({}) => ({
    height: "100%",
    padding: "1em 0",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
  })),
  CustomFormGroup: styled(FormGroup)(({}) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  })),
};

export default PermissionsCardStyles;
