import { BookListItem } from "@/entities/books/ui";
import type { Book } from "@/entities/books/model";
import { useFavoritesStore } from "@/features/favorites/hooks/use-favorites-store";

interface BookListProps {
  bookList: Book[];
}

export function BookList({ bookList }: BookListProps) {
  const { isFavorite, toggleFavorite } = useFavoritesStore();
  return (
    <ul>
      {bookList.map((book) => (
        <BookListItem
          key={book.isbn}
          book={book}
          isFavorite={isFavorite(book.isbn)}
          onToggleFavorite={() => toggleFavorite(book)}
        />
      ))}
    </ul>
  );
}
