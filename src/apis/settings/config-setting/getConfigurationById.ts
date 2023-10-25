// import { useQuery } from "react-query";
// import tmsRequest from "../../__helpers/request";

// export const useConfigurationById = (configId: string) => {
//   return useQuery(
//     ["useConfigurationById", configId],
//     async () => {
//       const { data } = await tmsRequest.get(
//         `configurations/withEvents/${configId}`
//       );
//       return data;
//     },
//     {}
//   );
// };

import tmsRequest from "../../__helpers/request";

export const getConfigurationById = async (configId: string) => {
  const { data } = await tmsRequest.get(`configurations/withEvents/${configId}`);
  return data;
};
