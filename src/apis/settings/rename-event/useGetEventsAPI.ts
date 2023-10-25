import { useQuery } from "react-query";
import tmsRequest from "../../__helpers/request";

export const useGetEventsAPI = () => {
  return useQuery(
    "useGetEventsAPI",
    async () => {
      const { data } = await tmsRequest.get(`events/all`);
      return data;
    },
    {},
  );
};

// Without hook api for getting all the events
export const getEventsAPI = async () => {
  const { data } = await tmsRequest.get(`events/all`);
  return data;
};
