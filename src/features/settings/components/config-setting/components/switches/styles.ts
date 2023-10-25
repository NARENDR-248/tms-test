import { Drawer, Switch } from "@mui/material";
import { styled, Box } from "@mui/material";

export const CustomSwitchStyles = {
  CustomSwitch: styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-root": { marginRight: "auto" },
    "& .MuiButtonBase-root.Mui-checked": {
      color: "#06A7E0",
    },
    "& .MuiSwitch-track, .MuiButtonBase-root.Mui-checked+.MuiSwitch-track": {
      background: "#C9C9C9",
    },
  })),
};
