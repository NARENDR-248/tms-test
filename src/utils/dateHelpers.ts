import { differenceInMinutes, differenceInSeconds, format, formatDistanceToNow } from "date-fns";

import { utcToZonedTime } from "date-fns-tz";

const timeZone = "Asia/Riyadh";

const convertTime = (d: string) => {
  const date = new Date(d);
  const zonedDate = utcToZonedTime(date, timeZone);
  return zonedDate;
};
const formatTime = (d: string) => {
  const date = new Date(d);
  const zonedDate = utcToZonedTime(date, timeZone);
  return format(zonedDate, "hh:mm:ss aa");
};

const formatHoursAndMinutes24Hours = (d: string) => {
  const date = new Date(d);
  const zonedDate = utcToZonedTime(date, timeZone);
  return format(zonedDate, "HH:mm");
};

const formatTime24Hours = (d: string) => {
  const date = new Date(d);
  const zonedDate = utcToZonedTime(date, timeZone);
  return format(zonedDate, "HH:mm:ss");
};

const formatDate = (d: string) => {
  const date = new Date(d);
  const zonedDate = utcToZonedTime(date, timeZone);
  return format(zonedDate, "dd-MM-yyyy");
};

const formatDateWithMonthName = (d: string) => {
  const date = new Date(d);
  const zonedDate = utcToZonedTime(date, timeZone);
  return format(zonedDate, "dd MMM yyyy");
};

const dataBaseFormatDate = (d: any) => {
  const date = new Date(d);
  return format(date, "yyyy-MM-dd");
};

const getEslaped = (d: string) => {
  const date = new Date(d);
  const zonedDate = utcToZonedTime(date, timeZone);
  return formatDistanceToNow(zonedDate);
};

const calculateDuration = (startTime: string, endTime: string) => {
  const startTimestamp = new Date(startTime);
  const endTimestamp = new Date(endTime);

  const dur = differenceInMinutes(endTimestamp, startTimestamp);

  return dur;
};

const calculateDurationInSeconds = (startTime: string, endTime: string) => {
  const startTimestamp = new Date(startTime);
  const endTimestamp = new Date(endTime);

  return differenceInSeconds(endTimestamp, startTimestamp);
};

function humanizeDuration(startDateString, endDateString, language) {
  const start = new Date(startDateString);
  const end = new Date(endDateString);
  const diffInMilliseconds = end.valueOf() - start.valueOf();

  const hours = Math.floor(diffInMilliseconds / 1000 / 60 / 60);
  const minutes = Math.floor((diffInMilliseconds / 1000 / 60) % 60);
  const seconds = Math.floor((diffInMilliseconds / 1000) % 60);

  let result = "";

  if (language === "arabic") {
    if (hours) {
      result += hours === 1 ? `${hours} ساعة` : `${hours} ساعات`;
    }
    if (hours && (minutes || seconds)) result += ", ";

    if (minutes) {
      result += minutes === 1 ? `${minutes} دقيقة` : `${minutes} دقائق`;
    }
    if (minutes && seconds) result += ", ";

    if (seconds) {
      result += seconds === 1 ? `${seconds} ثانية` : `${seconds} ثواني`;
    }
  } else if (language === "english") {
    if (hours) {
      result += hours === 1 ? `${hours} hour` : `${hours} hours`;
    }
    if (hours && (minutes || seconds)) result += ", ";

    if (minutes) {
      result += minutes === 1 ? `${minutes} minute` : `${minutes} minutes`;
    }
    if (minutes && seconds) result += ", ";

    if (seconds) {
      result += seconds === 1 ? `${seconds} second` : `${seconds} seconds`;
    }
  } else {
    throw new Error("Unsupported language");
  }

  if (result === "") {
    result = language === "arabic" ? `${0} ثانية` : `${0} seconds`;
  }
  return result;
}

export {
  calculateDuration,
  calculateDurationInSeconds,
  convertTime,
  dataBaseFormatDate,
  formatDate,
  formatDateWithMonthName,
  formatHoursAndMinutes24Hours,
  formatTime,
  formatTime24Hours,
  getEslaped,
  humanizeDuration,
};
