import { useQuery, useQueryClient } from "react-query";
import tmsRequest from "../__helpers/request";

const useTerminals = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["terminals"],
    queryFn: async (): Promise<Array<any>> => {
      const { data } = await tmsRequest.get("terminals");
      return data.data;
    },

    //statle time of 5 hours
    staleTime: 1000 * 60 * 60 * 5,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default useTerminals;
