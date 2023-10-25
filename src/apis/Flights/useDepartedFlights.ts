import { useQuery } from "react-query";
import tmsRequest from "../__helpers/request";

export const useDepartedFlights = (
  page: number,
  take: number,
  searchQuery?: string,
  terminalId?: string,
  startDate?: Date,
  endDate?: Date,
) => {
  return useQuery(
    ["departedFlights", page, take, searchQuery, terminalId, startDate, endDate],
    async () => {
      const { data } = await tmsRequest.get(
        `turnArounds/departedFlights?page=${page}&take=${take}&searchQuery=${searchQuery}&terminalId=${terminalId}&startDate=${startDate}&endDate=${endDate}`,
      );
      return data;
    },
    {},
  );
};
