import { produce } from "immer";
import { create } from "zustand";

export const useFlightsSearchQueryStore = create<{
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}>((set) => ({
  searchQuery: "",
  setSearchQuery: (searchQuery: string) => {
    set(
      produce((state) => {
        state.searchQuery = searchQuery;
      }),
    );
  },
}));
