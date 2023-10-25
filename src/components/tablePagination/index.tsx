import React from "react";
import TablePaginationStyles from "./styles";

const TablePagination = ({ count, page, handlePageChange }: any) => {
  return (
    <TablePaginationStyles.Pagination>
      <TablePaginationStyles.CustomPaginate count={count} page={page} onChange={handlePageChange} />
    </TablePaginationStyles.Pagination>
  );
};

export default TablePagination;
