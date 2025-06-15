import { XIcon } from "@/shared/ui";
import { useSearchHistoryStore } from "../hooks";
import { useSearchStore } from "@/features/search/hooks/use-search-store";

interface SearchHistoryItemProps {
  searchHistory: string;
}

export function SearchHistoryItem({ searchHistory }: SearchHistoryItemProps) {
  const { pageSearch } = useSearchStore();
  const { removeSearchHistory } = useSearchHistoryStore();

  const enterToSearch = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      pageSearch();
    }
  };

  const defaultSearch = () => {
    pageSearch(searchHistory);
  };

  const deleteSearchHistory = (event: React.MouseEvent) => {
    event.stopPropagation();
    removeSearchHistory(searchHistory);
  };

  return (
    <li
      className="flex items-center justify-between gap-3 py-[15px] pl-12 pr-8 cursor-pointer"
      onClick={defaultSearch}
      onKeyDown={enterToSearch}
    >
      <span className="text-sm">{searchHistory}</span>
      <XIcon onClick={deleteSearchHistory} />
    </li>
  );
}
