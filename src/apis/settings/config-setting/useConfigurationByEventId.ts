import { useQuery } from "react-query";
import tmsRequest from "../../__helpers/request";

export const useConfigurationByEventId = (eventId: string) => {
  return useQuery(
    ["useConfigurationByEventId", eventId],
    async () => {
      if (eventId) {
        const { data } = await tmsRequest.get(
          `configurations/ByEventId/${eventId}`
        );
        return data;
      }
      return null;
    },
    {},
  );
};
