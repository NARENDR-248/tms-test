import { useQuery } from "react-query";
import tmsRequest from "../__helpers/request";

export const useCarriersList = () => {
  return useQuery(
    "carriersList",
    async () => {
      const { data } = await tmsRequest.get(`turnArounds/carriersList`);
      return data;
    },
    {},
  );
};
