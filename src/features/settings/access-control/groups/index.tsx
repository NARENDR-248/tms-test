import theme from "@/utils/theme";
import React, { useState, useEffect, useRef, createContext, useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Paper, Typography } from "@mui/material";
import UserGroupTableStyles from "./styled";
import { useTranslation } from "react-i18next";
import UserGroupActions from "./components/userGroupActionsDropdown";
import Header from "./components/header";
import { useRouter } from "next/navigation";
import { useImmer } from "use-immer";
import TablePagination from "@/components/tablePagination";

// Importing API Hooks
import {
  getUserGroupsAPI,
  getSearchedUserGroupsAPI,
  updateUserGroupsByPatchAPI,
} from "@/apis/settings/access-control/userGroupsAPIs";

// Custom Debound Hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Context
export const RefetchContext = createContext<any>(null);

const UserGroups = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userGroupsData, setUserGroupsData] = useState<any>([]);
  const [page, setPage] = React.useState(1);
  const [take] = React.useState(10);
  const [count, setCount] = React.useState(10);
  const [refetch, setRefetch] = React.useState(false);
  const initialRender = useRef(true);
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 300ms delay

  const onPageChange = (__: any, event: any) => {
    setPage(event);
  };

  const { t } = useTranslation();
  const { push } = useRouter();

  // Callback to be used in search input to set search terms on input change event
  const handleSearchUserGroups = (searchParams: string) => {
    setSearchTerm(searchParams);
  };

  const getUserGroups = async () => {
    // Here we will hit api for search query param to backend search
    try {
      const response = await getUserGroupsAPI(page, take);
      setUserGroupsData(response.data);
      setCount(response.meta.pageCount);
    } catch (err) {
      console.log(err);
    }
  };

  // Function to hit API for getting search data
  const getUserGroupsBySearch = async (debouncedSearchTerm: string) => {
    // Here we will hit api for search query param to backend search
    try {
      const response = await getSearchedUserGroupsAPI(page, take, debouncedSearchTerm);
      setUserGroupsData(response.data);
      setCount(response.meta.pageCount);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleUserGroupActiveState = async (id, toggleTo) => {
    try {
      await updateUserGroupsByPatchAPI(id, {
        isActive: toggleTo,
      });
      setRefetch(true);
    } catch (err) {
      console.log(err);
    }
  };

  // onMount
  useEffect(() => {
    getUserGroups();
  }, []);

  // On refetch Update
  useEffect(() => {
    if (refetch) {
      getUserGroups();
      setRefetch(false);
    }
  }, [refetch]);

  // Setting Pagination Count on data
  // On updated of page, and search term using debounce to get queried Results
  useEffect(() => {
    if (!initialRender.current) {
      // Perform your API search using debouncedSearchTerm here
      getUserGroupsBySearch(debouncedSearchTerm);
    } else {
      // Set the initial render false after the compoenent rendered once
      initialRender.current = false;
    }
  }, [debouncedSearchTerm, page]);

  return (
    <>
      <RefetchContext.Provider value={{ refetch: () => setRefetch(true) }}>
        <Header onSearch={handleSearchUserGroups} />
        {/* <Button
        onClick={() => {
          modifyState();
        }}
      >
        Update State
      </Button> */}
        <TableContainer
          id="#table"
          component={Paper}
          sx={{
            backgroundColor: theme.palette.primary.main,
            boxShadow: "none",
          }}
        >
          <Table
            sx={{
              overflowX: userGroupsData.length ? "scroll" : undefined,
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <UserGroupTableStyles.Header role="first-header" align="left">
                  {t("um.name")}
                </UserGroupTableStyles.Header>
                <UserGroupTableStyles.Header align="left">{t("um.description")}</UserGroupTableStyles.Header>
                <UserGroupTableStyles.Header align="left">{t("um.no-of-members")}</UserGroupTableStyles.Header>
                <UserGroupTableStyles.Header align="center">{t("um.status")}</UserGroupTableStyles.Header>
                <UserGroupTableStyles.Header align="center"></UserGroupTableStyles.Header>
              </TableRow>
            </TableHead>
            <TableBody>
              {userGroupsData.map((userGroup: any, id: number) => {
                return (
                  <TableRow key={id}>
                    <UserGroupTableStyles.Cell align="left" sx={{ opacity: 1 }}>
                      <Typography
                        sx={{
                          textDecoration: "underline",
                          cursor: "pointer",
                          color: "white",
                          fontSize: "1em",
                        }}
                        onClick={() => {
                          push(`/settings/access-control/user-groups/${userGroup.id}`);
                        }}
                      >
                        {userGroup.name}
                      </Typography>
                    </UserGroupTableStyles.Cell>
                    <UserGroupTableStyles.Cell align="left">{userGroup.description}</UserGroupTableStyles.Cell>
                    <UserGroupTableStyles.Cell align="left">{userGroup.memberCount}</UserGroupTableStyles.Cell>
                    <UserGroupTableStyles.Cell align="center" sx={{ opacity: 1 }}>
                      {/* <UserGroupTableStyles.AntSwitch /> */}
                      <UserGroupTableStyles.CustomSwitch
                        size="small"
                        defaultChecked={userGroup.isActive}
                        onChange={() => toggleUserGroupActiveState(userGroup.id, !userGroup.isActive)}
                      />
                    </UserGroupTableStyles.Cell>
                    <UserGroupTableStyles.Cell align="right">
                      <UserGroupActions userGroupId={userGroup.id} />
                    </UserGroupTableStyles.Cell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination count={count} page={page} handlePageChange={onPageChange} />
      </RefetchContext.Provider>
    </>
  );
};

export default UserGroups;
