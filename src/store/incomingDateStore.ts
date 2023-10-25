import { produce } from "immer";
import { create } from "zustand";

export const useIncomingDateStore = create<{
  startDate: Date;
  endDate: Date;
  setStartDate: (startDate: Date) => void;
  setEndDate: (endDate: Date) => void;
}>((set) => ({
  startDate: new Date(),
  endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), //setting endDate of incoming flights to 2 days from the current date
  setStartDate: (startDate: Date) => {
    set(
      produce((state) => {
        state.startDate = startDate;
      }),
    );
  },
  setEndDate: (endDate: Date) => {
    set(
      produce((state) => {
        state.endDate = endDate;
      }),
    );
  },
}));
