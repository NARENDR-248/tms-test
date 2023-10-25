import { useFlightsSearchQueryStore } from "@/store/flightsSearchQueryStore";
import { TextField } from "@mui/material";
import { FiltersFormComponents } from "./styles";
import { useFlightsTerminalStore } from "@/store/flightsTerminalStore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "@/utils/theme";
import useGetTerminals from "@/apis/terminals/useGetTerminals";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import { usePathname } from "next/navigation";
import { useDepartedDateStore } from "@/store/departedDateStore";
import { useIncomingDateStore } from "@/store/incomingDateStore";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useFilterFlightsDrawerStore } from "@/store/filterFlightsDrawerStore";

export default function FiltersForm() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");

  //apply filter button
  const handleApplyFilter = () => {
    useFilterFlightsDrawerStore.setState({ isDrawerOpen: false });
  };

  //Text search
  const searchQuery = useFlightsSearchQueryStore((state) => state.searchQuery);
  const setSearchQuery = useFlightsSearchQueryStore((state) => state.setSearchQuery);
  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  // Terminal
  const { data } = useGetTerminals();
  const terminalId = useFlightsTerminalStore((state) => state.terminalId);
  const setTerminalId = useFlightsTerminalStore((state) => state.setTerminalId);
  const handleTerminalChange = (event: any) => {
    const selectedTerminalId = event.target.value || "";
    setTerminalId(selectedTerminalId);
  };

  // Date range
  const startDateForDeparted = useDepartedDateStore((state) => state.startDate);
  const setStartDateForDeparted = useDepartedDateStore((state) => state.setStartDate);
  const endDateForDeparted = useDepartedDateStore((state) => state.endDate);
  const setEndDateForDeparted = useDepartedDateStore((state) => state.setEndDate);

  const startDateForIncoming = useIncomingDateStore((state) => state.startDate);
  const setStartDateForIncoming = useIncomingDateStore((state) => state.setStartDate);
  const endDateForIncoming = useIncomingDateStore((state) => state.endDate);
  const setEndDateForIncoming = useIncomingDateStore((state) => state.setEndDate);

  const pathname = usePathname();
  const isOngoingFlightsPage = pathname.includes("flights/ongoing");
  const isIncomingFlightsPage = pathname.includes("flights/incoming");
  const isDepartedFlightsPage = pathname.includes("flights/departed");

  // calculate the date 90 days in the future
  let futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 90);

  // calculate the date 90 days in the past
  let pastDate = new Date();
  pastDate.setDate(pastDate.getDate() - 90);

  return (
    <FiltersFormComponents.FormContainer>
      {/* heading */}
      <FiltersFormComponents.Heading>Filters</FiltersFormComponents.Heading>

      {/* search component*/}
      <FiltersFormComponents.TextSearch
        className="search-filter"
        autoComplete="off"
        id="outlined-search"
        placeholder="Search flights"
        type="search"
        value={searchQuery}
        onChange={handleSearchChange}
        // style={{
        //   border: "rgba(0, 0, 0, 1)",
        //   color: "rgba(0, 0, 0, 1)",
        // }}
      />

      {/* terminals dd component */}
      <FiltersFormComponents.StyledSelect
        value={terminalId}
        onChange={handleTerminalChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        className="terminal-dropdown"
        IconComponent={(props) => <ExpandMoreIcon {...props} style={{ color: theme.palette.common.white }} />}
        MenuProps={{
          MenuListProps: {
            sx: {
              background: theme.palette.primary.light,
              color: theme.palette.common.white,
            },
          },
        }}
      >
        <FiltersFormComponents.ButtonContainer>
          <FiltersFormComponents.StyledButton variant="text" onClick={() => setTerminalId("")}>
            Clear filter
          </FiltersFormComponents.StyledButton>
        </FiltersFormComponents.ButtonContainer>
        <FiltersFormComponents.StyledMenuItem disabled value="" selected>
          {t("select-terminal")}
        </FiltersFormComponents.StyledMenuItem>
        {data?.map((terminal: { id: string; name: string; apron_name_en: string; apron_name_ar: string }) => {
          return (
            <FiltersFormComponents.StyledMenuItem
              key={terminal.id}
              value={terminal.id}
              // sx={{ color: "white", marginLeft: "1em" }}
            >
              {terminal.name} ( {isArabic ? terminal.apron_name_ar : terminal.apron_name_en} )
            </FiltersFormComponents.StyledMenuItem>
          );
        })}
      </FiltersFormComponents.StyledSelect>

      {/* date range component */}
      <FiltersFormComponents.Align className="date-range-filter">
        <FiltersFormComponents.CalendarWrapper className={isOngoingFlightsPage ? "disabled" : ""}>
          <FiltersFormComponents.DateContainer>
            <DatePicker
              //when the calender icon is made clickable, the datePicker became typeable. readOnly makes it "not typeable"
              // readOnly={true}
              // popperPlacement="top-start"
              disabled={isOngoingFlightsPage}
              dateFormat="dd MMM yyyy"
              selected={
                isIncomingFlightsPage ? startDateForIncoming : isDepartedFlightsPage ? startDateForDeparted : new Date()
              }
              onChange={
                isIncomingFlightsPage
                  ? (date: any) => setStartDateForIncoming(date)
                  : isDepartedFlightsPage
                  ? (date: any) => setStartDateForDeparted(date)
                  : () => new Date()
              }
              selectsStart
              startDate={
                isIncomingFlightsPage ? startDateForIncoming : isDepartedFlightsPage ? startDateForDeparted : new Date()
              }
              endDate={
                isIncomingFlightsPage ? endDateForIncoming : isDepartedFlightsPage ? endDateForDeparted : new Date()
              }
              minDate={isIncomingFlightsPage ? new Date() : isDepartedFlightsPage ? pastDate : undefined}
              maxDate={isDepartedFlightsPage ? new Date() : undefined}
              className={isOngoingFlightsPage ? "disabled" : ""}
              // open={isStartDatePickerOpen}
              // onCalendarClose={() => setIsStartDatePickerOpen(false)}
              // onSelect={() => setIsStartDatePickerOpen(false)}
            />
            <CalendarMonthIcon
              className={isOngoingFlightsPage ? "disabled" : "calendarIcon"}
              // onClick={handleStartCalendarClick}
              sx={{
                // cursor: "pointer",
                color: "rgba(0, 0, 0, 1)",
              }}
            />
          </FiltersFormComponents.DateContainer>
          <FiltersFormComponents.Dash>-</FiltersFormComponents.Dash>
          <FiltersFormComponents.DateContainer>
            <DatePicker
              //when the calender icon is made clickable, the datePicker became typeable. readOnly makes it "not typeable"
              // readOnly={true}
              // popperPlacement="top-start"
              disabled={isOngoingFlightsPage}
              selected={
                isIncomingFlightsPage ? endDateForIncoming : isDepartedFlightsPage ? endDateForDeparted : new Date()
              }
              dateFormat="dd MMM yyyy"
              onChange={
                isIncomingFlightsPage
                  ? (date: any) => setEndDateForIncoming(date)
                  : isDepartedFlightsPage
                  ? (date: any) => setEndDateForDeparted(date)
                  : () => new Date()
              }
              selectsEnd
              startDate={
                isIncomingFlightsPage ? startDateForIncoming : isDepartedFlightsPage ? startDateForDeparted : new Date()
              }
              endDate={
                isIncomingFlightsPage ? endDateForIncoming : isDepartedFlightsPage ? endDateForDeparted : new Date()
              }
              // minDate={isIncomingFlightsPage ? new Date() : undefined}
              minDate={
                isIncomingFlightsPage ? startDateForIncoming : isDepartedFlightsPage ? startDateForDeparted : new Date()
              }
              maxDate={isIncomingFlightsPage ? futureDate : isDepartedFlightsPage ? new Date() : undefined}
              className={isOngoingFlightsPage ? "disabled" : ""}
              // open={isEndDatePickerOpen}
              // onCalendarClose={() => setIsEndDatePickerOpen(false)}
              // onSelect={() => setIsEndDatePickerOpen(false)}
            />
            <CalendarMonthIcon
              className={isOngoingFlightsPage ? "disabled" : "calendarIcon"}
              // onClick={handleEndCalendarClick}
              sx={{
                // cursor: "pointer",
                color: "rgba(0, 0, 0, 1)",
              }}
            />
          </FiltersFormComponents.DateContainer>
        </FiltersFormComponents.CalendarWrapper>
      </FiltersFormComponents.Align>

      {/* apply button */}
      <FiltersFormComponents.ApplyButton onClick={handleApplyFilter}>Done</FiltersFormComponents.ApplyButton>
    </FiltersFormComponents.FormContainer>
  );
}
