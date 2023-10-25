import { useQuery } from "react-query";
import tmsRequest from "../__helpers/request";

export const useOngoingFlightsCount = (searchQuery?: string, terminalId?: string) => {
  return useQuery(
    ["ongoingFlights", { searchQuery, terminalId }],
    async () => {
      const { data } = await tmsRequest.get(
        `turnArounds/ongoingFlightsCount?searchQuery=${searchQuery}&terminalId=${terminalId}`,
      );
      return data;
    },
    {},
  );
};
