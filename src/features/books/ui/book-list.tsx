import { BookItem } from "@/entities/books/ui";
import { dummyResponse } from "../api/dummy";

export function BookList() {
  const { documents: books } = dummyResponse;
  return (
    <ul>
      {books.map((book) => (
        <BookItem key={book.isbn} book={book} />
      ))}
    </ul>
  );
}
