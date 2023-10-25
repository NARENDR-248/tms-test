import { useQuery } from "react-query";
import tmsRequest from "../__helpers/request";

export const useDepartedFlightsCount = (
  searchQuery?: string,
  terminalId?: string,
  startDate?: Date,
  endDate?: Date,
) => {
  return useQuery(
    ["departedFlightsCount", searchQuery, terminalId, startDate, endDate],
    async () => {
      const { data } = await tmsRequest.get(
        `turnArounds/departedFlightsCount?searchQuery=${searchQuery}&terminalId=${terminalId}&startDate=${startDate}&endDate=${endDate}`,
      );
      return data;
    },
    {},
  );
};
