import { create } from "zustand";
import { produce } from "immer";

export const useCamerasStore = create<{
  cameras: any;
  setCameras: (cameras: any) => void;
}>((set) => ({
  cameras: [],
  setCameras: (cameras: boolean) =>
    set(
      produce((state) => {
        state.cameras = cameras;
      }),
    ),
}));
