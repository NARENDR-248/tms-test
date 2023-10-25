import { useQuery } from "react-query";
import tmsRequest from "../../__helpers/request";

// Without hook api for getting all the events
export const getSearchedUserGroupsAPI = async (page, take, query) => {
  const { data } = await tmsRequest.get(`/usergroups/searchQuery?page=${page}&take=${take}&query=${query}`);
  return data;
};

// Without hook api for getting all the events
export const getProtectedFeaturesAPI = async (page, take) => {
  const { data } = await tmsRequest.get(`/protectedfeatures?page=${page}&take=${take}`);
  return data;
};

// Without hook api for getting all the events
export const getUsersAPI = async (page, take) => {
  const { data } = await tmsRequest.get(`/users?page=${page}&take=${take}`);
  return data;
};
// Without hook api for getting all the events
export const getUserGroupsAPI = async (page, take) => {
  const { data } = await tmsRequest.get(`/usergroups?page=${page}&take=${take}`);
  return data;
};

// Without hook api for getting all the events
export const saveUserGroupsAPI = async (payload) => {
  const { data } = await tmsRequest.post("/usergroups", payload);
  return data;
};

// Without hook api for getting all the events
export const updateUserGroupsAPI = async (id, payload) => {
  const { data } = await tmsRequest.put(`/usergroups/${id}`, payload);
  return data;
};

// Without hook api for getting all the events
export const updateUserGroupsByPatchAPI = async (id, payload) => {
  const { data } = await tmsRequest.patch(`/usergroups/${id}`, payload);
  return data;
};

// Without hook api for getting all the events
export const deleteUserGroupsAPI = async (id) => {
  const { data } = await tmsRequest.delete(`/usergroups/${id}`);
  return data;
};

// Without hook api for getting all the events
export const getUserGroupByIdAPI = async (id) => {
  const { data } = await tmsRequest.get(`/usergroups/${id}`);
  return data;
};
