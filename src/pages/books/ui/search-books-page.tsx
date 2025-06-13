import { BookList } from "@/features/books/ui/book-list";
import { Search } from "@/features/search/ui/search";

export function SearchBooksPage() {
  return (
    <section className="h-screen max-w-[960px] mx-auto p-4 flex flex-col gap-6">
      <h1 className="text-cdri-title2">도서 검색</h1>
      <Search />
      <p className="flex gap-4">
        도서 검색 결과
        <span>
          총 <span className="text-cdri-primary">{21}</span>건
        </span>
      </p>
      <BookList />
    </section>
  );
}
