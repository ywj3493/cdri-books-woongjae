import { useRef, useState } from "react";
import { useOutsideClickEffect } from "@/shared/hooks";
import { ArrowIcon } from "@/shared/ui";
import type { SearchTargetOptions } from "@/entities/search";

interface DetailSearchSelectProps {
  selected: SearchTargetOptions;
  onSelect?: (option: SearchTargetOptions) => void;
}

export function DetailSearchSelect({
  selected,
  onSelect,
}: DetailSearchSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectListRef = useRef<HTMLUListElement | null>(null);

  const selectOptionMap = {
    title: "제목",
    author: "저자명",
    publisher: "출판사",
  };

  const openSelect = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  const selectOption = (option: SearchTargetOptions) => {
    onSelect?.(option);
    setIsOpen(false);
  };

  useOutsideClickEffect(selectListRef, () => {
    setIsOpen(false);
  });

  return (
    <div className="relative">
      <button
        type="button"
        className="flex justify-between items-center w-25 p-2 border-b border-[#D2D6DA]"
        onClick={openSelect}
      >
        <span>{selectOptionMap[selected]}</span>
        <ArrowIcon />
      </button>
      {isOpen && (
        <ul
          ref={selectListRef}
          className="absolute mt-1 px-2 py-1 shadow-xl bg-cdri-white border border-cdri-light-gray w-25 z-10 text-[#8D94A0] flex flex-col gap-1"
        >
          {(Object.keys(selectOptionMap) as SearchTargetOptions[]).map(
            (option) => {
              if (option !== selected) {
                return (
                  <li
                    key={`detail-search-select-option-${option}`}
                    onClick={(event) => {
                      event.stopPropagation();
                      selectOption(option);
                    }}
                    onKeyDown={() => selectOption(option)}
                  >
                    {selectOptionMap[option]}
                  </li>
                );
              }
              return null;
            },
          )}
        </ul>
      )}
    </div>
  );
}
