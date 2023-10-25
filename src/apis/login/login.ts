import tmsRequest from "../__helpers/request";

export const useLogin = async (payload: any) => {
  const { data } = await tmsRequest.post(`auth/`, payload);
  return data;
};
