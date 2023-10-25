import { useQuery } from "react-query";
import tmsRequest from "../__helpers/request";

export const useCamerasBelongingToGate = (gateId: string) => {
  return useQuery(
    ["belongingToGate", gateId],
    async () => {
      const { data } = await tmsRequest.get(`/cameras/belongingToGate/${gateId}`);
      return data;
    },
    {},
  );
};
