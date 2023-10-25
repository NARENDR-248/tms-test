import * as React from "react";
import FormControl from "@mui/material/FormControl";
import SelectStyles from "./styles";
import { useGetEventsAPI } from "@/apis/settings/rename-event/useGetEventsAPI";
import { useTranslation } from "react-i18next";

export const FilterSelect = ({ eventId, setEventId }: any) => {
  const [eventname, setEventName] = React.useState(eventId);
  const { data: allEvents } = useGetEventsAPI();

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");

  const handleChange = (event: any) => {
    setEventId(event.target.value);
    setEventName(event.target.value);
  };

  React.useEffect(() => {
    setEventName(eventId === null ? "" : eventId);
  }, [eventId]);

  return (
    <FormControl variant="standard">
      <SelectStyles.CustomSelect
        labelId="config-filter-seelct-label"
        id="config-filter-seelct"
        value={eventname}
        onChange={handleChange}
        label="EventName"
        MenuProps={{
          MenuListProps: {
            sx: {
              maxHeight: "15em",
              overflow: "hidden scroll",
              "&::-webkit-scrollbar": {
                width: "0",
                height: "0",
              },
            },
          },
        }}
      >
        {allEvents?.map((event: any) => {
          return (
            <SelectStyles.CustomMenuItem value={event.id} key={event.id}>
              {isArabic ? event.name_ar : event.name_en}
            </SelectStyles.CustomMenuItem>
          );
        })}
      </SelectStyles.CustomSelect>
    </FormControl>
  );
};
