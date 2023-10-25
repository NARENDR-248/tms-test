import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CarriersModal } from "../modals/CarriersModal";
import { useTranslation } from "react-i18next";

const CarriersInput = ({ color, carriers, setCarriers }: any) => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");

  useEffect(() => {
    const selectCarrier = t("select-carriers");
    const carrierSelected = t("carrier-selected");
    const carriersSelected = t("carriers-selected");
    const carriersLength = carriers.length;

    if (carriersLength > 0) {
      carriersLength > 1
        ? setValue(`${carriersLength} ${carriersSelected}`)
        : setValue(`${carriersLength} ${carrierSelected}`);
    } else {
      setValue(selectCarrier);
    }
  }, [carriers, isArabic]);

  const handleCarriersModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        style={{
          width: "65%",
        }}
        onClick={handleCarriersModalOpen}
      >
        <TextField
          type="text"
          value={value}
          sx={{
            backgroundColor: "#1F3A51",
            height: "30px",
            width: "100%",

            borderRadius: "5px",
            "& .MuiOutlinedInput-notchedOutline": {
              //This class target the border of the input text
              border: "none",
            },
            "& .MuiOutlinedInput-input": {
              //This class targets the text inside the input.
              padding: "5px 8px",
              color: { color },
            },

            "& input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button": {
              appearance: "none",
              margin: 0,
              "&:hover": {
                background: "transparent",
              },
            },
            "& input[type=number]": {
              appearance: "textfield",
            },
            // Hide increment and decrement icons
            "& .MuiIconButton-root": {
              display: "none",
            },
            // Specific styling for Firefox
            "@-moz-document url-prefix()": {
              "& input[type=number]": {
                mozAppearance: "textfield",
              },
            },
          }}
          inputProps={{ readOnly: true }}
        />
      </div>
      <CarriersModal open={open} close={handleModalClose} carriers={carriers} setCarriers={setCarriers} />
    </>
  );
};

export default CarriersInput;
