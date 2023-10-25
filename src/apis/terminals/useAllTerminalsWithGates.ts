import { useQuery } from "react-query";
import tmsRequest from "../__helpers/request";

export const useAllTerminalsWithGates = () => {
  return useQuery(
    "allTerminalsWithGates",
    async () => {
      const { data } = await tmsRequest.get("terminals/withGates");
      return data;
    },
    {},
  );
};
