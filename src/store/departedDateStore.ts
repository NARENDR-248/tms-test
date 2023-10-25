import { produce } from "immer";
import { create } from "zustand";

export const useDepartedDateStore = create<{
  startDate: Date;
  endDate: Date;
  setStartDate: (startDate: Date) => void;
  setEndDate: (endDate: Date) => void;
}>((set) => ({
  startDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), //setting startDate of departed flights to 2 days prior to the current date
  endDate: new Date(), // and endDate to the current date
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
