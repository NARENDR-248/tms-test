import { Box, Switch, styled } from "@mui/material";
import TableCell from "@mui/material/TableCell";

const UserGroupTableStyles = {
  Header: styled(TableCell)(({ theme }) => ({
    color: "white",
    opacity: 0.5,
    borderBottom: "1px solid rgba(255,255,255,0.5)",
  })),
  Cell: styled(TableCell)(({ theme }) => ({
    color: "white",
    borderBottom: "0px solid black!important",
    opacity: 0.5,
  })),

  CustomSwitch: styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase": {
      color: "#fff", // thumb color

      "&.Mui-checked": {
        color: "#fff", // thumb color when checked

        "& + .MuiSwitch-track": {
          backgroundColor: "#3BA5E1", // track color when checked
        },
      },

      "& + .MuiSwitch-track": {
        backgroundColor: "#B7B7B7", // track color
      },
    },
  })),

  AntSwitch: styled(Switch)(({ theme }) => ({
    width: 34,
    height: 19,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 18,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(11px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(14px)",
        color: "#fff", // setting color to white
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#3BA5E1", // set color of enabled track
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 14,
      height: 14,
      borderRadius: 7,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
      color: "#fff", // setting color to white
    },
    "& .MuiSwitch-track": {
      borderRadius: 19,
      opacity: 1,
      backgroundColor: "#B7B7B7", // set color of disabled track
      boxSizing: "border-box",
    },
  })),
};

export default UserGroupTableStyles;
