import { create } from "zustand";
import { produce } from "immer";

export const useConfigDrawerStore = create<{
  configDrawerInfo: any;
  setConfigDrawerInfo: ({ open, id, create, edit, duplicate }: any) => void;
}>((set) => ({
  configDrawerInfo: {
    open: false,
    id: "",
    create: false,
    edit: false,
    duplicate: false,
  },
  setConfigDrawerInfo: (payload) => {
    set((state) => {
      const newState = produce(state, (draftState) => {
        draftState.configDrawerInfo = {
          ...draftState.configDrawerInfo,
          ...payload,
        };
      });
      return newState;
    });
  },
}));
