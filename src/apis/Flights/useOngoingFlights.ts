import { useQuery } from "react-query";
import tmsRequest from "../__helpers/request";

export const useOngoingFlights = (page: number, perPage: number, searchQuery?: string, terminalId?: string) => {
  return useQuery(
    ["ongoingFlights", page, perPage, searchQuery, terminalId],
    async () => {
      const { data } = await tmsRequest.get(
        `turnArounds/ongoingFlights?page=${page}&perPage=${perPage}&searchQuery=${searchQuery}&terminalId=${terminalId}`,
      );
      return data;
    },
    {},
  );
};
