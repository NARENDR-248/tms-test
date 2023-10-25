import { Box, styled } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import Link from "next/link";

const TableStyles = {
  Container: styled(Box)(({ theme }) => ({})),

  Header: styled(TableCell)(({ theme }) => ({
    color: "white",
    borderBottom: "1px solid rgba(255,255,255,0.5)",
  })),

  Cell: styled(TableCell)(({ theme }) => ({
    color: "white !important",
    borderBottom: "0px solid black!important",
  })),

  CustomLink: styled(Link)(({ theme }) => ({
    color: "white",
    padding: "0.5em 1em",
    border: "1px solid white !important",
    borderRadius: "5px",
    cursor: "pointer",
    "&:hover": {
      fontStyle: "italic",
    },
  })),
};

export default TableStyles;
