import { useQuery } from "react-query";
import tmsRequest from "../../__helpers/request";

// export const useCarriers = () => {
//   return useQuery(
//     "useCarriers",
//     async () => {
//       const { data } = await tmsRequest.get(`carriers/all`);
//       return data;
//     },
//     {}
//   );
// };

export const getAllCarriers = async () => {
  const { data } = await tmsRequest.get(`carriers/all`);
  return data;
};
