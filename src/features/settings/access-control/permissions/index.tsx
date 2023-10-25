import { useState, useEffect } from "react";
import PermissionCard from "./components/PermissionCard";
import PermissionsStyles from "./styled";

// Importing next/navigation hooks
import { useParams } from "next/navigation";

// Importing Custom API Hooks
import { getProtectedFeaturesAPI } from "@/apis/settings/access-control/userGroupsAPIs";

// Importing Protected Features Dummy Json
import { PFData } from "./dummy-pfs";
function Permissions(): JSX.Element {
  const params = useParams();
  const [protectedFeature, setProtectedFeature] = useState<any>({});
  // const protectedFeatureData = {
  //   id: 1,
  //   name: "Alerts",
  //   permissions: [
  //     {
  //       id: 1,
  //       name: "Create",
  //       allowed: true,
  //       description: "Permission to create new events.",
  //     },
  //     {
  //       id: 2,
  //       name: "Edit",
  //       allowed: false,
  //       description: "Permission to edit an existing event.",
  //     },
  //     {
  //       id: 3,
  //       name: "Access",
  //       allowed: true,
  //       description: "Permission to access an event page.",
  //     },
  //   ],
  // };

  const getProtectedFeature = async () => {
    let data: any[] = [];
    try {
      const response = await getProtectedFeaturesAPI(1, 30);
      data = response.data;
    } catch (err) {
      console.log(err);
    }
    setProtectedFeature(() => {
      let foundPF = data.filter((item) => item.id === params.id);
      if (foundPF.length > 0) {
        return foundPF[0];
      }
    });
  };
  // On Mount
  useEffect(() => {
    getProtectedFeature();
  }, []);
  return (
    <PermissionsStyles.Container>
      <PermissionsStyles.Title>{protectedFeature.action}</PermissionsStyles.Title>
      <PermissionsStyles.CardsContainer>
        {protectedFeature.permissions?.map((data) => (
          <PermissionCard key={data.id} name={data.action} description={data.description} />
        ))}
      </PermissionsStyles.CardsContainer>
    </PermissionsStyles.Container>
  );
}

export default Permissions;
