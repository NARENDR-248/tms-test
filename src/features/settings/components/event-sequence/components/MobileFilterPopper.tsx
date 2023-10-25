import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box, OutlinedInput, Chip, MenuItem } from "@mui/material";

// Importing Hooks
import { getAllCarriers } from "@/apis/settings/config-setting/useCarriers";

// Importing from custom zustand store
import { useMobileFilterPopper } from "../store";

// Importing Icons & Images
import CrossIcon from "../assets/icons/cross.svg";

// Styled Components
import { Components } from "../styled-components/sc-mfp";

function MobileFilterPopper({
  applyGroupFilterOnChart,
  closeFilterPopper,
}: {
  applyGroupFilterOnChart: any;
  closeFilterPopper: Function;
}) {
  const {
    carriers,
    setCarriers,
    aircraftType,
    setAircraftType,
    timeOfDay,
    setTimeOfDay,
  } = useMobileFilterPopper();
  const { t, i18n } = useTranslation();
  const [searchCarriers, setSearchCarriers] = useState<any>([]);
  const [appliedFilter, setAppliedFilter] = useState({
    carrier: [...carriers],
    aircraftType: [...aircraftType],
    timeOfDay: [...timeOfDay],
  });
  const isArabic = i18n.language.startsWith("ar_AR");

  const handleCarrierChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setCarriers(typeof value === "string" ? value.split(",") : value);
    setAppliedFilter((prevFilters) => {
      return {
        ...prevFilters,
        carrier: typeof value === "string" ? value.split(",") : value,
      };
    });
  };
  const handleAircraftChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setAircraftType(typeof value === "string" ? value.split(",") : value);
    setAppliedFilter((prevFilters) => {
      return {
        ...prevFilters,
        aircraftType: typeof value === "string" ? value.split(",") : value,
      };
    });
  };
  const handleTimeChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setTimeOfDay(typeof value === "string" ? value.split(",") : value);
    setAppliedFilter((prevFilters) => {
      return {
        ...prevFilters,
        timeOfDay: typeof value === "string" ? value.split(",") : value,
      };
    });
  };
  const closeAndApply = () => {
    applyGroupFilterOnChart(appliedFilter);
    closeFilterPopper();
  };
  const clearFilters = () => {
    // Local Clears
    setAppliedFilter({
      carrier: [],
      aircraftType: [],
      timeOfDay: [],
    });

    // Zustand Clear
    setCarriers([]);
    setAircraftType([]);
    setTimeOfDay([]);
  };
  const getCarriers = async () => {
    const carriers = await getAllCarriers();
    setSearchCarriers(carriers);
  };
  useEffect(() => {
    getCarriers();
  }, [i18n.language]);
  return (
    <Components.Container>
      <Components.FilterWrapper>
        <Components.FilterHeading>
          <Components.FilterHeadingText>
            {t("ess.filter-and-search")}
          </Components.FilterHeadingText>
          <Components.FilterCross
            src={CrossIcon}
            alt="#"
            onClick={() => closeFilterPopper()}
          />
        </Components.FilterHeading>
        <Components.FormControlWrapper>
          <Components.FormControl>
            <Components.FormInputLabel id="demo-multiple-chip-label">
              {t("ess.carrier")}
            </Components.FormInputLabel>
            <Components.FormSelectChipDropdown
              MenuProps={{
                PaperProps: {
                  style: { background: "#ffffff" },
                },
              }}
              multiple
              value={carriers}
              onChange={handleCarrierChange}
              input={<OutlinedInput id="select-multiple-chip" label={t("ess.carrier")} />}
              renderValue={(selected: any) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {searchCarriers.map((item) => {
                return (
                  <MenuItem
                    key={item.id}
                    value={
                      !isArabic ? item.carrier_name_en : item.carrier_name_ar
                    }
                  >
                    {!isArabic ? item.carrier_name_en : item.carrier_name_ar}
                  </MenuItem>
                );
              })}
            </Components.FormSelectChipDropdown>
          </Components.FormControl>
          <Components.FormControl>
            <Components.FormInputLabel id="demo-multiple-chip-label">
              {t("ess.aircraft-type")}
            </Components.FormInputLabel>
            <Components.FormSelectChipDropdown
              MenuProps={{
                PaperProps: {
                  style: { background: "#ffffff" },
                },
              }}
              multiple
              value={aircraftType}
              onChange={handleAircraftChange}
              input={<OutlinedInput id="select-multiple-chip" label={t("ess.aircraft-type")} />}
              renderValue={(selected: any) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              <MenuItem value={t("ess.narrow-body")}>
                {t("ess.narrow-body")}
              </MenuItem>
              <MenuItem value={t("ess.wide-body")}>
                {t("ess.wide-body")}
              </MenuItem>
            </Components.FormSelectChipDropdown>
          </Components.FormControl>
          <Components.FormControl>
            <Components.FormInputLabel id="demo-multiple-chip-label">
              {t("ess.time-of-day")}
            </Components.FormInputLabel>
            <Components.FormSelectChipDropdown
              MenuProps={{
                PaperProps: {
                  style: { background: "#ffffff" },
                },
              }}
              multiple
              value={timeOfDay}
              onChange={handleTimeChange}
              input={<OutlinedInput id="select-multiple-chip" label= {t("ess.time-of-day")} />}
              renderValue={(selected: any) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              <MenuItem value={t("ess.day")}>{t("ess.day")}</MenuItem>
              <MenuItem value={t("ess.night")}>{t("ess.night")}</MenuItem>
            </Components.FormSelectChipDropdown>
          </Components.FormControl>
        </Components.FormControlWrapper>
        <Components.FilterCancelBtn variant="text" onClick={clearFilters}>
          {t("ess.cancel")}
        </Components.FilterCancelBtn>
        <Components.FilterApplyBtn variant="contained" onClick={closeAndApply}>
          {t("ess.apply")}
        </Components.FilterApplyBtn>
      </Components.FilterWrapper>
    </Components.Container>
  );
}

export default MobileFilterPopper;
