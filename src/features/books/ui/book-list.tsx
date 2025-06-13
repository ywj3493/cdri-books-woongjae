import { BookListItem } from "@/entities/books/ui";
import { dummyResponse } from "../api/dummy";

export function BookList() {
  const { documents: books } = dummyResponse;
  return (
    <ul>
      {books.map((book) => (
        <BookListItem key={book.isbn} book={book} />
      ))}
    </ul>
  );
}
