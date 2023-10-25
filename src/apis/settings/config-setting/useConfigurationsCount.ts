import { useQuery } from "react-query";
import tmsRequest from "../../__helpers/request";

export const useConfigurationsCount = () => {
  return useQuery(
    "useConfigurationsCount",
    async () => {
      const { data } = await tmsRequest.get(`configurations/withEventsCount`);
      return data;
    },
    {},
  );
};
