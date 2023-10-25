import tmsRequest from "../../__helpers/request";

export const deleteConfiguration = async (configId: string) => {
  const { data } = await tmsRequest.delete(`configurations/${configId}`);
  return data;
};
