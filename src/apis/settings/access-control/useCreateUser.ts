import tmsRequest from "../../__helpers/request";

export const useCreateUser = async (payload: any) => {
  const { data } = await tmsRequest.post(`auth/register/`, payload);
  return data;
};
