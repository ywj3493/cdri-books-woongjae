import {
  BookListItem,
  BookListItemSkeleton,
  EmptyBookList,
} from "@/entities/books";
import type { Book } from "@/entities/books";
import { useFavoritesStore } from "@/features/favorites";

interface BookListProps {
  isLoading?: boolean;
  bookList: Book[];
}

export function BookList({ isLoading, bookList }: BookListProps) {
  const { isFavorite, toggleFavorite } = useFavoritesStore();

  if (isLoading) {
    return (
      <ul className="max-w-240">
        {Array.from({ length: 10 }, () => (
          <BookListItemSkeleton
            key={`book_list_item_skeleton:${Math.random()}`}
          />
        ))}
      </ul>
    );
  }
  if (bookList.length === 0) {
    return <EmptyBookList message="검색된 결과가 없습니다." />;
  }
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
