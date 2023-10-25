import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { InputsStyles } from "./styles";
import { format } from "date-fns";
import { useState, useEffect } from "react";

export const CustTimeField = ({ color, value, setValue }: any) => {
  const [currentTime, setCurrentTime] = useState<Dayjs | null>(null);

  useEffect(() => {
    setCurrentTime(formatSecondsToTimestamp(value));
  }, [value]);

  const changeHandler = (e: any) => {
    const time = format(e.$d, "HH:mm:ss");

    if (time) {
      const value_array = time?.split(":").map((number) => {
        return parseInt(number);
      });

      if (value_array.length === 3) {
        const hrtoSec = value_array[0] * 60 * 60;
        const mintoSec = value_array[1] * 60;
        const totalSeconds = value_array[2] + hrtoSec + mintoSec;

        setValue(totalSeconds);
      }
    }
  };

  const formatSecondsToTimestamp = (value: number) => {
    // if (value > 0) {
    const currentDate = new Date();
    const secondsToAdd = value * 1000;
    currentDate.setHours(0, 0, 0, 0);
    const resetTime = currentDate.setMilliseconds(
      currentDate.getMilliseconds() + secondsToAdd
    );

    return dayjs(resetTime);
    // } else if (value === null) {
    //   return null;
    // } else {
    //   return currentTime;
    // }
  };

  return (
    <div className="customTimeField">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["TimeField", "TimeField", "TimeField"]}>
          <InputsStyles.CustomTimeField
            value={currentTime}
            onChange={changeHandler}
            format="HH:mm:ss"
            sx={{
              "& .MuiInputBase-input": {
                color: `${color} !important`,
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};
