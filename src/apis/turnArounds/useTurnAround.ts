import { useQuery } from "react-query";
import tmsRequest from "../__helpers/request";

export const useTurnAround = (turnAroundId: string) => {
  return useQuery(
    ["turnAround", turnAroundId],
    async () => {
      const { data } = await tmsRequest.get(`turnArounds/${turnAroundId}`);
      return data;
    },
    {},
  );
};
