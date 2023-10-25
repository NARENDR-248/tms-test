import { Pagination } from "@mui/lab";
import { MenuItem, Stack, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

type Props = {
  page: number;
  pageSize: number;
  count: number;
  handlePageChange: any;
  handlePageSizeChange: any;
};

export const ForumPagination: React.FC<Props> = ({ page, pageSize, count, handlePageChange, handlePageSizeChange }) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography color="GrayText">
        {`${(page - 1) * pageSize + 1} - ${page * pageSize > count ? count : page * pageSize}  of ${count} items`}
      </Typography>

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <TextField
          select
          value={pageSize}
          size="small"
          label="Rows"
          SelectProps={{
            onChange: handlePageSizeChange,
          }}
          sx={{
            minWidth: "100px",
          }}
        >
          {[5, 10, 15].map((i) => (
            <MenuItem key={i} value={i}>
              {i}
            </MenuItem>
          ))}
        </TextField>
        <Pagination count={Math.ceil(count / pageSize)} page={page} onChange={handlePageChange} color="primary" />
      </Stack>
    </Stack>
  );
};
