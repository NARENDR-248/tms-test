import tmsRequest from "../__helpers/request";

export const getTurnAround = async (turnAroundId: string) => {
  const { data } = await tmsRequest.get(`turnArounds/${turnAroundId}`);
  return data;
};
