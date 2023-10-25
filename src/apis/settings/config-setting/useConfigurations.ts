import { useQuery } from "react-query";
import tmsRequest from "../../__helpers/request";

export const useConfigurations = (
  page: number,
  take: number,
  eventId: string,
  linkedEventIds: string[],
  carriers: string[],
  aircraftTypes: string[],
  timeOfDay: string[],
) => {
  return useQuery(
    ["useConfigurations", page, take, eventId, linkedEventIds, carriers, aircraftTypes, timeOfDay],
    async () => {
      const { data } = await tmsRequest.get(`configurations/withEventsAndCarriers?page=${page}&take=${take}`, {
        params: {
          eventId: eventId,
          linkedEventIds: linkedEventIds,
          carriers: carriers,
          aircraftTypes: aircraftTypes,
          timeOfDay: timeOfDay,
        },
      });
      return data;
    },
    {},
  );
};
