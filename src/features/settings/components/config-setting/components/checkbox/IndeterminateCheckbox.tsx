import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import CarriersSubInput from "../inputForModals/CarriersSubInput";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { CheckboxStyles } from "./styles";
import { getAllCarriers } from "@/apis/settings/config-setting/useCarriers";
import CarrierSkeletons from "./CarrierSkeletons";

export const IndeterminateCheckbox = ({ selectedCarriers, checkedCarriers, setCheckedCarriers }: any) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");
  const [dbCarriers, setDbCarriers] = useState<any>([]);
  const [checked, setChecked] = useState<any>([]);
  const [parentChecked, setParentChecked] = useState<any>(false);
  const [parentIndeterminate, setParentIndeterminate] = useState<any>(false);
  const [searchedCarrier, setSearchedCarrier] = useState<any>("");
  const [filteredCarriers, setFilteredCarriers] = useState<any>([]);

  const [isLoading, setIsLoading] = useState<any>(true);

  useEffect(() => {
    setChecked(selectedCarriers);
  }, [selectedCarriers]);

  const sortCarriersAlphabetically = (item) => {
    const sortedArray = item?.sort((a, b) => {
      if (isArabic) {
        if (a.carrier_name_ar < b.carrier_name_ar) {
          return -1;
        }
      } else if (a.carrier_name_en < b.carrier_name_en) {
        return -1;
      }
    });
    return sortedArray;
  };

  const handleSearch = (searchQuery: any) => {
    const lowercasedQuery = searchQuery?.toLowerCase();
    const filteredList = dbCarriers?.filter((carrier: any) => {
      const name_en = carrier?.carrier_name_en?.toLowerCase();

      return name_en?.includes(lowercasedQuery);
    });

    setFilteredCarriers(filteredList);
  };

  useEffect(() => {
    handleSearch(searchedCarrier);
  }, [searchedCarrier]);

  const getCarriersFromDB = async () => {
    const carr = await getAllCarriers();
    setDbCarriers(sortCarriersAlphabetically(carr));
    setFilteredCarriers(sortCarriersAlphabetically(carr));
    if (carr) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCarriersFromDB();
  }, []);

  const handleParentChecks = () => {
    const isAllChecked = checked.length === filteredCarriers.length;
    const isSomeChecked = checked.length > 0 && checked.length !== filteredCarriers.length;

    setParentChecked(filteredCarriers.length > 0 && isAllChecked);
    setParentIndeterminate(filteredCarriers.length > 0 && isSomeChecked);
  };

  const handleCheckboxChange = (airlineId) => (event) => {
    const newChecked = [...checked];
    if (event.target.checked) {
      if (newChecked.includes(airlineId)) {
      } else {
        newChecked.push(airlineId);
      }
    } else {
      let index = newChecked?.indexOf(airlineId);
      newChecked.splice(index, 1);
    }
    setChecked(newChecked);
    setCheckedCarriers(newChecked);
    handleParentChecks();
  };

  useEffect(() => {
    handleParentChecks();
  }, [handleCheckboxChange]);

  const handleParentCheckboxChange = (event: any) => {
    const newChecked = filteredCarriers.map((item) => item.id);

    if (event.target.checked) {
      setChecked(newChecked);
      setCheckedCarriers(newChecked);
    } else {
      setChecked([]);
      setCheckedCarriers([]);
    }
  };

  const groupedCarriers = filteredCarriers.reduce((groups, airline) => {
    const firstLetter = isArabic ? airline.carrier_name_ar[0].toUpperCase() : airline.carrier_name_en[0].toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(airline);
    return groups;
  }, {});

  const children: any = [];
  for (const letter in groupedCarriers) {
    children.push(
      <React.Fragment key={letter}>
        <h2 style={{ color: "#fff", fontWeight: 700 }}>{letter}</h2>
        {groupedCarriers[letter].map((airline, index) => (
          <FormControlLabel
            key={airline?.id}
            label={isArabic ? airline?.carrier_name_ar : airline?.carrier_name_en}
            sx={{
              width: "max-content",
              marginRight: "4em",
            }}
            control={
              <Checkbox
                size="small"
                sx={{
                  color: "#fff",
                  "&.Mui-checked, &.MuiCheckbox-indeterminate": {
                    color: "#06A7E0",
                  },
                }}
                checked={checked.includes(airline.id)}
                onChange={handleCheckboxChange(airline.id)}
              />
            }
          />
        ))}
      </React.Fragment>,
    );
  }

  return (
    <div style={{ height: "100%" }}>
      <CheckboxStyles.Search>
        <CarriersSubInput color="#fff" setSearchedCarrier={setSearchedCarrier} />
        <FormControlLabel
          label={t("select-all")}
          control={
            <Checkbox
              size="small"
              sx={{
                color: "#fff",
                "&.Mui-checked, &.MuiCheckbox-indeterminate": {
                  color: "#06A7E0",
                },
              }}
              checked={parentChecked}
              indeterminate={parentIndeterminate}
              onChange={handleParentCheckboxChange}
            />
          }
        />
      </CheckboxStyles.Search>
      <CheckboxStyles.Children>
        {isLoading && !children.length && <CarrierSkeletons />}
        {!isLoading && children.length && children}
      </CheckboxStyles.Children>
    </div>
  );
};
