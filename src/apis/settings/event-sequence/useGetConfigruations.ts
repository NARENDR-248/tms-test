import { useQuery } from "react-query";
import tmsRequest from "../../__helpers/request";

// export const useGetEventsAPI = () => {
//   return useQuery(
//     "useGetEventsAPI",
//     async () => {
//       const { data } = await tmsRequest.get(`events`);
//       return data;
//     },
//     {}
//   );
// };

// Without hook api for getting all the events
export const getConfigruationsAPI = async () => {
  const { data } = await tmsRequest.get(`/configurations/withEventsAndCarriers`);
  return data;
};
