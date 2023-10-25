import theme from "@/utils/theme";
import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import UserTableStyles from "./styled";
import { useTranslation } from "react-i18next";
import UserActions from "./components/userActionsDropdown";
import Header from "./components/header";
import TablePagination from "@/components/tablePagination";
import { useGetUsers } from "@/apis/settings/access-control/useGetUsers";

export default function Users() {
  const [page, setPage] = React.useState(1);
  const [take] = React.useState(7);
  const [count, setCount] = React.useState(0);

  const { data, refetch: refetchUsers } = useGetUsers(page, take);
  const userCount = data?.meta?.itemCount;

  useEffect(() => {
    if (userCount !== undefined) {
      setCount(Math.ceil(userCount / take));
    }
  }, [data, userCount]);

  const onPageChange = (__: any, event: any) => {
    setPage(event);
  };

  const { t } = useTranslation();

  return (
    <UserTableStyles.Container>
      <Header refetchUsers={refetchUsers} />
      <TableContainer
        id="#table"
        component={Paper}
        sx={{
          backgroundColor: theme.palette.primary.main,
          boxShadow: "none",
          minHeight: "65vh",
        }}
      >
        <Table
          sx={{
            overflowX: data?.data?.length ? "scroll" : undefined,
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <UserTableStyles.Header role="first-header" align="left">
                {t("um.name")}
              </UserTableStyles.Header>
              <UserTableStyles.Header align="center">{t("um.designation")}</UserTableStyles.Header>
              <UserTableStyles.Header align="center">{t("um.email")}</UserTableStyles.Header>
              <UserTableStyles.Header align="center">{t("um.contact")}</UserTableStyles.Header>
              <UserTableStyles.Header align="center">{t("um.status")}</UserTableStyles.Header>
              {/* <UserTableStyles.Header align="center">{t("um.comment")}</UserTableStyles.Header> */}
              <UserTableStyles.Header align="center"></UserTableStyles.Header>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data?.map((user: any, id: number) => {
              return (
                <TableRow key={id}>
                  <UserTableStyles.Cell align="left" sx={{ fontWeight: "bold", opacity: 1 }}>
                    {user.firstName + " " + user.lastName}
                  </UserTableStyles.Cell>
                  <UserTableStyles.Cell align="center">{user.designation}</UserTableStyles.Cell>
                  <UserTableStyles.Cell align="center">{user.email}</UserTableStyles.Cell>
                  <UserTableStyles.Cell align="center">{user.phone}</UserTableStyles.Cell>
                  <UserTableStyles.Cell align="center" sx={{ opacity: 1 }}>
                    <UserTableStyles.CustomSwitch size="small" checked={user.isActive} />
                  </UserTableStyles.Cell>
                  <UserTableStyles.Cell align="right">
                    <UserActions user={user} refetchUsers={refetchUsers} />
                  </UserTableStyles.Cell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination count={count} page={page} handlePageChange={onPageChange} />
    </UserTableStyles.Container>
  );
}
