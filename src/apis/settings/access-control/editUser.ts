import tmsRequest from "../../__helpers/request";

export const editUserRequest = async (userId: string, payload: any) => {
  const { data } = await tmsRequest.put(`/users/${userId}`, payload);
  return data;
};
