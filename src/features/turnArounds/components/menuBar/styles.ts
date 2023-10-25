import { Box, Select, MenuItem, styled } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import Link from "next/link";

const MenuBarStyles = {
  Container: styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1em",
    padding: "0.5em 1em",
    overflow: "hidden",
  })),
  LeftAlign: styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1em",
  })),

  LeftAlignBackContainer: styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1em",
    cursor: "pointer",
  })),
  StyledWestIcon: styled(WestIcon)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: "1em",
  })),
  PageName: styled("p")(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: "1em",
  })),
  Divider: styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    width: "0.1em",
    height: "1em",
    opacity: 0.1,
  })),
  StyledSelect: styled(Select)(({ theme }) => ({
    color: theme.palette.common.white,
    border: `2px solid ${theme.palette.common.white}`,
    opacity: "0.5",
    // OVER RIDING MUI
    height: "2.5em",
    padding: "0px !important",
  })),

  StyledMenuItem: styled(MenuItem)(({ theme }) => ({
    display: "flex",
    color: theme.palette.common.white,
    paddingTop: "0 !important",
    paddingBottom: "0 !important",
  })),
  RightAlign: styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1em",
  })),
};

export default MenuBarStyles;
