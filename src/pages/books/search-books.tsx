import { useEffect } from "react";
import { getBooks } from "../../entities/books/api";

export function SearchBooks() {
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getBooks();
      console.log(response);
    };
    fetchBooks().catch((error) => {
      console.error("Failed to fetch books:", error);
    });
  }, []);

  return (
    <div>
      <h1>Search Books</h1>
      <p>Check the console for fetched book data.</p>
    </div>
  );
}
