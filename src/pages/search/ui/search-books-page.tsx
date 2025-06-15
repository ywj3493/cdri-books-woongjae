import { Book } from "@/entities/books/model";
import { EmptyBookList } from "@/entities/books/ui";
import { useGetSearchBooksQuery } from "@/features/books";
import { BookList } from "@/features/books/ui/book-list";
import { useSearchStore } from "@/features/search/hooks/use-search-store";
import { DetailSearchModal } from "@/features/search/ui/detail-search-modal";
import { SearchInput } from "@/features/search/ui/search-input";

export function SearchBooksPage() {
  const { searchKeyword, searchTarget } = useSearchStore();

  const { data: searchBooksData } = useGetSearchBooksQuery(
    searchKeyword,
    "accuracy",
    1,
    10,
    searchTarget,
    {
      query: {
        select: (data) => ({
          meta: data.meta,
          documents: data.documents.map(Book.create),
        }),
        enabled: !!searchKeyword,
      },
    },
  );

  const isSearchEmpty =
    !searchBooksData || searchBooksData.documents.length === 0;

  return (
    <section className="h-screen max-w-[960px] mx-auto p-4 flex flex-col gap-6">
      <h1 className="text-cdri-title2">도서 검색</h1>
      <div>
        <SearchInput />
        <DetailSearchModal />
      </div>
      <p className="flex gap-4">
        도서 검색 결과
        <span>
          총{" "}
          <span className="text-cdri-primary">
            {searchBooksData?.meta.total_count || 0}
          </span>
          건
        </span>
      </p>
      {isSearchEmpty ? (
        <EmptyBookList message="검색된 결과가 없습니다." />
      ) : (
        <BookList bookList={searchBooksData.documents} />
      )}
    </section>
  );
}
