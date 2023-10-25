import { Pagination, styled } from "@mui/material";

const TablePaginationStyles = {
  Pagination: styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "1em",
    padding: "0.7em 0",
  })),

  CustomPaginate: styled(Pagination)(({ theme }) => ({
    "& .MuiPaginationItem-root": { color: "#BFBFBF" },
    "& .MuiPaginationItem-root.Mui-selected, :hover .MuiPaginationItem-root.Mui-selected": {
      color: "#fff",
      background: "#629CCC",
    },
    "& .mui-style-rtl-g2z002-MuiSvgIcon-root-MuiPaginationItem-icon": {
      transform: "rotate(180deg)",
    },
  })),
};

export default TablePaginationStyles;
