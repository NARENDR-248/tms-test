import { useQuery } from "react-query";
import tmsRequest from "../__helpers/request";

export const useEventsForTurnAroundLogs = (turnAroundId: string) => {
  return useQuery(
    "eventsLogsForTurnAround",
    async () => {
      const { data } = await tmsRequest.get(`eventsLogs/forTurnAround/${turnAroundId}`);
      return data;
    },
    {},
  );
};

export default useEventsForTurnAroundLogs;
