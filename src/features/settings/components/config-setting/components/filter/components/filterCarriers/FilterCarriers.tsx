import * as React from "react";
import FormControl from "@mui/material/FormControl";
import SelectStyles from "../filterSelect/styles";
import { CarriersModal } from "../../../modals/CarriersModal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const FilterCarrierSelect = ({ carriers, setCarriers }: any) => {
  const [open, setOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");

  const handleChange = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <>
      <FormControl variant="standard" onClick={handleChange}>
        <SelectStyles.CustomSelect
          labelId="config-filter-seelct-label"
          id="config-filter-seelct"
          label="Carriers"
          value={
            carriers.length
              ? carriers.length > 1
                ? `${carriers.length} ${t("carriers-selected")}`
                : `${carriers.length} ${t("carrier-selected")}`
              : `${t("select-carriers")}`
          }
          sx={{
            "& .MuiPaper-root": {
              display: "none",
            },
            "& .MuiSelect-nativeInput": {
              opacity: 1,
              background: "transparent",
              border: 0,
              padding: "0 0.1em",
              color: "#fff",
              fontSize: "1em",
            },
          }}
          disabled
        ></SelectStyles.CustomSelect>
      </FormControl>
      <CarriersModal open={open} close={handleModalClose} carriers={carriers} setCarriers={setCarriers} />
    </>
  );
};
