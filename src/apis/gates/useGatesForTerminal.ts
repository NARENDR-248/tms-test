import { useQuery } from "react-query";
import tmsRequest from "../__helpers/request";
import { useTerminalsStore } from "@/store/terminalsStore";

export const useGatesForTerminal = (terminalId: string | null) => {
  return useQuery({
    queryKey: ["gatesForTerminal", terminalId],
    queryFn: async () => {
      if (terminalId) {
        const { data } = await tmsRequest.get(`gates/terminal/${terminalId}`);
        return data;
      } else return [];
    },
    //statle time of 5 hours
    staleTime: 1000 * 60 * 60 * 5,
  });
};
