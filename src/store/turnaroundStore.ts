import { create } from "zustand";
import { produce } from "immer";

export const useTurnaroundStore = create<{
  live: boolean;
  turnAround: any;
  events: any;
  reEstablishSocket: any;
  setLive: (live: any) => void;
  setTurnAround: (turnAround: any) => void;
  setEvents: (events: any) => void;
  setReEstablishSocket: () => void;
}>((set) => ({
  turnAround: null,
  live: true,
  events: [],
  reEstablishSocket: 0,
  setTurnAround: (turnAround) =>
    set((state: any) => {
      const params = new URLSearchParams(window.location.search);
      if (turnAround == null) {
        params.delete("turnAroundId");
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState({}, "", newUrl);
      } else {
        if (params.get("turnAroundId") !== turnAround.id) {
          params.set("turnAroundId", turnAround.id);
          const newUrl = `${window.location.pathname}?${params.toString()}`;
          window.history.replaceState({}, "", newUrl);
        }
      }
      return { turnAround: turnAround };
    }),

  setLive: (live: any) => set((state: any) => ({ live: live })),
  setEvents: (events: any) => set((state: any) => ({ events: events })),
  setReEstablishSocket: () => set((state: any) => ({ reEstablishSocket: state.reEstablishSocket + 1 })),
}));
