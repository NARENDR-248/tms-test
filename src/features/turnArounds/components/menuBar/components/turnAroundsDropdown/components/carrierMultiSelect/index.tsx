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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}

export default function CarrierMultiSelect({ data, setSelectedCarrier, selectedCarrier }: any) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>(selectedCarrier || []);
  const [placeholder, setPlaceholder] = React.useState("");

  const { t, i18n } = useTranslation();

  const isArabic = i18n.language.startsWith("ar_AR");

  React.useEffect(() => {
    setPlaceholder(() => {
      return t("carriers");
    });
  }, []);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    event.preventDefault();
    event.stopPropagation();
    const {
      target: { value },
    } = event;
    setSelectedCarrier(value);
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };

  return (
    <FormControl sx={{ m: 0, width: "100%" }}>
      <Select
        variant="standard"
        placeholder={placeholder}
        sx={{
          fontSize: "0.9em",
          "&:before": {
            borderBottom: "1px solid rgba(255, 255, 255, 0.7) !important",
          },
          "&:after": {
            borderBottom: "1px solid rgba(255, 255, 255, 0.7) !important",
          },
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
            borderBottomColor: "red", // Error underline color
            borderBottomWidth: "1px", // Error underline thickness
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
          },
          "& .MuiIconButton-root": {
            color: "rgba(255,255,255,0.7)", // end icon color
          },
          "& .MuiSelect-nativeInput": {
            opacity: personName.length ? 0 : 1,
            padding: "0.4em 2em",
            fontSize: "1em",
            background: "transparent",
            border: 0,
            fontFamily: "__DM_Sans_aac82c,__DM_Sans_Fallback_aac82c,Helvetica,Arial,sans-serif",
            fontWeight: 500,
            color: "#fff",
          },
        }}
        startAdornment={
          <Image
            src="/Carrier.png"
            width={20}
            height={20}
            alt="image"
            style={{
              marginRight: isArabic ? "0em" : "0.5em",
              marginLeft: isArabic ? "0.5em" : "0em",
              objectFit: "contain",
            }}
          />
        }
        IconComponent={() => null}
        endAdornment={
          <Image
            src="/Close.png"
            width={7}
            height={7}
            alt="image"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSelectedCarrier([]);
              setPersonName([]);
            }}
          />
        }
        multiple
        value={personName}
        onChange={handleChange}
        renderValue={(selected) => (
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 0.5,
            }}
          >
            {selected.map((value) => (
              <Chip
                size="small"
                sx={{
                  backgroundColor: theme.palette.common.white,
                  fontSize: "0.8em",
                }}
                key={value}
                label={value}
                onDelete={() => {
                  setPersonName(personName.filter((item: any) => item !== value));

                  setSelectedCarrier(personName.filter((item: any) => item !== value));
                }}
                deleteIcon={<CancelIcon onMouseDown={(event: any) => event.stopPropagation()} />}
              />
            ))}
          </Stack>
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
        {data.map((carrierName: any) => (
          <MenuItem
            key={carrierName}
            value={carrierName}
            style={getStyles(carrierName, personName, theme)}
            sx={{
              color: "white",
              background: theme.palette.primary.light,
              "&:hover": { color: "#fff" },
              fontSize: "0.8em",

              //also the selected item color should be primary main
              "&.Mui-selected": { color: "#fff" },
            }}
          >
            {carrierName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
