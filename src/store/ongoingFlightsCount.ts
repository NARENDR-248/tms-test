import { produce } from "immer";
import { create } from "zustand";

export const useOngoingFlightsCountStore = create<{
  ongoingCount: number;
  setOngoingCount: (ongoingCount: number) => void;
}>((set) => ({
  ongoingCount: 0,
  setOngoingCount: (ongoingCount: number) => {
    set(
      produce((state) => {
        state.ongoingCount = ongoingCount;
      }),
    );
  },
}));
