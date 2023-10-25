import { Drawer } from "@mui/material";
import { styled, Box } from "@mui/material";

export const FiltersDrawerComponents = {
  Drawer: styled(Drawer)(({}) => ({})),
  FiltersContainer: styled(Box)(({}) => ({
    display: "flex",
    height: "48vh",
    flexDirection: "column",
  })),
};
