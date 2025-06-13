import { BookList } from "@/features/books/ui/book-list";
import { DetailSearchModal } from "@/features/search/ui/detail-search-modal";
import { Search } from "@/features/search/ui/search";

export function SearchBooksPage() {
  return (
    <section className="h-screen max-w-[960px] mx-auto p-4 flex flex-col gap-6">
      <h1 className="text-cdri-title2">도서 검색</h1>
      <div>
        <Search />
        <DetailSearchModal />
      </div>
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
