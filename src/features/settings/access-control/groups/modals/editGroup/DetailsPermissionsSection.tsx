import React, { useEffect, useState } from "react";
import InputField from "../../../users/components/textInput/Input";

// Importing Styled Components
import CreateGroupModalSC from "./styles";
import { Components } from "../../components/protected-feature-group/styled";

// Importing Custom Components
import ProtectedFeatureGroup from "../../components/protected-feature-group/ProtectedFeatureGroup";

import { PFData } from "../dummy-pg";

function DetailsPermissionsSection({
  onUpdateGroupDetail,
  groupDetail,
  onUpdateProtectedFeatures,
  listOfProtectedFeatures,
}): JSX.Element {
  // const [groupDetail, setGroupDetail] = useState({
  //   groupName: groupDetailFromParentState.groupName,
  //   groupDesc: groupDetailFromParentState.groupDesc,
  // });
  const [protectedFeature, setProtectedFeature] = useState<any>(listOfProtectedFeatures);

  const setFeatureOnGroup = (e, groupId) => {
    e.stopPropagation();
    setProtectedFeature((prevGroupPermissions) => {
      const unmutatedGroupPermissions = prevGroupPermissions;
      unmutatedGroupPermissions.forEach((item) => {
        if (item.id === groupId) {
          // Becasuse we are not getting enabled from backend
          if (!item.hasOwnProperty("enabled")) {
            item.enabled = false;
          }
          const changeTo = item.enabled ? false : true;
          item.enabled = changeTo;

          item.permissions.forEach((item) => {
            item.enabled = changeTo;
          });
        }
      });

      return [...unmutatedGroupPermissions];
    });
  };

  const setPermission = (e, permissionId) => {
    e.stopPropagation();

    setProtectedFeature((prevGroupPermissions) => {
      const unmutatedGroupPermissions = prevGroupPermissions;
      unmutatedGroupPermissions.forEach((group) => {
        group.permissions.forEach((permission) => {
          if (permission.id === permissionId) {
            // Becasuse we are not getting enabled from backend
            if (!permission.hasOwnProperty("enabled")) {
              permission.enabled = false;
            }
            permission.enabled = !permission.enabled;
          }
        });

        group.permissions.every((permission) => permission.enabled) ? (group.enabled = true) : (group.enabled = false);
      });

      return [...unmutatedGroupPermissions];
    });
  };

  const handleGroupDetailChange = (e) => {
    // setGroupDetail((prevDetail) => {
    //   return {
    //     ...prevDetail,
    //     [e.target.name]: e.target.value,
    //   };
    // });
    onUpdateGroupDetail(e.target.name, e.target.value);
  };

  const propagateGroupDetailAndPermissions = () => {
    const unmutatedprotectedFeature = protectedFeature;
    // const toDb = [
    //   ...unmutatedprotectedFeature
    //     .filter((pf) => pf.enabled || pf.permissions.some((permission) => permission.enabled))
    //     .map((pf) => {
    //       return {
    //         id: pf.id,
    //         permissions: [
    //           ...pf.permissions.filter((permission) => permission.enabled).map((permission) => permission.id),
    //         ],
    //       }
    //     }),
    // ];
    const toDb = [
      ...unmutatedprotectedFeature
        .filter((pf) => pf.enabled || pf.permissions.some((permission) => permission.enabled))
        .map((pf) => {
          return [...pf.permissions.filter((permission) => permission.enabled).map((permission) => permission.id)];
        })
        .flat(),
    ];
    onUpdateProtectedFeatures(toDb);
  };

  useEffect(() => {
    // When group detail or permission changes are tracked
    // We will update the prop in root component
    propagateGroupDetailAndPermissions();
  }, [groupDetail, protectedFeature]);

  // Track OnUpdate listOfProtectedFeatures prop
  useEffect(() => {
    setProtectedFeature(listOfProtectedFeatures);
  }, [listOfProtectedFeatures]);

  return (
    <>
      <CreateGroupModalSC.Layout.Column>
        <CreateGroupModalSC.Input.Container>
          <CreateGroupModalSC.Input.Label>Group Name :</CreateGroupModalSC.Input.Label>
          {/* <InputField sx={{ textIndent: "10px" }} color={"#fff"} name="groupName" onChange={handleGroupDetailChange} /> */}
          <CreateGroupModalSC.Input.InputField
            variant="standard"
            name="groupName"
            onChange={handleGroupDetailChange}
            value={groupDetail.groupName}
          />
        </CreateGroupModalSC.Input.Container>

        <CreateGroupModalSC.Input.Container>
          <CreateGroupModalSC.Input.Label>Description :</CreateGroupModalSC.Input.Label>
          {/* <InputField isMultiLine rows={13} color={"#fff"} name="groupDesc" onChange={handleGroupDetailChange} /> */}
          <CreateGroupModalSC.Input.InputField
            variant="standard"
            multiline
            rows={13}
            name="groupDesc"
            onChange={handleGroupDetailChange}
            value={groupDetail.groupDesc}
          />
        </CreateGroupModalSC.Input.Container>
      </CreateGroupModalSC.Layout.Column>
      <CreateGroupModalSC.Layout.Column>
        <CreateGroupModalSC.Input.Container>
          <CreateGroupModalSC.Input.Label>Permissions :</CreateGroupModalSC.Input.Label>
          <Components.ProtectedFeatureGroup.Wrapper>
            {/* We will pass neccessary information to create permission groups */}
            <ProtectedFeatureGroup
              protectedFeatureGroup={protectedFeature}
              onGroupFeature={setFeatureOnGroup}
              onPermission={setPermission}
            />
          </Components.ProtectedFeatureGroup.Wrapper>
        </CreateGroupModalSC.Input.Container>
      </CreateGroupModalSC.Layout.Column>
    </>
  );
}

export default DetailsPermissionsSection;
