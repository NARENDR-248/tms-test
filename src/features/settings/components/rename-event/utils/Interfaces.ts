type TEventRename = {
  eventId: number;
  eventName: string;
  eventUIName: string | null;
};
type TRenameVal = {
  uiNameEn: string;
  uiNameAr: string;
};
type TValidationErrorMessage = {
  msg: string;
  validated: boolean;
};
export type { TEventRename, TRenameVal, TValidationErrorMessage };
