import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import theme from "@/utils/theme";
import { useTranslation } from "react-i18next";
import ConfigTableRow from "./ConfigTableRow";
import TablePagination from "@/components/tablePagination";
import ConfigTableStyles from "./styles";
import CustomSkeleton from "./CustomSkeleton";

export const ConfigurationsTable = ({
  configData,
  refetchConfigData,
  configDataLoading,
  page,
  setPage,
  take,
  count,
}: any) => {
  const { t, i18n } = useTranslation();

  const handlePageChange = (_: any, event: any) => {
    setPage(event);
  };

  return (
    <div id="cofig-table" role="cofig-table">
      <TableContainer
        id="#table"
        component={Paper}
        sx={{
          backgroundColor: theme.palette.primary.light,
          marginTop: "1.5em",
          height: "42em",
        }}
      >
        {configDataLoading && <CustomSkeleton />}
        {!configDataLoading && configData?.length ? (
          <Table
            sx={{
              overflowX: "scroll",
              minHeight: "8em",
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <ConfigTableStyles.Header role="first-header" align="left" sx={{ paddingLeft: "16px" }}>
                  {t("event-name")}
                </ConfigTableStyles.Header>
                <ConfigTableStyles.Header align="left">{t("event-type")}</ConfigTableStyles.Header>
                <ConfigTableStyles.Header align="left">{t("linked-event")}</ConfigTableStyles.Header>
                <ConfigTableStyles.Header align="left">{t("start-delay")}</ConfigTableStyles.Header>
                <ConfigTableStyles.Header align="left">{t("ideal-duration")}</ConfigTableStyles.Header>
                <ConfigTableStyles.Header align="left">{t("end-delay")}</ConfigTableStyles.Header>
                <ConfigTableStyles.Header align="left">{t("stand-type")}</ConfigTableStyles.Header>
                <ConfigTableStyles.Header align="left">{t("carrier")}</ConfigTableStyles.Header>
                <ConfigTableStyles.Header align="left">{t("aircraft-type")}</ConfigTableStyles.Header>
                <ConfigTableStyles.Header align="left">{t("time-of-day")}</ConfigTableStyles.Header>
                <ConfigTableStyles.Header
                  sx={{
                    minWidth: "4rem",
                    paddingRight: "16px",
                  }}
                ></ConfigTableStyles.Header>
              </TableRow>
            </TableHead>
            <TableBody>
              {configData?.map((data: any, index: any) => {
                return <ConfigTableRow key={index} data={data} refetchConfigData={refetchConfigData} />;
              })}
            </TableBody>
          </Table>
        ) : (
          <ConfigTableStyles.StaticBox>
            <ConfigTableStyles.StaticText>{t("no-configurations-available")}</ConfigTableStyles.StaticText>
          </ConfigTableStyles.StaticBox>
        )}
      </TableContainer>
      {count > 0 && <TablePagination count={count} page={page} handlePageChange={handlePageChange} />}
    </div>
  );
};
