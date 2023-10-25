import theme from "@/utils/theme";
import { Avatar, Box, styled } from "@mui/material";
import Image from "next/image";

const NavBarStyles = {
  Container: styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "row",
    height: "9vh",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5em 1em",
    position: "sticky",
    zIndex: "3",
    borderBottom: `2px solid ${theme.palette.common.black}`,
    "@media (max-width: 420px)": {
      display: "none",
    },
  })),
  NotificationsIconContainer: styled("div")(({}) => ({
    "@media (min-width: 1442px)": {
      display: "none",
    },
  })),
  Logo: styled(Image)(({}) => ({
    width: "9vw",
    height: "5vh",
    objectFit: "contain",
  })),
  LinksContainer: styled("div")(({}) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1rem",
    justifyContent: "space-between",
    // border: "1px solid white"
  })),
};

export default NavBarStyles;
