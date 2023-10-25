import { produce } from "immer";
import { create } from "zustand";

// Importing Interfaces & Types
import { TEventRename } from "../utils/Interfaces";

// Renaming Event Dialog
export const useRenamingEventDialog = create<{
  isRDOpen: boolean;
  RDEventId: string;
  RDEvent: any;
  refetch: boolean;
  setIsRDOpen: Function;
  setRefetch: Function;
}>((set) => ({
  isRDOpen: false,
  RDEventId: "",
  RDEvent: {},
  refetch: false,
  setIsRDOpen: (open: boolean, eventId: number, event) => {
    set(
      produce((state) => {
        state.isRDOpen = open;
        state.RDEventId = eventId;
        state.RDEvent = event;
      }),
    );
  },
  setRefetch: (refetch: boolean) => {
    set(
      produce((state) => {
        state.refetch = refetch;
      }),
    );
  },
}));

// Events Renaming Data
export const useRenamingEventsData = create<{
  eventsRenamingData: TEventRename[];
  setEventsRenamingData: Function;
}>((set) => ({
  eventsRenamingData: [],
  setEventsRenamingData: (newUpdatedData: TEventRename[]) => {
    set(
      produce((state) => {
        state.eventsRenamingData = newUpdatedData;
      }),
    );
  },
}));
