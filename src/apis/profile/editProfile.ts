import tmsRequest from "../__helpers/request";

export const editProfile = async (id: string, payload: any) => {
  if (id) {
    const result: any = await tmsRequest.put(`users/${id}`, payload);
    const { data } = result;
    return data;
  }
  return null;
};
