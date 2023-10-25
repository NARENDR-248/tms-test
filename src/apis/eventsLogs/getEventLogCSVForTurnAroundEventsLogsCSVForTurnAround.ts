import axios from "axios";
import token from "../token";

const getEventsLogsCSVForTurnAround = async (turnAroundId: string) => {
  const config: any = {
    headers: {
      Authorization: token,
    },
    responseType: "blob", // Set the response type to 'blob'
  };
  const url = `http://localhost:4000/v1/eventsLogs/csv/${turnAroundId}`;

  const { data } = await axios.get(url, config);
  const blob = new Blob([data], { type: "text/csv" });
  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = `Events Logs For TurnAround #${turnAroundId}.csv`;
  link.click();
  URL.revokeObjectURL(downloadUrl);
};

export default getEventsLogsCSVForTurnAround;
