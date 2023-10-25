import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@/__assets/icons/SearchIcon";
import InputFieldStyles from "./styles";
import { useTranslation } from "react-i18next";

export default function InputWithIcon({ onSearch }: any) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [placeholder, setPlaceholder] = React.useState("");

  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    setPlaceholder(() => {
      return t("search");
    });
  }, []);

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
        width: "100%",
      }}
    >
      <InputFieldStyles.InputField
        id="search-input"
        placeholder={placeholder}
        style={{
          color: "#fff !important",
          // "& .MuiFormControl-root": {  },
          // "& .mui-style-rtl-1x51dt5-MuiInputBase-input-MuiInput-input": {
          //   color: "#fff !important",
          // },
        }}
        value={searchQuery}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color={"#fff"} />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </Box>
  );
}
