import tmsRequest from "../../__helpers/request";

export const createConfiguration = async (payload: any) => {
  const { data } = await tmsRequest.post(`configurations`, payload);
  return data;
};
