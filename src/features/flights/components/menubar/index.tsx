import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import MenubarStyles from "./styledComponents";
import { useTranslation } from "react-i18next";
import { useOngoingFlightsCount } from "@/apis/flights/useOngoingFlightsCount";
import { useDepartedFlightsCount } from "@/apis/flights/useDepartedFlightsCount";
import { useDepartedFlightsCountStore } from "@/store/departedFlightsCount";
import { useOngoingFlightsCountStore } from "@/store/ongoingFlightsCount";
import { useRouter, usePathname } from "next/navigation";
import Search from "./filterComponents/search";
import TerminalsDropdown from "./filterComponents/terminalsDropdown";
import DateRangeFilter from "./filterComponents/dateRangePicker";
import { useFlightsSearchQueryStore } from "@/store/flightsSearchQueryStore";
import { useFlightsTerminalStore } from "@/store/flightsTerminalStore";
import { useDepartedDateStore } from "@/store/departedDateStore";

const Menubar: React.FC = () => {
  const { t } = useTranslation();

  const router = useRouter();
  const pathName = usePathname();

  const [tabValue, setTabValue] = React.useState(0);

  React.useEffect(() => {
    if (pathName.includes("departed")) {
      setTabValue(2);
    } else if (pathName.includes("incoming")) {
      setTabValue(1);
    } else {
      setTabValue(0);
    }
  }, [pathName]);

  const departedFlightsCount = useDepartedFlightsCountStore((state) => state.departedCount);
  const setDepartedFlightsCount = useDepartedFlightsCountStore((state) => state.setDepartedCount);

  const ongoingFlightsCount = useOngoingFlightsCountStore((state) => state.ongoingCount);
  const setOngoingFlightsCount = useOngoingFlightsCountStore((state) => state.setOngoingCount);

  const searchQuery = useFlightsSearchQueryStore((state) => state.searchQuery);
  const terminalId = useFlightsTerminalStore((state) => state.terminalId);

  const startDateForDeparted = useDepartedDateStore((state) => state.startDate);
  const endDateForDeparted = useDepartedDateStore((state) => state.endDate);

  const { data } = useDepartedFlightsCount(searchQuery, terminalId, startDateForDeparted, endDateForDeparted);

  const { data: ongoing } = useOngoingFlightsCount(searchQuery, terminalId);

  React.useEffect(() => {
    if (data !== undefined) {
      setDepartedFlightsCount(data);
    }
  }, [data]);

  React.useEffect(() => {
    if (ongoing !== undefined) {
      setOngoingFlightsCount(ongoing);
    }
  }, [ongoing]);

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  return (
    <MenubarStyles.Container>
      <MenubarStyles.TabsContainer>
        <Box sx={{ borderBottom: 1, borderColor: "divider", color: "white" }}>
          <Tabs
            value={tabValue}
            aria-label="basic tabs example"
            TabIndicatorProps={{ style: { background: "white" } }}
            textColor="inherit"
          >
            <Tab
              className="ongoing-tab"
              label={t("ongoing") + ` (${ongoingFlightsCount}) `}
              {...a11yProps(0)}
              onClick={() => router.push("/flights/ongoing")}
            />
            <Tab
              className="incoming-tab"
              label={t("incoming") + " (6)"}
              {...a11yProps(1)}
              onClick={() => router.push("/flights/incoming")}
            />
            <Tab
              className="departed-tab"
              label={t("departed") + ` (${departedFlightsCount})`}
              {...a11yProps(2)}
              onClick={() => router.push("/flights/departed")}
            />
          </Tabs>
        </Box>
      </MenubarStyles.TabsContainer>
      <MenubarStyles.FiltersContainer>
        <Search />
        <TerminalsDropdown />
        <DateRangeFilter />
      </MenubarStyles.FiltersContainer>
    </MenubarStyles.Container>
  );
};

export default Menubar;
