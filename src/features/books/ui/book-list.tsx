import { BookListItem } from "@/entities/books/ui";
import type { Book } from "@/entities/books/model";

interface BookListProps {
  bookList: Book[];
}

export function BookList({ bookList }: BookListProps) {
  return (
    <ul>
      {bookList.map((book) => (
        <BookListItem key={book.isbn} book={book} />
      ))}
    </ul>
  );
}
