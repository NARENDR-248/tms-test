import React from "react";
import IncomingFlightsStyles from "./styled";
import { Table, TableHead, TableBody, TableCell, TableRow, Stack, Box, Skeleton, Divider } from "@mui/material";

import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import theme from "@/utils/theme";
import { bahrainair } from "../../../../../public/carrierLogos/bahrainair";
import { chineseAir } from "../../../../../public/carrierLogos/chineseAir";
import { emirates } from "../../../../../public/carrierLogos/emirates";
import { tianjinAirlines } from "../../../../../public/carrierLogos/tianjinAirlines";
import { feather } from "../../../../../public/carrierLogos/feather";
import { saudia } from "../../../../../public/carrierLogos/saudia";
import { goldenCircle } from "../../../../../public/carrierLogos/goldenCircle";
import { useTranslation } from "react-i18next";
import Image from "next/image";

type Flight = {
  flightNumber: string;
  gate: string;
  sibt: string;
  sobt: string;
  imageSrc: string;
};

const defaultData: Flight[] = [
  {
    imageSrc: bahrainair,
    flightNumber: "HY2342-HY2322",
    gate: "T1 - 21",
    sibt: "11:03:45 AM",
    sobt: "12:40:00 PM",
  },
  {
    imageSrc: chineseAir,
    flightNumber: "EK6382-EK8779",
    gate: "T1 - 22",
    sibt: "10:59:51 AM",
    sobt: "12:04:00 PM",
  },
  {
    imageSrc: emirates,
    flightNumber: "KY7367-KY8879",
    gate: "T1 - 23",
    sibt: "10:43:45 PM",
    sobt: "11:52:00 PM",
  },
  {
    imageSrc: tianjinAirlines,
    flightNumber: "RY4352-RY3612",
    gate: "T2 - 22",
    sibt: "10:30:05 PM",
    sobt: "11:40:05 PM",
  },
  {
    imageSrc: feather,
    flightNumber: "DE8788-DE4445",
    gate: "T1 - 27",
    sibt: "10:32:13 PM",
    sobt: "11:57:00 PM",
  },
  {
    imageSrc: saudia,
    flightNumber: "SV9003-SV3323",
    gate: "T3 - 11",
    sibt: "10:30:02 PM",
    sobt: "11:56:45 PM",
  },
  {
    imageSrc: goldenCircle,
    flightNumber: "EK8767-EK8687",
    gate: "T3 - 12",
    sibt: "10:23:45 PM",
    sobt: "11:43:45 PM",
  },
];

type IncomingFlightsProps = {};
const IncomingFlights: React.FC<IncomingFlightsProps> = () => {
  const { t } = useTranslation();
  const [data, setData] = React.useState(() => [...defaultData]);

  const columnHelper = createColumnHelper<Flight>();
  const columns = [
    columnHelper.accessor((row) => row.flightNumber, {
      id: "flightNumber",
      cell: (info) => (
        <Stack direction="row" gap={2}>
          <Box>
            <Image alt="" src={info.row.original.imageSrc} width={20} height={20} />
          </Box>
          <Box>{info.getValue()}</Box>
        </Stack>
      ),
      header: () => <span>{t("flight-number")}</span>,
    }),
    columnHelper.accessor((row) => row.gate, {
      id: "gate",
      cell: (info) => info.getValue(),
      header: () => <span>{t("gate")}</span>,
    }),
    columnHelper.accessor((row) => row.sibt, {
      id: "sibt",
      cell: (info) => info.getValue(),
      header: () => <span>STA</span>,
    }),
    columnHelper.accessor((row) => row.sobt, {
      id: "sobt",
      cell: (info) => info.getValue(),
      header: () => <span>SOBT</span>,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      {defaultData ? (
        <IncomingFlightsStyles.Container>
          <Table
            style={{
              backgroundColor: theme.palette.primary.light,
            }}
          >
            <TableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableCell
                      align={header.id === "flightNumber" ? "left" : "center"}
                      key={header.id}
                      style={{
                        color: "rgba(255, 255, 255, 0.5)",
                        fontWeight: 200,
                        fontSize: "1rem",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
                        borderWidth: "2px",
                      }}
                    >
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow
                  sx={{
                    p: 10,
                  }}
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      align="center"
                      key={cell.id}
                      sx={{
                        borderBottom: "none",
                        color: "rgba(255, 255, 255, 1)",
                        fontWeight: 200,
                        fontSize: "1rem",
                      }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </IncomingFlightsStyles.Container>
      ) : (
        <IncomingFlightsStyles.Container>
          <Skeleton sx={{ bgcolor: theme.palette.primary.light }} variant="rectangular" height={56} />
          <Divider
            sx={{
              backgroundColor: "#F5F5F5",
              height: "2px",
            }}
          />
          <Skeleton
            sx={{ bgcolor: theme.palette.primary.light }}
            variant="rectangular"
            height={25}
            style={{ marginTop: "1.5%" }}
          />
          <Skeleton
            sx={{ bgcolor: theme.palette.primary.light }}
            variant="rectangular"
            height={25}
            style={{ marginTop: "1.5%" }}
          />
          <Skeleton
            sx={{ bgcolor: theme.palette.primary.light }}
            variant="rectangular"
            height={25}
            style={{ marginTop: "1.5%" }}
          />
          <Skeleton
            sx={{ bgcolor: theme.palette.primary.light }}
            variant="rectangular"
            height={25}
            style={{ marginTop: "1.5%" }}
          />
          <Skeleton
            sx={{ bgcolor: theme.palette.primary.light }}
            variant="rectangular"
            height={25}
            style={{ marginTop: "1.5%" }}
          />
          <Skeleton
            sx={{ bgcolor: theme.palette.primary.light }}
            variant="rectangular"
            height={25}
            style={{ marginTop: "1.5%" }}
          />
          <Skeleton
            sx={{ bgcolor: theme.palette.primary.light }}
            variant="rectangular"
            height={25}
            style={{ marginTop: "1.5%" }}
          />
          <Skeleton
            sx={{ bgcolor: theme.palette.primary.light }}
            variant="rectangular"
            height={25}
            style={{ marginTop: "1.5%" }}
          />
          <Skeleton
            sx={{ bgcolor: theme.palette.primary.light }}
            variant="rectangular"
            height={25}
            style={{ marginTop: "1.5%" }}
          />
          <Skeleton
            sx={{ bgcolor: theme.palette.primary.light }}
            variant="rectangular"
            height={25}
            style={{ marginTop: "1.5%" }}
          />
          <Skeleton
            sx={{ bgcolor: theme.palette.primary.light }}
            variant="rectangular"
            height={25}
            style={{ marginTop: "1.5%" }}
          />
          <Skeleton
            sx={{ bgcolor: theme.palette.primary.light }}
            variant="rectangular"
            height={25}
            width={350}
            style={{ marginTop: "1.8%" }}
          />
        </IncomingFlightsStyles.Container>
      )}
    </>
  );
};

export default IncomingFlights;
