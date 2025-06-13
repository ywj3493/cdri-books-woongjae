import { useOutsideClickEffect } from "@/shared/hooks";
import { ArrowIcon } from "@/shared/ui";
import { Fragment, useRef, useState } from "react";

type SearchSelectOptions = "title" | "author" | "publisher";

interface DetailSearchSelectProps {
  selected: SearchSelectOptions;
  onChange: (value: SearchSelectOptions) => void;
}

export function DetailSearchSelect({
  selected,
  onChange,
}: DetailSearchSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectListRef = useRef<HTMLUListElement | null>(null);

  const titleMap = {
    title: "제목",
    author: "저자명",
    publisher: "출판사",
  };

  const openSelect = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  const selectOption = (option: SearchSelectOptions) => {
    onChange(option);
    setIsOpen(false);
  };

  useOutsideClickEffect(selectListRef, () => {
    setIsOpen(false);
  });

  return (
    <>
      <button
        type="button"
        className="flex justify-between items-center w-25 p-2 border-b border-cdri-primary"
        onClick={openSelect}
      >
        <span>{titleMap[selected]}</span>
        <ArrowIcon />
      </button>
      {isOpen && (
        <ul
          ref={selectListRef}
          className="absolute bg-cdri-white border shadow-lg w-25 z-10"
        >
          {(Object.keys(titleMap) as SearchSelectOptions[]).map((option) => {
            return (
              <Fragment key={`detail-search-select-option-${option}`}>
                {option !== selected && (
                  <li
                    onClick={(e) => {
                      e.stopPropagation();
                      selectOption(option);
                    }}
                    onKeyDown={() => selectOption(option)}
                  >
                    {titleMap[option]}
                  </li>
                )}
              </Fragment>
            );
          })}
        </ul>
      )}
    </>
  );
}
