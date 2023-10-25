import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CancelIcon from "@mui/icons-material/Cancel";
import { Stack, Chip } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import MultiSelectStyles from "./styles";
import { useConfigurationByEventId } from "@/apis/settings/config-setting/useConfigurationByEventId";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}

export const MultiSelect = ({ eventId, linkedEventIds, setLinkedEventIds }: any) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>(linkedEventIds);

  const { data: configsByEventId } = useConfigurationByEventId(eventId);

  const { t, i18n } = useTranslation();

  const isArabic = i18n.language.startsWith("ar_AR");

  const handleChange = (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    const selectedIds = event.target.value;

    setLinkedEventIds(selectedIds);
    setPersonName(Array.isArray(selectedIds) ? selectedIds : [selectedIds]);
  };

  const uniqueEventsSet = new Set();

  const uniqueEvents = configsByEventId?.filter((obj) => {
    if (obj) {
      const objString = JSON.stringify(obj);
      if (!uniqueEventsSet.has(objString)) {
        uniqueEventsSet.add(objString);
        return true;
      }
      return false;
    }
  });

  React.useEffect(() => {
    setPersonName(linkedEventIds.length ? linkedEventIds : []);
  }, [linkedEventIds]);

  return (
    <FormControl sx={{ m: 0, width: "100%" }}>
      <MultiSelectStyles.CustomSelect
        variant="standard"
        IconComponent={() => null}
        multiple
        value={personName}
        onChange={handleChange}
        renderValue={(selected: any) => (
          <MultiSelectStyles.CustomStack>
            {selected.map((value) => {
              const linkedEvents = uniqueEvents?.find((event: any) => event.id === value);
              return (
                <MultiSelectStyles.CustomChip
                  size="small"
                  key={value}
                  label={linkedEvents ? (isArabic ? linkedEvents?.name_ar : linkedEvents?.name_en) : ""}
                  onDelete={() => {
                    setPersonName(personName.filter((item: any) => item !== value));
                    setLinkedEventIds(personName.filter((item: any) => item !== value));
                  }}
                  deleteIcon={<CancelIcon onMouseDown={(event: any) => event.stopPropagation()} />}
                />
              );
            })}
          </MultiSelectStyles.CustomStack>
        )}
        MenuProps={{
          MenuListProps: {
            sx: {
              padding: 0,
            },
          },
          PaperProps: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
              width: 250,
              padding: 0,
            },
          },
        }}
      >
        {!uniqueEvents ? (
          <MultiSelectStyles.CustomMenuItem
            value=""
            disabled
            sx={{
              "&:disabled": {
                opacity: "1 !important",
              },
            }}
          >
            {t("please-select-event")}
          </MultiSelectStyles.CustomMenuItem>
        ) : (
          uniqueEvents?.map((event: any) => (
            <MultiSelectStyles.CustomMenuItem
              key={event.id}
              value={event.id}
              style={getStyles(event, personName, theme)}
            >
              {isArabic ? event.name_ar : event.name_en}
            </MultiSelectStyles.CustomMenuItem>
          ))
        )}
      </MultiSelectStyles.CustomSelect>
    </FormControl>
  );
};
