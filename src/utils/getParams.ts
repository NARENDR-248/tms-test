export const getParams = (url: any) => {
  let params = new URLSearchParams(url);
  return {
    terminalId: params.get("terminalId"),
    gateId: params.get("gateId"),
    turnAroundId: params.get("turnAroundId"),
  };
};
