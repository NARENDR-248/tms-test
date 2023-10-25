import { Drawer } from "@mui/material";
import { styled } from "@mui/material";

export const CheckboxStyles = {
  Search: styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
    marginBottom: "2em",
    "@media (max-width: 420px)": {
      justifyContent: "space-between",
    },
  })),

  Children: styled("div")(({ theme }) => ({
    display: "flex",
    overflow: "scroll hidden",
    height: "80%",
    flexDirection: "column",
    flexWrap: "wrap",
    paddingBottom: "2em",
    "@media (max-width: 420px)": {},
  })),
};
