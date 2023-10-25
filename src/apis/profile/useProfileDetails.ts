import { useQuery } from "react-query";
import tmsRequest from "../__helpers/request";

export const useUserProfileDetails = (userId: string) => {
  return useQuery(
    ["userProfileDetails", userId],
    async () => {
      if (userId) {
        const { data } = await tmsRequest.get(`users/${userId}`);
        return data;
      }
    },
    {},
  );
};
