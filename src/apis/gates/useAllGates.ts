import { useQuery } from "react-query";
import tmsRequest from "../__helpers/request";

export const useAllGates = () => {
  return useQuery(
    "allGates",
    async () => {
      const { data } = await tmsRequest.get("gates");
      return data;
    },
    {},
  );
};
