import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CancelIcon from "@mui/icons-material/Cancel";
import { Stack, Chip } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}

export const StandTypesMultiSelect = ({ data, val, setValue, isCancelled, tempStandTypes }: any) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const setNewVal = (value) => {
    let newV: any = [""];
    if (typeof value == "object") {
      newV = value.join(",");
    }
    return setValue(newV);
  };

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    event.preventDefault();
    event.stopPropagation();
    const {
      target: { value },
    } = event;
    setNewVal(value);
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };

  React.useEffect(() => {
    setNewVal(personName);
  }, [personName]);

  React.useEffect(() => {
    isCancelled ? setPersonName([]) : null;
  }, [isCancelled]);

  React.useEffect(() => {
    if (tempStandTypes) {
      setPersonName(tempStandTypes);
    }
  }, [tempStandTypes]);

  return (
    <div
      style={{
        width: "65%",
      }}
    >
      <FormControl sx={{ m: 0, width: "100%" }}>
        <Select
          variant="standard"
          sx={{
            color: theme.palette.common.white,
            height: "2em",
            width: "100%",
            background: "#1F3A51",
            borderRadius: "4px",
            border: "none",
            "&:hover": {
              border: "none",
            },
            "& .MuiSvgIcon-root": {
              color: "#7699B8",
            },
          }}
          IconComponent={() => null}
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
                padding: "0 1em",
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
          {data.map((standType: any) => (
            <MenuItem
              key={standType}
              value={standType}
              style={getStyles(standType, personName, theme)}
              sx={{
                color: "white",
                background: theme.palette.primary.light,
                "&:hover": { color: "#fff" },
                fontSize: "0.8em",
                "&.Mui-selected": { color: "#fff" },
              }}
            >
              {standType}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
