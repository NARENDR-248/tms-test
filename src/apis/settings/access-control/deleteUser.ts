import tmsRequest from "../../__helpers/request";

export const deleteUser = async (userId: string) => {
  const { data } = await tmsRequest.delete(`/users/${userId}`);
  return data;
};
