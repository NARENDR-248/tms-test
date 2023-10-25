import { Box, styled } from "@mui/material";
import TableCell from "@mui/material/TableCell";

const TableStyles = {
  Container: styled(Box)(({ theme }) => ({})),

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
};

export default TableStyles;
