import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { dataBaseFormatDate } from "@/utils/dateHelpers";
import { DatePicker } from "@mui/x-date-pickers";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useDateStore } from "./store";

export default function DateFilter({ setSelectedDate, selectedDate }: any) {
  let dateStore = useDateStore((state) => state);
  const { t, i18n } = useTranslation();

  const handleDateChange = (newValue: Date | null) => {
    setSelectedDate(dataBaseFormatDate(newValue));
    dateStore.setDate(newValue);
  };

  const handleClear = (e: any) => {
    e.stopPropagation();
    setSelectedDate("");
    dateStore.setDate("");
  };

  const placeholderText = t("date");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        openTo="day"
        value={dateStore.date}
        slotProps={{
          textField: {
            variant: "standard",
            InputProps: {
              //add calendar icon as end adornment
              startAdornment: (
                <Image
                  src="/Close.png"
                  width={7}
                  height={7}
                  alt="image"
                  onClick={handleClear}
                  style={{ cursor: "pointer" }}
                />
              ),
            },
            placeholder: placeholderText,
            sx: {
              direction: "rtl",
              width: "100%",
              // normal state
              "& .MuiInput-underline:before": {
                borderBottomColor: "rgba(255,255,255,0.7)", // Normal underline color
                borderBottomWidth: "1px", // Normal underline thickness
              },
              // hover state
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottomColor: "rgba(255,255,255,0.7)", // Hover underline color
                borderBottomWidth: "1px", // Hover underline thickness
              },
              // focused state
              "& .MuiInput-underline:after": {
                borderBottomColor: "rgba(255,255,255,0.7)", // Focus underline color
                borderBottomWidth: "1px", // Focus underline thickness
              },
              // error state
              "& .MuiInput-underline.Mui-error:after": {
                borderBottomColor: "rgba(255,255,255,0.7)", // Error underline color
                borderBottomWidth: "2px", // Error underline thickness
              },
              // disabled state
              "& .MuiInput-underline.Mui-disabled:before": {
                borderBottomColor: "gray", // Disabled underline color
                borderBottomWidth: "1px", // Disabled underline thickness
              },
              "& .MuiFormLabel-root": {
                color: "rgba(255,255,255,0.7)", // label color
              },
              "& .MuiInputBase-input": {
                color: "rgba(255,255,255,0.7)", // input color
                direction: "ltr",
                paddingRight: "0.9em",
                paddingLeft: "0.9em",
                fontSize: "0.8em",
                opacity: 0.7,
              },
              "& .MuiIconButton-root": {
                color: "rgba(255,255,255,0.7)", // end icon color
                paddingLeft: "0",
                marginLeft: "-10px",
              },
              "& .MuiSvgIcon-root": {
                height: "0.8em",
                width: "0.8em",
                marginRight: "0.2em",
              },
            },
          },
        }}
        onChange={handleDateChange}
      />
    </LocalizationProvider>
  );
}
