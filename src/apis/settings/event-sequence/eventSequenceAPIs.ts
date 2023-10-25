import { useQuery } from "react-query";
import tmsRequest from "../../__helpers/request";

// Without hook api for getting all the events
export const getConfigruations = async () => {
  const { data } = await tmsRequest.get(
    // `/configurations/withEventsAndCarriers`
    "/ess/getAllConfigruations",
  );
  return data;
};

// Without hook api for getting all the events
export const getConfigruationsWithFilters = async (filters) => {
  const { data } = await tmsRequest.get(
    // `/configurations/withEventsAndCarriers`
    `/ess/getFilteredConfigruations?filters=${filters}`,
  );
  return data;
};

// Without hook api for getting all the events
export const updateConfigurationPriority = async (
  priority: number,
  configId: string,
  eventId: string,
  linkedEventId: string | null,
) => {
  const { data } = await tmsRequest.patch(`/configurations/updatePriority/${configId}/${eventId}/${linkedEventId}`, {
    priority: priority,
  });
  return data;
};

// Without hook api for getting all the events
export const getAllCarriers = async () => {
  const { data } = await tmsRequest.get(`http://localhost:4000/v1/carriers/all`);
  return data;
};
