import { produce } from "immer";
import { create } from "zustand";

export const useFlightsTerminalStore = create<{
  terminalId: string;
  setTerminalId: (terminalId: string) => void;
}>((set) => ({
  terminalId: "",
  setTerminalId: (terminalId: string) => {
    set(
      produce((state) => {
        state.terminalId = terminalId;
      }),
    );
  },
}));
