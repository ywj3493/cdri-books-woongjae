import { XIcon } from "@/shared/ui";

interface SearchHistoryItemProps {
  searchHistory: string;
  onClickHistory?: (searchHistory: string) => void;
  onClickDelete?: (searchHistory: string) => void;
}

export function SearchHistoryItem({
  searchHistory,
  onClickHistory,
  onClickDelete,
}: SearchHistoryItemProps) {
  const enterToSearch = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onClickHistory?.(searchHistory);
    }
  };

  const defaultSearch = () => {
    onClickHistory?.(searchHistory);
  };

  const deleteSearchHistory = (event: React.MouseEvent) => {
    event.stopPropagation();
    onClickDelete?.(searchHistory);
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
