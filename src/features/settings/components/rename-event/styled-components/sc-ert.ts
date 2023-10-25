import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  styled,
} from "@mui/material";
export const Components = {
  EventTable: styled(Table)(() => ({})),
  EventTableHead: styled(TableHead)(() => ({})),
  EventTableHeadRow: styled(TableRow)(() => ({
    borderBottom: "1px solid rgba(245, 245, 245, 0.5)",
  })),
  EventTableCell: styled(TableCell)(() => ({
    fontSize: "0.86em",
    fontWeight: 600,
    color: "rgba(255,255,255,0.50)",
    border: "none",
  })),
  EventTableBody: styled(TableBody)(() => ({})),
  EventTableBodyRow: styled(TableRow)(() => ({
    cursor: "pointer",
  })),
  EventTableBodyCell: styled(TableCell)(() => ({
    border: "none",
    position: "relative",
    height: "72px",
  })),
  CellTextHolder: styled(Typography)(() => ({
    fontSize: "0.86em",
    fontWeight: 600,
    color: "rgba(255,255,255,1)",
    textTransform: "capitalize",
    alignSelf: "center",
  })),
};
