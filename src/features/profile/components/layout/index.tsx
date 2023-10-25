"use client";

import ProfileStyles from "@/features/profile/components/layout/styles";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useTranslation } from "react-i18next";

const Layout = ({ children }: any) => {
  const pathname = usePathname();
  const { push } = useRouter();

  const { t } = useTranslation();

  return (
    <ProfileStyles.RootContainer>
      <ProfileStyles.Text>{t("up.profile-settings")}</ProfileStyles.Text>
      <ProfileStyles.Container>
        <ProfileStyles.SideNav.Container>
          <ProfileStyles.SideNav.Link
            onClick={() => {
              push("/profile/profile-details");
            }}
            reference={"details"}
            pathname={pathname}
          >
            {t("up.profile-details")}
          </ProfileStyles.SideNav.Link>
          <ProfileStyles.SideNav.Link
            onClick={() => {
              push("/profile/change-password");
            }}
            reference={"password"}
            pathname={pathname}
          >
            {t("up.change-password")}
          </ProfileStyles.SideNav.Link>
          <ProfileStyles.SideNav.Link onClick={() => {}} reference={"logout"} pathname={pathname}>
            {t("up.logout")}
          </ProfileStyles.SideNav.Link>
        </ProfileStyles.SideNav.Container>
        <ProfileStyles.Content>{children}</ProfileStyles.Content>
      </ProfileStyles.Container>
    </ProfileStyles.RootContainer>
  );
};

export { Layout };
