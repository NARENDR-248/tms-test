import InputAdornment from "@mui/material/InputAdornment";
import React from "react";
import SearchIcon from "@/__assets/icons/SearchIcon";
import { TextField } from "@mui/material";
import { InputsStyles } from "./styles";

const CarriersSubInput = ({ color, setSearchedCarrier }: any) => {
  const handleSearchedCarrier = (e: any) => {
    setSearchedCarrier(e.target.value);
  };

  return (
    <>
      <InputsStyles.Container>
        <TextField
          placeholder="Search"
          type="text"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color={"#fff"} />
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: "#1F3A51",
            height: "35px",
            width: "100%",
            borderRadius: "5px",
            "& .MuiInputBase-root": {
              height: "35px",
              color: "#fff",
              opacity: "0.5",
            },
          }}
          onChange={handleSearchedCarrier}
        />
      </InputsStyles.Container>
    </>
  );
};

export default CarriersSubInput;
