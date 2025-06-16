import { keepPreviousData } from "@tanstack/react-query";
import { Book } from "@/entities/books";
import { BookList, useGetSearchBooksQuery } from "@/features/books";
import {
  DetailSearchModal,
  SearchInput,
  useSearchStore,
} from "@/features/search";

export function SearchBooksPage() {
  const { searchKeyword, searchTarget } = useSearchStore();

  const { data: searchBooksData, isLoading } = useGetSearchBooksQuery(
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
        placeholderData: keepPreviousData,
      },
    },
  );

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
            {searchBooksData?.meta.total_count ?? 0}
          </span>
          건
        </span>
      </p>
      <BookList
        bookList={searchBooksData?.documents ?? []}
        isLoading={isLoading}
      />
    </section>
  );
}
