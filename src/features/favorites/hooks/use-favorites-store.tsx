import type { FavoritesStore } from "@/entities/favorites/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (book) => {
        set((state) => {
          const isFavorite = state.favorites.some(
            (favorite) => favorite.isbn === book.isbn,
          );

          return {
            favorites: isFavorite
              ? state.favorites.filter(
                  (favorite) => favorite.isbn !== book.isbn,
                )
              : [...state.favorites, book],
          };
        });
      },
      isFavorite: (isbn: string) => {
        return get().favorites.some((favorite) => favorite.isbn === isbn);
      },
    }),
    {
      name: "favorites-storage",
    },
  ),
);
