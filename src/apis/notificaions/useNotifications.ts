import axios from "axios";
import { useQuery } from "react-query";
import tmsRequest from "../__helpers/request";

const useNotifications = (
  connection: "sockets" | "rest",
  gateId: string,
  startDate: Date | null,
  endDate: Date | null,
) => {
  return useQuery({
    queryKey: ["notifications", connection, startDate, endDate, gateId],
    queryFn: async (): Promise<Array<any>> => {
      if (connection === "rest") {
        const { data } = await tmsRequest.get("notifications", {
          params: {
            gateId,
            startDate,
            endDate,
          },
        });
        return data.data;
      } else {
        return [];
      }
    },
    //statle time of 5 hours
    staleTime: 1000 * 60 * 60 * 5,
  });
};

export default useNotifications;
