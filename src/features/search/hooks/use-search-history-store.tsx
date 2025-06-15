import type { SearchHistoryStore } from "@/entities/search/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSearchHistoryStore = create<SearchHistoryStore>()(
  persist(
    (set, get) => ({
      searchHistory: [],
      addSearchHistory: (keyword) => {
        const currentHistory = get().searchHistory.filter(
          (item) => item !== keyword,
        );
        const newHistory = [keyword, ...currentHistory].slice(0, 8);
        set(() => ({
          searchHistory: newHistory,
        }));
      },
      removeSearchHistory: (keyword) =>
        set((state) => ({
          searchHistory: state.searchHistory.filter((item) => item !== keyword),
        })),
      clearSearchHistory: () => set({ searchHistory: [] }),
    }),
    {
      name: "search-history-storage",
    },
  ),
);
