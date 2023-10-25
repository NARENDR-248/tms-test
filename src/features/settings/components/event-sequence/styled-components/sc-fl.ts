import {
  LinearProgress,
  Box,
  Typography,
  styled,
  linearProgressClasses,
} from "@mui/material";

export const Components = {
  LoaderBox: styled(Box)(() => ({
    width: "15%",
    alignSelf: "center",
    marginLeft: "auto",
    marginRight: "auto",
  })),
  LoaderText: styled(Typography)(() => ({
    fontSize: "11px",
    fontWeight: "500",
    color: "white",
    marginBottom: "10px",
  })),
  Loader: styled(LinearProgress)(() => ({
    [`&.${linearProgressClasses.colorPrimary}`]: {},
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: "#ffffff",
    },
  })),
};
