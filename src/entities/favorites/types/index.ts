import type { Book } from "@/entities/books";

export type FavoritesState = {
  favorites: Book[];
};
export type FavoritesActions = {
  toggleFavorite: (book: Book) => void;
  isFavorite: (isbn: string) => boolean;
};
export type FavoritesStore = FavoritesState & FavoritesActions;
