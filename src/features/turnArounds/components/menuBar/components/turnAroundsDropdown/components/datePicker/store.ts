import { create } from "zustand";
import { produce } from "immer";

export const useDateStore = create<{
  date: any;
  setDate: (date: any) => void;
}>((set) => ({
  date: "",
  setDate: (date: string) =>
    set(
      produce((state) => {
        state.date = date;
      }),
    ),
}));
