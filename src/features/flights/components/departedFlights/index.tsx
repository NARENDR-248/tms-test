import React, { FC, useEffect } from "react";
import DepartedFlightsStyles from "./styled";
import DepartedFlightComponent from "./components/departedFlightCard";
import { useDepartedFlights } from "@/apis/flights/useDepartedFlights";
import { Skeleton } from "@mui/material";
import AirplanemodeInactiveIcon from "@mui/icons-material/AirplanemodeInactive";
import { useDepartedFlightsCountStore } from "@/store/departedFlightsCount";
import theme from "@/utils/theme";
import generateSkeletonCards from "./components/skeletonCard";
import { useFlightsSearchQueryStore } from "@/store/flightsSearchQueryStore";
import { useFlightsTerminalStore } from "@/store/flightsTerminalStore";
import TablePagination from "@/components/tablePagination";
import { useDepartedDateStore } from "@/store/departedDateStore";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

type DepartedFlightsProps = {};
const DepartedFlights: FC<DepartedFlightsProps> = () => {
  const searchQuery = useFlightsSearchQueryStore((state) => state.searchQuery);
  const terminalId = useFlightsTerminalStore((state) => state.terminalId);
  const startDate = useDepartedDateStore((state) => state.startDate);
  const endDate = useDepartedDateStore((state) => state.endDate);

  const [page, setPage] = React.useState(1);
  const [take] = React.useState(10);
  const [count, setCount] = React.useState(0);

  const { t } = useTranslation();
  const router = useRouter();

  const { data } = useDepartedFlights(page, take, searchQuery, terminalId, startDate, endDate);
  const departedFlightsCount = useDepartedFlightsCountStore((state) => state.departedCount);

  useEffect(() => {
    if (departedFlightsCount !== undefined) {
      setCount(Math.ceil(departedFlightsCount / take));
    }
  }, [data, departedFlightsCount]);

  const onPageChange = (__: any, event: any) => {
    setPage(event);
  };

  const handleCardClick = (card) => {
    router.push(`/turn-arounds?gateId=${card.gateId}&turnAroundId=${card.id}`);
  };

  return (
    <>
      {data ? (
        data.length > 0 ? (
          <DepartedFlightsStyles.Container>
            <DepartedFlightsStyles.CardContainer>
              {data?.map((card: any) => {
                return <DepartedFlightComponent key={card.id} data={card} onClick={() => handleCardClick(card)} />;
              })}
            </DepartedFlightsStyles.CardContainer>
            <TablePagination count={count} page={page} handlePageChange={onPageChange} />
          </DepartedFlightsStyles.Container>
        ) : (
          <DepartedFlightsStyles.NoFlights>
            <AirplanemodeInactiveIcon fontSize="large" />
            <h3>{t("no-flights-to-show")}</h3>
          </DepartedFlightsStyles.NoFlights>
        )
      ) : (
        <DepartedFlightsStyles.Container>
          <DepartedFlightsStyles.CardContainer>{generateSkeletonCards()}</DepartedFlightsStyles.CardContainer>
          <Skeleton
            sx={{ bgcolor: theme.palette.primary.light }}
            variant="rectangular"
            animation="wave"
            height={25}
            width={350}
            style={{ marginTop: "1.8%" }}
          />
        </DepartedFlightsStyles.Container>
      )}
    </>
  );
};

export default DepartedFlights;
