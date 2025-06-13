import { XIcon } from "@/shared/ui";

export function SearchHistoryItem({
  searchHistory,
  onClick,
  onClickDelete,
}: {
  searchHistory: string;
  onClick: (searchHistory: string) => void;
  onClickDelete: (searchHistory: string) => void;
}) {
  const enterToSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onClick(searchHistory);
    }
  };

  return (
    <li
      className="flex items-center justify-between gap-3 py-[15px] pl-12 pr-8 cursor-pointer"
      onClick={() => onClick(searchHistory)}
      onKeyDown={enterToSearch}
    >
      <span className="text-sm">{searchHistory}</span>
      <XIcon
        onClick={(e) => {
          e.stopPropagation();
          onClickDelete(searchHistory);
        }}
      />
    </li>
  );
}
