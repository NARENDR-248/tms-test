import { FC } from "react";
import DatePicker from "react-datepicker";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DateRangePickerStyles from "./styles";
import { useDepartedDateStore } from "@/store/departedDateStore";
import { usePathname } from "next/navigation";
import { useIncomingDateStore } from "@/store/incomingDateStore";

const DateRangeFilter: FC<any> = () => {
  const startDateForDeparted = useDepartedDateStore((state) => state.startDate);
  const setStartDateForDeparted = useDepartedDateStore((state) => state.setStartDate);
  const endDateForDeparted = useDepartedDateStore((state) => state.endDate);
  const setEndDateForDeparted = useDepartedDateStore((state) => state.setEndDate);

  const startDateForIncoming = useIncomingDateStore((state) => state.startDate);
  const setStartDateForIncoming = useIncomingDateStore((state) => state.setStartDate);
  const endDateForIncoming = useIncomingDateStore((state) => state.endDate);
  const setEndDateForIncoming = useIncomingDateStore((state) => state.setEndDate);

  //NOTE: the commented out part in this file is the logic to make the datePicker open when calender icon is clicked.
  // const [isStartDatePickerOpen, setIsStartDatePickerOpen] = useState(false);
  // const [isEndDatePickerOpen, setIsEndDatePickerOpen] = useState(false);
  // const handleStartCalendarClick = () =>
  //   setIsStartDatePickerOpen((prev) => !prev);
  // const handleEndCalendarClick = () => setIsEndDatePickerOpen((prev) => !prev);

  const pathname = usePathname();
  const isOngoingFlightsPage = pathname.includes("flights/ongoing");
  const isIncomingFlightsPage = pathname.includes("flights/incoming");
  const isDepartedFlightsPage = pathname.includes("flights/departed");

  // calculate the date 2 days in the future
  let futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 2);

  // calculate the date 9 days in the past
  let pastDate = new Date();
  pastDate.setDate(pastDate.getDate() - 9);

  return (
    <DateRangePickerStyles.Align className="date-range-filter">
      <DateRangePickerStyles.CalendarWrapper className={isOngoingFlightsPage ? "disabled" : ""}>
        <DatePicker
          //when the calender icon is made clickable, the datePicker became typeable. readOnly makes it "not typeable"
          // readOnly={true}
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
          endDate={isIncomingFlightsPage ? endDateForIncoming : isDepartedFlightsPage ? endDateForDeparted : new Date()}
          minDate={isIncomingFlightsPage ? new Date() : isDepartedFlightsPage ? pastDate : undefined}
          maxDate={isDepartedFlightsPage ? new Date() : isIncomingFlightsPage ? futureDate : undefined}
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
            color: "rgba(255, 255, 255, 0.5)",
          }}
        />
        <DateRangePickerStyles.Dash>-</DateRangePickerStyles.Dash>
        <DatePicker
          //when the calender icon is made clickable, the datePicker became typeable. readOnly makes it "not typeable"
          // readOnly={true}
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
          endDate={isIncomingFlightsPage ? endDateForIncoming : isDepartedFlightsPage ? endDateForDeparted : new Date()}
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
            color: "rgba(255, 255, 255, 0.5)",
          }}
        />
      </DateRangePickerStyles.CalendarWrapper>
    </DateRangePickerStyles.Align>
  );
};

export default DateRangeFilter;
