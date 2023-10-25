"use client";

import SettingsMenu from "@/features/settings/components/settingsMenu";
import SettingsStyles from "@/features/settings/styles";
import React from "react";
import { useTranslation } from "react-i18next";

const SettingsLayout = ({ children }: any) => {
  const { t } = useTranslation();

  return (
    <SettingsStyles.RootContainer>
      <SettingsStyles.Container>
        <SettingsStyles.Text>{t("setting")}</SettingsStyles.Text>
        <SettingsMenu />
      </SettingsStyles.Container>
      <SettingsStyles.TabsContainer>{children}</SettingsStyles.TabsContainer>
    </SettingsStyles.RootContainer>
  );
};

export default SettingsLayout;
