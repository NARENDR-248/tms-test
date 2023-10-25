import tmsRequest from "../../__helpers/request";

export const editConfiguration = async (id: string, payload: any) => {
  const { data } = await tmsRequest.put(`configurations/edit/${id}`, payload);
  return data;
};
