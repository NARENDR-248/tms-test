import getEventLogCSVForTurnAround from "@/apis/eventsLogs/getEventLogCSVForTurnAroundEventsLogsCSVForTurnAround";
import MenuBarStyles from "../../../menuBar/styles";
import DropdownStyles from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import { useTurnaroundStore } from "@/store/turnaroundStore";
import { CSVLink, CSVDownload } from "react-csv";
import { formatDataForTT, transformEvents } from "@/features/turnArounds/utils";

const Dropdown = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");
  let turnAround = useTurnaroundStore((state) => state.turnAround);
  let events = useTurnaroundStore((state) => state.events);
  let live = useTurnaroundStore((state) => state.live);

  const getCsvData = () => {
    let data: any;
    if (live) {
      data = transformEvents(events, isArabic);
    } else {
      data = formatDataForTT(events, isArabic);
    }

    data = data.map((column) => {
      const filteredEventName = column.ui_name_en !== null ? column.ui_name_en : column.name_en;

      const filteredEventNameArabic = column.ui_name_ar !== null ? column.ui_name_ar : column.name_ar;

      const startDelay = column.startDelay === "-" ? (isArabic ? "0 ثواني" : "0 seconds") : column.startDelay;
      const endDelay = column.endDelay === "-" ? (isArabic ? "0 ثواني" : "0 seconds") : column.endDelay;

      return {
        name: filteredEventName,
        name_ar: filteredEventNameArabic,
        started: column.started,
        ended: column.lastUpdated,
        duration: column.duration,
        startDelay: startDelay,
        endDelay: endDelay,
        maxTimeDelay: column.maxTimeDelay,
      };
    });

    return data;
  };

  return (
    <>
      <DropdownStyles.StyledSelect
        sx={{
          boxShadow: "none !important",
          ".MuiOutlinedInput-notchedOutline": { border: "0 !important" },
        }}
        onChange={() => {}}
        renderValue={() => {
          return <MenuIcon sx={{ color: "white", cursor: "pointer" }} />;
        }}
        displayEmpty
        IconComponent={() => null}
        inputProps={{ sx: { padding: "0 !important" } }}
      >
        <MenuBarStyles.StyledMenuItem
          role="csv"
          style={{
            direction: isArabic ? "rtl" : "ltr",
            color: "black",
          }}
          disabled={live ? true : false}
          onClick={() => {
            getEventLogCSVForTurnAround(turnAround.id);
          }}
        >
          <CSVLink
            style={{
              color: "white",
            }}
            data={getCsvData()}
            filename={"eventsLogs.csv"}
          >
            {t("download-as-csv")}
          </CSVLink>
        </MenuBarStyles.StyledMenuItem>
      </DropdownStyles.StyledSelect>
    </>
  );
};

export default Dropdown;
