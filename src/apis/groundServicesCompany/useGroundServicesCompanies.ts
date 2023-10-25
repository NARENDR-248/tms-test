import { useQuery } from "react-query";
import tmsRequest from "../__helpers/request";

export const useGroundServicesCompanies = () => {
  return useQuery(
    "useGroundServicesCompanies",
    async () => {
      const { data } = await tmsRequest.get(`groundServicesCompanies`);
      return data;
    },
    {},
  );
};
