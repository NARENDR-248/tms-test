"use client";

import { usePathname, useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import AccessControl from "./sc";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

// Importing Custom API Hooks
import { getProtectedFeaturesAPI } from "@/apis/settings/access-control/userGroupsAPIs";
import { PFData } from "../../permissions/dummy-pfs";

const Layout = ({ children }) => {
  // const protectedFeatures = PFData;
  const [protectedFeatures, setProtectedFeatures] = useState<any>([]);

  const pathname = usePathname();
  const params = useParams();
  const { push } = useRouter();
  const { t } = useTranslation();

  const getProtectedFeatures = async () => {
    try {
      const response = await getProtectedFeaturesAPI(1, 30);
      setProtectedFeatures(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // Pushing to users by default
    if (pathname === "/settings/access-control") {
      push("/settings/access-control/users");
    }
  }, []);

  //to push the user directly to the first protected feature in the array.
  // let firstProtectedFeatureId;
  // useEffect(() => {
  //   if (protectedFeatures && protectedFeatures != undefined) {
  //     firstProtectedFeatureId = protectedFeatures[0]?.protectedFeatureId;
  //   }
  // }, [protectedFeatures]);

  // Getting the permissions list - onMount
  useEffect(() => {
    getProtectedFeatures();
  }, []);

  return (
    <AccessControl.Container>
      <AccessControl.SideNav.Container>
        <AccessControl.SideNav.Link
          onClick={() => {
            push("/settings/access-control/users");
          }}
          reference={"users"}
          pathname={pathname}
        >
          {t("um.manage-users")}
        </AccessControl.SideNav.Link>
        <AccessControl.SideNav.Link
          onClick={() => {
            push("/settings/access-control/user-groups");
          }}
          reference={"groups"}
          pathname={pathname}
        >
          {t("um.manage-user-groups")}
        </AccessControl.SideNav.Link>
        <AccessControl.SideNav.Link
          onClick={() => {
            push(`/settings/access-control/user-permissions/${protectedFeatures[0]?.id}`);
          }}
          reference={"permissions"}
          pathname={pathname}
        >
          {t("um.permissions")}
        </AccessControl.SideNav.Link>
      </AccessControl.SideNav.Container>

      {pathname.includes(`/settings/access-control/user-permissions`) ? (
        <AccessControl.SideNav.ExtendedContainer>
          {protectedFeatures.map((protectedFeature) => (
            <AccessControl.SideNav.ExtendedLink
              key={protectedFeature.id}
              onClick={() => {
                push(`/settings/access-control/user-permissions/${protectedFeature.id}`);
              }}
              reference={protectedFeature.name}
              pathname={pathname}
              sx={{
                backgroundColor: protectedFeature.id === params.id ? "#152E44" : undefined,
              }}
            >
              {protectedFeature.name}
            </AccessControl.SideNav.ExtendedLink>
          ))}
        </AccessControl.SideNav.ExtendedContainer>
      ) : null}

      <AccessControl.Content>{children}</AccessControl.Content>
    </AccessControl.Container>
  );
};

export default Layout;
