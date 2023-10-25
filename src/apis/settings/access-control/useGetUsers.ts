import tmsRequest from "@/apis/__helpers/request";
import { useQuery } from "react-query";

export const useGetUsers = (page: number, take: number) => {
  return useQuery(
    ["users", page, take],
    async () => {
      const { data } = await tmsRequest.get(`users?page=${page}&take=${take}`);
      return data;
    },
    {},
  );
};
