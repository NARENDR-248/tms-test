import { produce } from "immer";
import { create } from "zustand";

// Mobile Filters Popper
export const useMobileFilterPopper = create<{
  carriers: string[];
  aircraftType: string[];
  timeOfDay: string[];
  setCarriers: Function;
  setAircraftType: Function;
  setTimeOfDay: Function;
}>((set) => ({
  carriers: [],
  aircraftType: [],
  timeOfDay: [],
  setCarriers: (carriers: string[]) => {
    set(
      produce((state) => {
        state.carriers = carriers;
      })
    );
  },
  setAircraftType: (aircraftType: string[]) => {
    set(
      produce((state) => {
        state.aircraftType = aircraftType;
      })
    );
  },
  setTimeOfDay: (timeOfDay: string[]) => {
    set(
      produce((state) => {
        state.timeOfDay = timeOfDay;
      })
    );
  },
}));

// Mobile Filters Popper
export const useGenerateEventOccurrences = create<{
  eventOccurrences: any[];
  setEventOccurrences: Function;
}>((set) => ({
  eventOccurrences: [],
  setEventOccurrences: (newArr: any[]) => {
    set(
      produce((state) => {
        state.eventOccurrences = newArr;
      })
    );
  },
}));
