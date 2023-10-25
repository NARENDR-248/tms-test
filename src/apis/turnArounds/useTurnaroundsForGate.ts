import { useQuery } from "react-query";
import tmsRequest from "../__helpers/request";

export const useTurnaroundsForGate = (gateId: string, date: string, carrier_names: string[], gscIds: string[]) => {
  return useQuery(
    ["turnaroundsForGate", gateId, date, carrier_names, gscIds],
    async () => {
      const { data } = await tmsRequest.get(`turnArounds/byGateId/${gateId}`, {
        params: {
          date: date,
          carrier_names: carrier_names,
          gscIds: gscIds,
        },
      });
      return data;
    },
    {},
  );
};
