import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Switch, FormControlLabel, createTheme, ThemeProvider, Button } from "@mui/material";
import { useQueryClient } from "react-query";

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  let queryClient = useQueryClient();

  const [isArabic, setIsArabic] = useState(false);

  // const isArabic = i18n.language.startsWith("ar_AR");

  useEffect(() => {
    setIsArabic(i18n.language.startsWith("ar_AR"));
  }, [i18n.language]);

  const handleChange = (event: any) => {
    // i18n.changeLanguage(isArabic ? "en_EN" : "ar_AR");
    // queryClient.invalidateQueries();

    const newLanguage = isArabic ? "en_EN" : "ar_AR";
    i18n.changeLanguage(newLanguage).then(() => {
      queryClient.invalidateQueries();
    });
  };

  return (
    <Button
      style={{
        color: "white",
        borderColor: "white",
      }}
      onClick={handleChange}
    >
      {!isArabic ? "عربي" : "English"}
    </Button>
  );
};
