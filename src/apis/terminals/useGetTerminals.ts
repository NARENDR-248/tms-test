import axios from "axios";
import { useQuery } from "react-query";
import tmsRequest from "../__helpers/request";

const useGetTerminals = () => {
  return useQuery(
    "allTerminals",
    async () => {
      const { data } = await tmsRequest.get("terminals");
      return data?.data;
    },
    {},
  );
};

export default useGetTerminals;
