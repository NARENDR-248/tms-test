import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./styles.module.css";

import React from "react";

type Props = {
  startDate: Date | null;
  endDate: Date | null;
  setDateRange: any;
};

const DatePicker: any = ({ startDate, endDate, setDateRange }: Props) => {
  return (
    <ReactDatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      isClearable={true}
      className={styles.container}
      placeholderText="Select a date range"
    />
  );
};

export default DatePicker;
