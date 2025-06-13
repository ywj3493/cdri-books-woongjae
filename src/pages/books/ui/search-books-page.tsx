import { Book } from "@/entities/books/model";
import { useGetSearchBooksQuery } from "@/features/books/api";
import { BookList } from "@/features/books/ui/book-list";
import { DetailSearchModal } from "@/features/search/ui/detail-search-modal";
import { Search } from "@/features/search/ui/search";
import { useState } from "react";

export function SearchBooksPage() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchTarget, setSearchTarget] = useState<
    "title" | "author" | "publisher"
  >("title");

  const { data: searchBooksData } = useGetSearchBooksQuery(
    searchKeyword,
    "accuracy",
    1,
    10,
    searchTarget,
    {
      query: {
        select: (data) => data.documents.map(Book.create),
      },
    },
  );

  const setDetailSearchKeyword = (
    keyword: string,
    selected: "title" | "author" | "publisher",
  ) => {
    setSearchKeyword(keyword);
    setSearchTarget(selected);
  };

  return (
    <section className="h-screen max-w-[960px] mx-auto p-4 flex flex-col gap-6">
      <h1 className="text-cdri-title2">도서 검색</h1>
      <div>
        <Search onSearch={setSearchKeyword} />
        <DetailSearchModal onSearch={setDetailSearchKeyword} />
      </div>
      <p className="flex gap-4">
        도서 검색 결과
        <span>
          총{" "}
          <span className="text-cdri-primary">
            {searchBooksData?.length || 0}
          </span>
          건
        </span>
      </p>
      {searchBooksData && <BookList bookList={searchBooksData} />}
    </section>
  );
}
