import React, { useEffect, useState } from "react";
import OngoingFlightsStyles from "./styled";
import { Table, TableHead, TableBody, TableCell, TableRow, Stack, Box, Skeleton, Divider } from "@mui/material";
import AirplanemodeInactiveIcon from "@mui/icons-material/AirplanemodeInactive";

import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import theme from "@/utils/theme";

import { useTranslation } from "react-i18next";
import i18n from "@/utils/i18n";

import Image from "next/image";
import { useOngoingFlights } from "@/apis/flights/useOngoingFlights";
import { useOngoingFlightsCountStore } from "@/store/ongoingFlightsCount";
import { chineseAir } from "../../../../../public/carrierLogos/chineseAir";
import { useFlightsSearchQueryStore } from "@/store/flightsSearchQueryStore";
import TablePagination from "@/components/tablePagination";
import { useFlightsTerminalStore } from "@/store/flightsTerminalStore";
import { useRouter } from "next/navigation";

type Flight = {
  flightNumber: string;
  gate: string;
  gateAr: string;
  aibt: string;
  sobt: string;
  eobt: string;
  pobt: string;
  imageSrc: string;
  // totalCount: number;
};

const defaultData: Flight[] = [];

type OngoingFlightsProps = {};
const OngoingFlights: React.FC<OngoingFlightsProps> = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [count, setCount] = useState(0);
  const ongoingFlightsCount = useOngoingFlightsCountStore((state) => state.ongoingCount);
  const searchQuery = useFlightsSearchQueryStore((state) => state.searchQuery);
  const terminalId = useFlightsTerminalStore((state) => state.terminalId);

  const { data: ongoingFlights } = useOngoingFlights(page, perPage, searchQuery, terminalId);

  const router = useRouter();
  const { t } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");

  const handleFlightNumberClick = (flight) => {
    router.push(`/turn-arounds?gateId=${flight.gateId}&turnAroundId=${flight.id}`);
  };

  const handleChangePage = (_: any, event: any) => {
    setPage(event);
  };

  const [data, setData] = React.useState(() => [...defaultData]);

  useEffect(() => {
    if (ongoingFlights) {
      let finalData: any;
      finalData = ongoingFlights.ongoingList.map((item: any) => {
        return { imageSrc: chineseAir, ...item };
      });
      setData(finalData);
      // TODO: remove finalData logic and just set the ongoingFlights data when the DB has images.
      // setData(ongoingFlights.ongoingList);
    }
  }, [ongoingFlights]);

  const columnHelper = createColumnHelper<Flight>();
  const columns = [
    columnHelper.accessor((row) => row.flightNumber, {
      id: "flightNumber",
      cell: (info) => (
        <Stack direction="row" gap={2}>
          <Box>
            <Image alt="" src={info.row.original.imageSrc} width={20} height={20} />
          </Box>
          <Box
            sx={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => handleFlightNumberClick(info.row.original)}
          >
            {info.getValue()}
          </Box>
        </Stack>
      ),
      header: () => <span>{t("flight-number")}</span>,
    }),
    columnHelper.accessor(
      (row) => (isArabic ? row.gateAr : row.gate),

      {
        id: isArabic ? "gateAr" : "gate",
        cell: (info) => info.getValue(),

        header: () => <span>{t("gate")}</span>,
      },
    ),
    columnHelper.accessor((row) => row.aibt, {
      id: "aibt",
      cell: (info) => info.getValue(),
      header: () => <span>AIBT</span>,
    }),
    columnHelper.accessor((row) => row.sobt, {
      id: "sobt",
      cell: (info) => info.getValue(),
      header: () => <span>STD</span>,
    }),
    columnHelper.accessor((row) => row.eobt, {
      id: "eobt",
      cell: (info) => info.getValue(),
      header: () => <span>ETD</span>,
    }),
    columnHelper.accessor((row) => row.pobt, {
      id: "pobt",
      cell: (info) => info.getValue(),
      header: () => <span>POBT</span>,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  useEffect(() => {
    if (ongoingFlightsCount !== undefined) {
      setCount(Math.ceil(ongoingFlightsCount / perPage));
    }
  }, [ongoingFlightsCount, data]);

  return (
    <>
      {ongoingFlights?.ongoingList ? (
        ongoingFlights?.ongoingList.length > 0 ? (
          <OngoingFlightsStyles.MainContainer>
            <OngoingFlightsStyles.Container>
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
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableHead>
                <TableBody>
                  {table.getRowModel().rows.map((row) => {
                    return (
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
                    );
                  })}
                </TableBody>
              </Table>
            </OngoingFlightsStyles.Container>
            <TablePagination count={count} page={page} handlePageChange={handleChangePage} />
          </OngoingFlightsStyles.MainContainer>
        ) : (
          <OngoingFlightsStyles.NoFlights>
            <AirplanemodeInactiveIcon fontSize="large" />
            <h3>{t("no-flights-to-show")}</h3>
          </OngoingFlightsStyles.NoFlights>
        )
      ) : (
        <OngoingFlightsStyles.Container>
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
        </OngoingFlightsStyles.Container>
      )}
    </>
  );
};

export default OngoingFlights;
