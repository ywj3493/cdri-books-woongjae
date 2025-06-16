import { BookListItem } from "@/entities/books";
import type { Book } from "@/entities/books";
import { useFavoritesStore } from "@/features/favorites";

interface BookListProps {
  bookList: Book[];
}

export function BookList({ bookList }: BookListProps) {
  const { isFavorite, toggleFavorite } = useFavoritesStore();
  return (
    <ul className="max-w-240">
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
