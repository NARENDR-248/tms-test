import { styled } from "@mui/material";

const DateRangePickerStyles = {
  Align: styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    "& .disabled": {
      display: "none",
    },
  })),

  Dash: styled("div")(({ theme }) => ({
    color: "rgba(255, 255, 255, 0.5)",
    margin: "0 0.5em",
    cursor: "default",
  })),

  CalendarWrapper: styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: "rgba(255, 255, 255, 0.5)",
    display: "flex",
    flexDirection: "row",
    padding: "0.47em 0.57em 0.456em 0.57em",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "3px",
    "& input": {
      backgroundColor: theme.palette.primary.main,
      color: "rgba(255, 255, 255, 0.5)",
    },
    "& .react-datepicker-wrapper": {
      width: "86px !important",
      // width: "max-content!important",
      overflow: "hidden",
    },
    "& .react-datepicker-wrapper input": {
      border: "none",
      cursor: "pointer",
      outline: "none !important",
    },
    "& .disabled": {
      cursor: "not-allowed !important",
      opacity: "0.5",
      display: "none",
    },
    "& .react-datepicker-wrapper input:focused": {
      border: "none !important",
      outline: "none !important",
    },
    "& input:focused": {
      border: "none !important",
      outline: "none !important",
    },
  })),
};
export default DateRangePickerStyles;
