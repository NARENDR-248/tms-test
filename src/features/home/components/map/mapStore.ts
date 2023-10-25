import { create } from "zustand";
import { produce } from "immer";

export const useMapStore = create<{
  render: any;
  setRender: (cameras: any) => void;
}>((set) => ({
  render: 0,
  setRender: (cameras: boolean) =>
    set(
      produce((state) => {
        state.render = state.render + 1;
      }),
    ),
}));
