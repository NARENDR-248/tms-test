import { calculateDuration, formatTime24Hours, humanizeDuration } from "@/utils/dateHelpers";

export function createData(
  isArabic,
  event: {
    name_en: string;
    name_ar: string;
    ui_name_en: string | null;
    ui_name_ar: string | null;
  },
  started: any,
  ended: any,
  startTimeStartDelay: string | null,
  startTimeEndDelay: string | null,
  endTimeStartDelay: string | null,
  endTimeEndDelay: string | null,
  startDelayVariant: string | null,
  endDelayVariant: string | null,
  maxTimeDelay: string | null,
) {
  let duration = "",
    startDelay = "",
    endDelay = "";
  let startedCopy: any = "";
  let endedCopy: any = "";

  if (started == null) {
    started = "Not Yet Started";
    ended = "Not Yet Started";
    duration = "Not Yet Started";
    startDelay = "-";
    endDelay = "-";
  } else {
    startedCopy = started.slice();
    started = formatTime24Hours(started);
    duration = "In Progress";
    if (startTimeStartDelay != null && startTimeEndDelay != null) {
      startDelay = humanizeDuration(startTimeStartDelay, startTimeEndDelay, isArabic ? "arabic" : "english");
    } else {
      startDelay = "-";
    }
    if (endTimeStartDelay != null && endTimeEndDelay != null) {
      endDelay = humanizeDuration(endTimeStartDelay, endTimeEndDelay, isArabic ? "arabic" : "english");
    } else {
      endDelay = "-";
    }

    if (ended == null) {
      endDelay = "-";
    } else {
      endedCopy = ended.slice();
      ended = formatTime24Hours(ended);
      duration = humanizeDuration(startedCopy, endedCopy, isArabic ? "arabic" : "english");
    }
    maxTimeDelay = isArabic ? "0 ثواني" : "0 seconds";
  }

  return {
    name_en: event.name_en,
    name_ar: event.name_ar,
    ui_name_en: event.ui_name_en,
    ui_name_ar: event.ui_name_ar,
    started,
    lastUpdated: ended,
    duration,
    startDelay,
    endDelay,
    startDelayColor: startDelayVariant
      ? startDelayVariant === "min"
        ? "orange"
        : startDelayVariant === "mid"
        ? "orange"
        : "red"
      : "white",
    endDelayColor: endDelayVariant
      ? endDelayVariant === "min"
        ? "orange"
        : endDelayVariant === "mid"
        ? "orange"
        : "red"
      : "white",
    startDelayVariant,
    endDelayVariant,
    maxTimeDelay,
  };
}

export const formatDataForTT = (dbData: any, isArabic) => {
  const x: any = [];

  if (!dbData) {
    return [];
  }

  for (let i = 0; i < dbData.length; ++i) {
    const log = dbData[i];
    x.push(
      createData(
        isArabic,
        {
          name_en: log.event.name_en,
          name_ar: log.event.name_ar,
          ui_name_en: log.event.ui_name_en,
          ui_name_ar: log.event.ui_name_ar,
        },
        log.startTime ? log.startTime.toString() : null,
        log.endTime ? log.endTime.toString() : null,

        log.startTimeStartDelay ? log.startTimeStartDelay.toString() : null,
        log.startTimeEndDelay ? log.startTimeEndDelay.toString() : null,

        log.endTimeStartDelay ? log.endTimeStartDelay.toString() : null,
        log.endTimeEndDelay ? log.endTimeEndDelay.toString() : null,
        log.startDelayVariant,
        log.endDelayVariant,
        isArabic ? "0 ثواني" : "0 seconds",
      ),
    );
  }

  return x;
};

export const transformEvents = (events: any, isArabic) => {
  let transformedData: any = [];

  for (let i = 0; i < events.length; ++i) {
    let event = events[i];
    let started = "";
    let lastUpdated = "";
    let duration = "";
    let startDelay = "-";
    let startDelayColor = "-";
    let endDelay = "-";
    let endDelayColor = "-";
    let maxTimeDelay = "-";
    let startDelayVariant = "-";
    let endDelayVariant = "-";
    if (typeof event.slots != "undefined") {
      for (let j = 0; j < event.slots.length; ++j) {
        let slot = event.slots[j];
        if (typeof slot.delays !== "undefined") {
          for (let k = 0; k < slot.delays.length; ++k) {
            let delay = slot.delays[k];
            if (delay.type === "startDelay") {
              if (delay.startTime && delay.updateTime) {
                startDelay = humanizeDuration(delay.startTime, delay.updateTime, isArabic ? "arabic" : "english");
                if (delay.variant) {
                  startDelayColor = delay.variant === "min" ? "orange" : delay.variant === "mid" ? "orange" : "red";
                  startDelayVariant = delay.variant;
                } else {
                  startDelayColor = "white";
                }
              }
            }

            if (delay.type === "endDelay") {
              if (delay.startTime && delay.updateTime) {
                endDelay = humanizeDuration(delay.startTime, delay.updateTime, isArabic ? "arabic" : "english");
                if (delay.variant) {
                  endDelayColor = delay.variant === "min" ? "orange" : delay.variant === "mid" ? "orange" : "red";
                  endDelayVariant = delay.variant;
                } else {
                  endDelayColor = "white";
                }
              }
            }
          }
        }
        started = slot.startTime ? formatTime24Hours(slot.startTime) : "Not Yet Started";
        lastUpdated = formatTime24Hours(slot.updateTime);
        if (started == "Not Yet Started") {
          duration = "Not Yet Started";
        } else {
          duration = humanizeDuration(slot.startTime, slot.updateTime, isArabic ? "arabic" : "english");
        }
        transformedData.push({
          id: event.id,
          name_en: event.name_en,
          name_ar: event.name_ar,
          ui_name_en: event.ui_name_en,
          ui_name_ar: event.ui_name_ar,
          started,
          lastUpdated,
          duration,
          startDelay,
          startDelayColor,
          endDelay,
          endDelayColor,
          startDelayVariant,
          endDelayVariant,
          maxTimeDelay,
        });
      }
    }
  }
  return transformedData;
};
