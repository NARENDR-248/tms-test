import { create } from "zustand";
import { produce } from "immer";
import { queryClient } from "@/apis/__helpers/request";

export const useTerminalsStore = create<{
  gateId: string;
  terminalId: string;
  setTerminalId: (terminalId: string) => void;
  setGateId: (gateId: string) => void;
}>((set) => ({
  terminalId: "",
  gateId: "",
  cameraId: "",
  setTerminalId: (terminalId: string) => {
    set(
      produce((state) => {
        state.terminalId = terminalId;
      }),
    );
  },
  setGateId: (gateId: string) => {
    set(
      produce((state) => {
        state.gateId = gateId;
      }),
    );
  },
}));
