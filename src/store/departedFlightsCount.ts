import { produce } from "immer";
import { create } from "zustand";

export const useDepartedFlightsCountStore = create<{
  departedCount: number;
  setDepartedCount: (departedCount: number) => void;
}>((set) => ({
  departedCount: 0,
  setDepartedCount: (departedCount: number) => {
    set(
      produce((state) => {
        state.departedCount = departedCount;
      }),
    );
  },
}));
