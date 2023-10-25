import { useQuery } from "react-query";
import tmsRequest from "../__helpers/request";

export const useGatesInTerminal = (terminalId: string) => {
  return useQuery(
    ["gatesInTerminal", terminalId],
    async () => {
      if (terminalId) {
        const { data } = await tmsRequest.get(`gates/terminal/${terminalId}`);
        return data;
      } else {
        return [];
      }
    },
    {},
  );
};
