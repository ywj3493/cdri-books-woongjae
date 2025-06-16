import { Book, EmptyBookList } from "@/entities/books";
import { BookList, useGetSearchBooksQuery } from "@/features/books";
import {
  DetailSearchModal,
  SearchInput,
  useSearchStore,
} from "@/features/search";

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
    <section className="mx-auto p-4 flex flex-col gap-6">
      <h1 className="text-cdri-title2">도서 검색</h1>
      <div className="flex items-center gap-4">
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
