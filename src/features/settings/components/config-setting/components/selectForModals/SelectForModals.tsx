import * as React from "react";
import SelectStyles from "./styles";
import theme from "@/utils/theme";
import { useTranslation } from "react-i18next";

export const SelectForModals = ({ data, value, setValue, dropdownType }: any) => {
  const { t } = useTranslation();

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <div
      style={{
        width: "65%",
      }}
    >
      <SelectStyles.StyledSelect
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        MenuProps={{
          MenuListProps: {
            sx: {
              background: theme.palette.primary.light,
              maxHeight: "15em",
              overflow: "hidden scroll",
              "&::-webkit-scrollbar": {
                width: "0",
                height: "0",
              },
            },
          },
        }}
      >
        {dropdownType === "linkedEvent" && (
          <SelectStyles.StyledMenuItem key="optional" value="optional">
            {t("optional")}
          </SelectStyles.StyledMenuItem>
        )}
        {dropdownType === "linkedEvent" && <hr />}
        {data?.map((item: any) => {
          return (
            <SelectStyles.StyledMenuItem key={item} value={item}>
              {item}
            </SelectStyles.StyledMenuItem>
          );
        })}
      </SelectStyles.StyledSelect>
    </div>
  );
};
