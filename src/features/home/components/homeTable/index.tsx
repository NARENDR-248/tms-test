import theme from "@/utils/theme";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableStyles from "./styles";
import { useTranslation } from "react-i18next";

function createData(terminal: string, apron: string, gate: string, action: any, gateId: string, terminalId: string) {
  return {
    terminal,
    apron,
    gate,
    action,
    gateId,
    terminalId,
  };
}

const HomeTable = ({ data }: any) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");

  let rows: any = [];
  if (data) {
    for (let i = 0; i < data.length; ++i) {
      for (let j = 0; j < data[i].gates.length; ++j) {
        rows.push(
          createData(
            isArabic ? data[i].name_ar : data[i].name_en,
            isArabic ? data[i].apron_name_ar : data[i].apron_name_en,
            isArabic ? data[i].gates[j].name_ar : data[i].gates[j].name_en,
            t("view"),
            data[i].gates[j].id,
            data[i].id,
          ),
        );
      }
    }
  }
  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: theme.palette.primary.light,
        height: "100%",
      }}
    >
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ borderBottomColor: "red" }}>
            <TableStyles.Header align="center">{t("terminal")}</TableStyles.Header>
            <TableStyles.Header align="center">{t("apron")}</TableStyles.Header>
            <TableStyles.Header align="center">{t("gate")}</TableStyles.Header>
            <TableStyles.Header align="center">{t("action")}</TableStyles.Header>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any, id: any) => (
            <TableRow key={id} sx={{ borderBottom: "0px solid black !important" }}>
              <TableStyles.Cell align="center">{row.terminal}</TableStyles.Cell>
              <TableStyles.Cell align="center">{row.apron}</TableStyles.Cell>
              <TableStyles.Cell align="center">{row.gate}</TableStyles.Cell>
              <TableStyles.Cell align="center">
                <TableStyles.CustomLink
                  href={{
                    pathname: "/turn-arounds",
                    query: { gateId: row.gateId },
                  }}
                >
                  {row.action}
                </TableStyles.CustomLink>
              </TableStyles.Cell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HomeTable;
