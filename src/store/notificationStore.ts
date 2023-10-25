import { create } from "zustand";
import { produce } from "immer";

export const useNotificationStore = create<{
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
}>((set) => ({
  isDrawerOpen: false,
  setIsDrawerOpen: (isDrawerOpen: boolean) =>
    set(
      produce((state) => {
        state.isDrawerOpen = isDrawerOpen;
      }),
    ),
}));
