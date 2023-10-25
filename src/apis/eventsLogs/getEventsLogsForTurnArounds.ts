import { useQuery } from "react-query";
import tmsRequest from "../__helpers/request";

export const getEventsForTurnAroundLogs = async (turnAroundId: string) => {
  const { data } = await tmsRequest.get(`eventsLogs/forTurnAround/${turnAroundId}`);
  return data;
};

export default getEventsForTurnAroundLogs;
