import { FC, useState, useEffect, useLayoutEffect, Suspense, useContext } from "react";
import CreateGroupModalSC from "./styles";
import CloseIcon from "@mui/icons-material/Close";

// Importing Context
import { RefetchContext } from "../../index";

// Importing Custom Components
import DetailsPermissionsSection from "./DetailsPermissionsSection";
import AssignMemberSection from "./AssignMemberSection";

// Importing  API
import {
  getProtectedFeaturesAPI,
  getUsersAPI,
  getUserGroupsAPI,
  saveUserGroupsAPI,
} from "@/apis/settings/access-control/userGroupsAPIs";

interface Props {
  showCreateGroupModal: boolean;
  setShowCreateGroupModal: any;
}

const CreateGroupModal: FC<Props> = (props) => {
  const { refetch } = useContext(RefetchContext);
  // States
  const [section, setSection] = useState(1);
  const { showCreateGroupModal, setShowCreateGroupModal } = props;
  const { Container, SubContainer, TopBar, Stepper, BottomBar } = CreateGroupModalSC;
  // Children Component States mantaining here if parent, so that value persists between Accordian Switches
  const [groupDetail, setGroupDetail] = useState({
    groupName: "",
    groupDesc: "",
  });
  const [assignedMembersOrGroups, setAssignedMembersOrGroups] = useState<any>({
    unAssignedUsers: [],
    unAssignedGroups: [],
    assignedUsers: [],
    assignedGroups: [],
  });
  // Object that we will send to api, having only populated Ids
  const [userGroupData, setUserGroupData] = useState<any>({
    isActive: true,
  });
  const [APIResponses, setAPIResponses] = useState<any>({
    protectedFeatures: [],
    users: [],
    userGroups: [],
  });
  const [loaders, setLoaders] = useState({
    saveUserGroupLoader: false,
  });

  const saveGroup = async () => {
    setLoaders((prevLoaders) => {
      return {
        ...prevLoaders,
        saveUserGroupLoader: true,
      };
    });
    try {
      await saveUserGroupsAPI(userGroupData);
      setShowCreateGroupModal(false);
      refetch();
    } catch (err) {
      console.log(err);
    }
    setLoaders((prevLoaders) => {
      return {
        ...prevLoaders,
        saveUserGroupLoader: false,
      };
    });
  };
  const commitGroupDetail = (name, value) => {
    setGroupDetail((prevDetail) => {
      return {
        ...prevDetail,
        [name]: value,
      };
    });
  };
  const commitPermissionDetails = (permissionGroups) => {
    // setGroupDetail(groupDetail);
    setUserGroupData((prevData) => {
      return {
        ...prevData,
        name: groupDetail.groupName,
        description: groupDetail.groupDesc,
        permissions: permissionGroups,
      };
    });
  };
  const commitAssignMemberGroupsDetails = (assignedUserIds, assignedGroupIds, filteredData) => {
    // Setting here filtered data for preserving values between next,back
    setAssignedMembersOrGroups(filteredData);
    setUserGroupData((prevData) => {
      return {
        ...prevData,
        users: assignedUserIds,
        // groups: assignedGroupIds,
      };
    });
  };

  const getProtectedFeatures = async () => {
    try {
      const response = await getProtectedFeaturesAPI(1, 30);
      setAPIResponses((prevResponses) => {
        return {
          ...prevResponses,
          protectedFeatures: response.data,
        };
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getUsers = async () => {
    try {
      const response = await getUsersAPI(1, 30);
      setAssignedMembersOrGroups((prevData) => {
        return {
          ...prevData,
          unAssignedUsers: response.data,
        };
      });
      setAPIResponses((prevResponses) => {
        return {
          ...prevResponses,
          users: response.data,
        };
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getUserGroups = async () => {
    try {
      const response = await getUserGroupsAPI(1, 30);
      setAssignedMembersOrGroups((prevData) => {
        return {
          ...prevData,
          unAssignedGroups: response.data,
        };
      });
      setAPIResponses((prevResponses) => {
        return {
          ...prevResponses,
          userGroups: response.data,
        };
      });
    } catch (err) {
      console.log(err);
    }
  };

  //OnMount
  useEffect(() => {
    getProtectedFeatures();
    getUsers();
    // getUserGroups();
  }, []);

  return (
    <Container
      open={showCreateGroupModal}
      onClose={() => setShowCreateGroupModal(false)}
      aria-labelledby="Create User Group"
      aria-describedby="Create User Group"
    >
      <CreateGroupModalSC.SubContainer>
        <TopBar.Container>
          <TopBar.Title>Create User Group</TopBar.Title>
          <CloseIcon
            sx={{
              cursor: "pointer",
            }}
            onClick={() => {
              setShowCreateGroupModal(false);
            }}
          />
        </TopBar.Container>
        <Stepper.Wrapper>
          <Stepper.Container
            onClick={() => {
              setSection(1);
            }}
            sx={{
              opacity: section === 1 ? 1 : 0.4,
            }}
          >
            <Stepper.Circle.Container
              sx={{
                backgroundColor: "#3BA5E1",
              }}
            >
              <Stepper.Circle.Number>1</Stepper.Circle.Number>
            </Stepper.Circle.Container>
            <Stepper.Circle.Text>Details And Permissions</Stepper.Circle.Text>
          </Stepper.Container>
          <Stepper.Dashes.Container
            style={{
              opacity: 0.4,
            }}
          >
            <Stepper.Dashes.Dash>-</Stepper.Dashes.Dash>
            <Stepper.Dashes.Dash>-</Stepper.Dashes.Dash>
            <Stepper.Dashes.Dash>-</Stepper.Dashes.Dash>
            <Stepper.Dashes.Dash>-</Stepper.Dashes.Dash>
          </Stepper.Dashes.Container>
          <Stepper.Container
            onClick={() => {
              setSection(2);
            }}
            style={{
              opacity: section === 2 ? 1 : 0.4,
            }}
          >
            <Stepper.Circle.Container
              sx={{
                backgroundColor: "#3BA5E1",
              }}
            >
              <Stepper.Circle.Number>2</Stepper.Circle.Number>
            </Stepper.Circle.Container>
            <Stepper.Circle.Text>Assign Members</Stepper.Circle.Text>
          </Stepper.Container>
        </Stepper.Wrapper>
        <CreateGroupModalSC.Line sx={{ border: "0.58px solid rgba(10, 19, 19, 1)" }} />
        <CreateGroupModalSC.Layout.Container>
          {section === 1 && (
            <DetailsPermissionsSection
              onUpdateGroupDetail={commitGroupDetail}
              groupDetail={groupDetail}
              onUpdateProtectedFeatures={commitPermissionDetails}
              listOfProtectedFeatures={APIResponses.protectedFeatures}
            />
          )}

          {section === 2 && (
            <AssignMemberSection
              onUpdateAssignMembersOrGroups={commitAssignMemberGroupsDetails}
              assignedMembersOrGroups={assignedMembersOrGroups}
            />
          )}
        </CreateGroupModalSC.Layout.Container>

        <CreateGroupModalSC.Line sx={{ border: "0.58px solid rgba(10, 19, 19, 1)" }} />
        <BottomBar.Container>
          {section === 1 && (
            <>
              <BottomBar.Btn
                onClick={() => {
                  setShowCreateGroupModal(false);
                }}
              >
                Cancel
              </BottomBar.Btn>
              <BottomBar.Btn className="next" onClick={() => setSection(2)}>
                Next
              </BottomBar.Btn>
            </>
          )}
          {section === 2 && (
            <>
              <BottomBar.Btn onClick={() => setSection(1)}>Back</BottomBar.Btn>
              <BottomBar.LdBtn className="next" onClick={saveGroup} loading={loaders.saveUserGroupLoader}>
                Save
              </BottomBar.LdBtn>
            </>
          )}
        </BottomBar.Container>
      </CreateGroupModalSC.SubContainer>
    </Container>
  );
};

export default CreateGroupModal;
