import { SearchIcon } from "@/shared/ui";
import { useRef, useState } from "react";
import { cn } from "@/shared/utils";
import { useOutsideClickEffect } from "@/shared/hooks";
import { SearchHistoryItem } from "@/entities/search/ui";
import { useSearchStore } from "../hooks/use-search-store";

const dummySearchHistory = [
  "해리포터",
  "반지의 제왕",
  "어린왕자",
  "파이썬 프로그래밍",
  "자바스크립트 완벽 가이드",
];

export function SearchInput() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);

  const isDropdownOpen = isInputFocused && dummySearchHistory.length > 0;

  const {
    pageInputValue,
    setPageInputValue,
    pageSearch,
    resetModalSearchInput,
  } = useSearchStore();

  const searchBooks = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") {
      return;
    }
    pageSearch();
    setIsInputFocused(false);
  };

  const changeDisplayInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPageInputValue(event.target.value);
  };

  const openDropdownAndModalReset = () => {
    resetModalSearchInput();
    setIsInputFocused(true);
  };

  const closeDropdown = () => {
    setIsInputFocused(false);
  };

  useOutsideClickEffect(searchContainerRef, closeDropdown);

  return (
    <div ref={searchContainerRef} className="relative max-w-120">
      <div
        className={cn(
          `flex items-center gap-3 bg-cdri-light-gray p-[15px] ${isDropdownOpen ? "rounded-t-[27px] rounded-b-none" : "rounded-full"}`,
        )}
      >
        <SearchIcon />
        <input
          type="text"
          value={pageInputValue}
          placeholder="검색어를 입력하세요"
          className="focus:outline-none"
          onChange={changeDisplayInput}
          onFocus={openDropdownAndModalReset}
          onKeyDown={searchBooks}
        />
      </div>
      {isDropdownOpen && (
        <ul className="bg-cdri-light-gray rounded-b-[27px] absolute w-full max-h-96 overflow-y-auto z-10">
          {dummySearchHistory.map((history) => (
            <SearchHistoryItem
              key={`search-history-item-${history}`}
              searchHistory={history}
              onClick={(searchHistory) => {
                console.log("Clicked:", searchHistory);
              }}
              onClickDelete={(searchHistory) => {
                console.log("Deleted:", searchHistory);
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
