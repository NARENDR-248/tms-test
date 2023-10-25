import { Box, Select, MenuItem, styled } from "@mui/material";
import WestIcon from "@mui/icons-material/West";

const LiveViewStyles = {
  Container: styled(Box)(({ theme }) => ({
    display: "flex",
    flex: "1",
    backgroundColor: theme.palette.primary.light,
    color: "#fff",
  })),
};

export default LiveViewStyles;
