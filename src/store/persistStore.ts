import { create } from "zustand";
import { produce } from "immer";

export const usePersistStore = create<{
  isInitialLoad: boolean;
  setIsInitialLoad: (isInitialLoad: boolean) => void;
}>((set) => ({
  isInitialLoad: true,
  setIsInitialLoad: (isInitialLoad: boolean) =>
    set(
      produce((state) => {
        state.isInitialLoad = isInitialLoad;
      }),
    ),
}));
