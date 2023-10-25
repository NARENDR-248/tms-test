import tmsRequest from "../../__helpers/request";

// Hook api for updating the event ui name
export const updateEventDisplayName = async (
  eventId: string,
  renameObj: {
    uiNameEn: string;
    uiNameAr: string;
  }
) => {
  const { data } = await tmsRequest.put(`events/${eventId}`, {
    ui_name_en: renameObj.uiNameEn,
    ui_name_ar: renameObj.uiNameAr,
  });
  return data;
};
