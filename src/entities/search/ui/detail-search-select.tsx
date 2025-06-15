import { useOutsideClickEffect } from "@/shared/hooks";
import { ArrowIcon } from "@/shared/ui";
import { Fragment, useRef, useState } from "react";
import type { SearchTargetOptions } from "@/entities/search/types";
import { useSearchStore } from "@/features/search/hooks/use-search-store";

export function DetailSearchSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const selectListRef = useRef<HTMLUListElement | null>(null);

  const { modalSelectValue, setModalSelectValue } = useSearchStore();

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
    setModalSelectValue(option);
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
        <span>{selectOptionMap[modalSelectValue]}</span>
        <ArrowIcon />
      </button>
      {isOpen && (
        <ul
          ref={selectListRef}
          className="absolute bg-cdri-white border shadow-lg w-25 z-10"
        >
          {(Object.keys(selectOptionMap) as SearchTargetOptions[]).map(
            (option) => {
              return (
                <Fragment key={`detail-search-select-option-${option}`}>
                  {option !== modalSelectValue && (
                    <li
                      onClick={(event) => {
                        event.stopPropagation();
                        selectOption(option);
                      }}
                      onKeyDown={() => selectOption(option)}
                    >
                      {selectOptionMap[option]}
                    </li>
                  )}
                </Fragment>
              );
            },
          )}
        </ul>
      )}
    </>
  );
}
