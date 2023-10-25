import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@/__assets/icons/SearchIcon";
import SearchStyles from "./styles";
import { useTranslation } from "react-i18next";
import { useFlightsSearchQueryStore } from "@/store/flightsSearchQueryStore";

export default function Search({ onSearch }: { onSearch: Function }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [placeholder, setPlaceholder] = React.useState("");

  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    setPlaceholder(() => {
      return t("um.search-user-group");
    });
  }, [i18n.language]);

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <SearchStyles.Search
      className="search-filter"
      id="search-input"
      placeholder={placeholder}
      autoComplete="off"
      value={searchQuery}
      onChange={handleSearchChange}
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color={"rgba(255, 255, 255, 0.5)"} />
          </InputAdornment>
        ),
      }}
      variant="standard"
    />
  );
}
