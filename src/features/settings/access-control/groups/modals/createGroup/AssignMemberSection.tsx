import React, { useState, useEffect } from "react";
import { ListItem, ListItemAvatar, Avatar, ListItemText, Divider, InputAdornment } from "@mui/material";
import SearchIcon from "@/__assets/icons/SearchIcon";

// Importing Styled Components
import CreateGroupModalSC from "./styles";
import { Components } from "../../components/protected-feature-group/styled";

// Importing Images
import AvatarPIC from "../../images/avatar.png";

// Importing Dummy Json
import { usersData } from "./dummy-users";
import { groupsData } from "./dummy-groups";

function AssignMemberSection({ onUpdateAssignMembersOrGroups, assignedMembersOrGroups }): JSX.Element {
  const [memberHover, setMemberHover] = useState(null);
  const [groupHover, setGroupHover] = useState(null);
  const [assignedMemberHover, setAssignedMemberHover] = useState(null);
  const [assignedGroupHover, setAssignedGroupHover] = useState(null);
  const [unfilteredData, setUnfilteredData] = useState<any>({
    unAssignedUsers: [...assignedMembersOrGroups.unAssignedUsers],
    unAssignedGroups: [...assignedMembersOrGroups.unAssignedGroups],
    assignedUsers: [...assignedMembersOrGroups.assignedUsers],
    assignedGroups: [...assignedMembersOrGroups.assignedGroups],
  });
  const [filteredData, setFilteredData] = useState<any>({
    unAssignedUsers: [...assignedMembersOrGroups.unAssignedUsers],
    unAssignedGroups: [...assignedMembersOrGroups.unAssignedGroups],
    assignedUsers: [...assignedMembersOrGroups.assignedUsers],
    assignedGroups: [...assignedMembersOrGroups.assignedGroups],
  });

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }
  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  const addMember = (user) => {
    // Adding Member to Assigned Users Array
    setUnfilteredData((prevData) => {
      return {
        ...prevData,
        assignedUsers: [...prevData.assignedUsers, user],
      };
    });
    setFilteredData((prevData) => {
      return {
        ...prevData,
        assignedUsers: [...prevData.assignedUsers, user],
      };
    });

    // Removing User from Unassigned Members Array
    const prevFilteredUnassignedUsers = filteredData.unAssignedUsers;
    const foundIndex = filteredData.unAssignedUsers.findIndex((userItem) => userItem.id === user.id);
    prevFilteredUnassignedUsers.splice(foundIndex, 1);
    setFilteredData((prevData) => {
      return {
        ...prevData,
        unAssignedUsers: [...prevFilteredUnassignedUsers],
      };
    });
  };

  const addGroup = (group) => {
    // Adding Group to Assigned Groups Array
    // setAssignedGroups((prevArr) => [...prevArr, group]);
    // setFilteredAssignedGroups((prevArr) => [...prevArr, group]);
    setUnfilteredData((prevData) => {
      return {
        ...prevData,
        assignedGroups: [...prevData.assignedGroups, group],
      };
    });
    setFilteredData((prevData) => {
      return {
        ...prevData,
        assignedGroups: [...prevData.assignedGroups, group],
      };
    });

    // Removing Group from Unassigned Groups Array
    const prevFilteredUnassignedGroups = filteredData.unAssignedGroups;
    const foundIndex = filteredData.unAssignedGroups.findIndex((groupItem) => groupItem.id === group.id);
    prevFilteredUnassignedGroups.splice(foundIndex, 1);
    setFilteredData((prevData) => {
      return {
        ...prevData,
        unAssignedGroups: [...prevFilteredUnassignedGroups],
      };
    });
  };

  const removeAssignedMember = (user) => {
    // Adding Member to Unassigned Users Array
    setFilteredData((prevData) => {
      return {
        ...prevData,
        unAssignedUsers: [...prevData.unAssignedUsers, user],
      };
    });

    // Removing User from Assigned Members Array
    const prevFilteredAssignedUsers = filteredData.assignedUsers;
    const foundIndex = filteredData.assignedUsers.findIndex((userItem) => userItem.id === user.id);
    prevFilteredAssignedUsers.splice(foundIndex, 1);
    setFilteredData((prevData) => {
      return {
        ...prevData,
        assignedUsers: [...prevFilteredAssignedUsers],
      };
    });
  };

  const removeAssignedGroup = (group) => {
    // Adding Group to Unassigned Groups Array
    setFilteredData((prevData) => {
      return {
        ...prevData,
        unAssignedGroups: [...prevData.unAssignedGroups, group],
      };
    });

    // Removing User from Assigned Groups Array
    const prevFilteredAssignedGroups = filteredData.assignedGroups;
    const foundIndex = filteredData.assignedGroups.findIndex((groupItem) => groupItem.id === group.id);
    prevFilteredAssignedGroups.splice(foundIndex, 1);
    setFilteredData((prevData) => {
      return {
        ...prevData,
        assignedGroups: [...prevFilteredAssignedGroups],
      };
    });
  };

  const searchUnassignedMembersOrGroups = (e) => {
    const filteredMembers = unfilteredData.unAssignedUsers.filter(
      (item) =>
        item.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.lastName.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    const filteredGroups = unfilteredData.unAssignedGroups.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase()),
    );

    setFilteredData((prevData) => {
      return {
        ...prevData,
        unAssignedUsers: filteredMembers,
        unAssignedGroups: filteredGroups,
      };
    });
  };

  const searchAssignedMembersOrGroups = (e) => {
    const filteredAssignedMembers = unfilteredData.assignedUsers.filter(
      (item) =>
        item.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.lastName.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    const filteredAssignedGroups = unfilteredData.assignedGroups.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setFilteredData((prevData) => {
      return {
        ...prevData,
        assignedUsers: filteredAssignedMembers,
        assignedGroups: filteredAssignedGroups,
      };
    });
  };

  // const getUsersAndGroups = () => {
  //   // setUsers(usersData);
  //   // setFilteredUnassignedUsers(usersData);
  //   setUnfilteredData((prevData) => {
  //     return {
  //       ...prevData,
  //       unAssignedUsers: usersData,
  //       unAssignedGroups: groupsData,
  //     };
  //   });
  //   setFilteredData((prevData) => {
  //     return {
  //       ...prevData,
  //       unAssignedUsers: usersData,
  //       unAssignedGroups: groupsData,
  //     };
  //   });
  // };

  const propagateAssignedUsersAndGroups = () => {
    const unmutatedFilteredData = filteredData;
    const toDBAssignedUsersIds = [...unmutatedFilteredData.assignedUsers.map((item) => item.id)];
    const toDBAssignedGroupsIds = [...unmutatedFilteredData.assignedGroups.map((item) => item.id)];
    onUpdateAssignMembersOrGroups(toDBAssignedUsersIds, toDBAssignedGroupsIds, filteredData);
  };
  // //  On Mount
  // useEffect(() => {
  //   getUsersAndGroups();
  // }, []);

  useEffect(() => {
    // When assigned members or groups changes are tracker
    // We will update prop in root component
    propagateAssignedUsersAndGroups();
  }, [filteredData]);

  return (
    <>
      <CreateGroupModalSC.Layout.Column>
        <CreateGroupModalSC.AssignMembers.Title>Unassigned members</CreateGroupModalSC.AssignMembers.Title>
        <CreateGroupModalSC.AssignMembers.Container>
          <CreateGroupModalSC.AssignMembers.Search
            className="custom-textfield custom-placeholder"
            placeholder="Search users or groups"
            autoComplete="off"
            onChange={searchUnassignedMembersOrGroups}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color={"rgba(255, 255, 255, 0.5)"} />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <CreateGroupModalSC.AssignMembers.ListUsers sx={{ width: "100%", maxWidth: "100%" }}>
            {filteredData.unAssignedUsers.map((_user, index) => {
              return (
                <CreateGroupModalSC.AssignMembers.ListItem
                  key={_user.id}
                  onMouseEnter={() => setMemberHover(_user.id)}
                  onMouseLeave={() => setMemberHover(null)}
                  alignItems="flex-start"
                  secondaryAction={
                    memberHover === _user.id ? (
                      <CreateGroupModalSC.AssignMembers.IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => addMember(_user)}
                      >
                        <CreateGroupModalSC.AssignMembers.AddIcon sx={{ color: "#3BA5E1" }} />
                      </CreateGroupModalSC.AssignMembers.IconButton>
                    ) : (
                      ""
                    )
                  }
                >
                  <CreateGroupModalSC.AssignMembers.ListItemAvatar>
                    <Avatar alt="#" src={".."} key={_user.id} />
                  </CreateGroupModalSC.AssignMembers.ListItemAvatar>
                  <CreateGroupModalSC.AssignMembers.ListItemText primary={`${_user.firstName} ${_user.lastName}`} />
                </CreateGroupModalSC.AssignMembers.ListItem>
              );
            })}
          </CreateGroupModalSC.AssignMembers.ListUsers>
          {filteredData.unAssignedUsers.length > 0 && filteredData.unAssignedGroups.length > 0 && (
            <Divider sx={{ border: "0.58px solid rgba(255,255,255, 0.1)", marginTop: "20px" }} />
          )}
          <CreateGroupModalSC.AssignMembers.ListGroups>
            {filteredData.unAssignedGroups.map((_group, index) => {
              return (
                <CreateGroupModalSC.AssignMembers.ListItem
                  alignItems="flex-start"
                  key={_group.id}
                  onMouseEnter={() => setGroupHover(_group.id)}
                  onMouseLeave={() => setGroupHover(null)}
                  secondaryAction={
                    groupHover === _group.id ? (
                      <CreateGroupModalSC.AssignMembers.IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => addGroup(_group)}
                      >
                        <CreateGroupModalSC.AssignMembers.AddIcon sx={{ color: "#3BA5E1" }} />
                      </CreateGroupModalSC.AssignMembers.IconButton>
                    ) : (
                      ""
                    )
                  }
                >
                  <CreateGroupModalSC.AssignMembers.ListItemAvatar>
                    <Avatar alt="#" src="../../images/avatar.png" {...stringAvatar("Manager Team")} />
                  </CreateGroupModalSC.AssignMembers.ListItemAvatar>
                  <CreateGroupModalSC.AssignMembers.GroupName
                    primary={_group.name}
                    secondary={
                      <React.Fragment>
                        <CreateGroupModalSC.AssignMembers.GroupDetail
                          sx={{ display: "inline" }}
                          variant="body2"
                          color="text.primary"
                        >
                          {_group.memberCount} Members
                        </CreateGroupModalSC.AssignMembers.GroupDetail>
                      </React.Fragment>
                    }
                  />
                </CreateGroupModalSC.AssignMembers.ListItem>
              );
            })}
          </CreateGroupModalSC.AssignMembers.ListGroups>
        </CreateGroupModalSC.AssignMembers.Container>
      </CreateGroupModalSC.Layout.Column>
      <CreateGroupModalSC.Layout.Column>
        <CreateGroupModalSC.AssignMembers.Title>Assigned members</CreateGroupModalSC.AssignMembers.Title>

        <CreateGroupModalSC.AssignMembers.Container>
          {/* {filteredAssignedUsers.length > 0 ||
            (filteredAssignedGroups.length > 0 && ( */}
          <>
            <CreateGroupModalSC.AssignMembers.Search
              className="custom-textfield custom-placeholder"
              placeholder="Search users or groups"
              autoComplete="off"
              onChange={searchAssignedMembersOrGroups}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color={"rgba(255, 255, 255, 0.5)"} />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <CreateGroupModalSC.AssignMembers.ListUsers sx={{ width: "100%", maxWidth: "100%" }}>
              {filteredData.assignedUsers.map((_user, index) => {
                return (
                  <CreateGroupModalSC.AssignMembers.ListItem
                    alignItems="flex-start"
                    key={_user.id}
                    onMouseEnter={() => setAssignedMemberHover(_user.id)}
                    onMouseLeave={() => setAssignedMemberHover(null)}
                    secondaryAction={
                      assignedMemberHover === _user.id ? (
                        <CreateGroupModalSC.AssignMembers.IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => removeAssignedMember(_user)}
                        >
                          <CreateGroupModalSC.AssignMembers.DeleteIcon sx={{ color: "white" }} />
                        </CreateGroupModalSC.AssignMembers.IconButton>
                      ) : (
                        ""
                      )
                    }
                  >
                    <CreateGroupModalSC.AssignMembers.ListItemAvatar>
                      <Avatar alt="#" src="../../images/avatar.png" />
                    </CreateGroupModalSC.AssignMembers.ListItemAvatar>
                    <CreateGroupModalSC.AssignMembers.ListItemText primary={`${_user.firstName} ${_user.lastName}`} />
                  </CreateGroupModalSC.AssignMembers.ListItem>
                );
              })}
            </CreateGroupModalSC.AssignMembers.ListUsers>
            {filteredData.assignedUsers.length > 0 && filteredData.assignedGroups.length > 0 && (
              <Divider sx={{ border: "0.58px solid rgba(255,255,255, 0.1)", marginTop: "20px" }} />
            )}
            <CreateGroupModalSC.AssignMembers.ListGroups>
              {filteredData.assignedGroups.map((_group, index) => {
                return (
                  <CreateGroupModalSC.AssignMembers.ListItem
                    alignItems="flex-start"
                    key={_group.id}
                    onMouseEnter={() => setAssignedGroupHover(_group.id)}
                    onMouseLeave={() => setAssignedGroupHover(null)}
                    secondaryAction={
                      assignedGroupHover === _group.id ? (
                        <CreateGroupModalSC.AssignMembers.IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => removeAssignedGroup(_group)}
                        >
                          <CreateGroupModalSC.AssignMembers.DeleteIcon sx={{ color: "white" }} />
                        </CreateGroupModalSC.AssignMembers.IconButton>
                      ) : (
                        ""
                      )
                    }
                  >
                    <CreateGroupModalSC.AssignMembers.ListItemAvatar>
                      <Avatar alt="#" src="../../images/avatar.png" {...stringAvatar("Manager Team")} />
                    </CreateGroupModalSC.AssignMembers.ListItemAvatar>
                    <CreateGroupModalSC.AssignMembers.GroupName
                      primary={_group.name}
                      secondary={
                        <React.Fragment>
                          <CreateGroupModalSC.AssignMembers.GroupDetail
                            sx={{ display: "inline" }}
                            variant="body2"
                            color="text.primary"
                          >
                            {_group.memberCount} Members
                          </CreateGroupModalSC.AssignMembers.GroupDetail>
                        </React.Fragment>
                      }
                    />
                  </CreateGroupModalSC.AssignMembers.ListItem>
                );
              })}
            </CreateGroupModalSC.AssignMembers.ListGroups>
          </>
          {/* ))} */}
        </CreateGroupModalSC.AssignMembers.Container>
      </CreateGroupModalSC.Layout.Column>
    </>
  );
}

export default AssignMemberSection;
