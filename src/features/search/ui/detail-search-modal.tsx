import { DetailSearchSelect } from "@/entities/search/ui";
import { useOutsideClickEffect } from "@/shared/hooks";
import { Button, XIcon } from "@/shared/ui";
import { useEffect, useRef, useState } from "react";
import { useSearchStore } from "../hooks/use-search-store";
import type { SearchTargetOptions } from "@/entities/search/types";

export function DetailSearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const openRef = useRef(false);

  const {
    modalInputValue,
    modalSelectValue,
    setModalInputValue,
    setModalSelectValue,
    modalSearch,
    resetPageSearchInput,
  } = useSearchStore();

  const openModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const changeModalInputValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setModalInputValue(event.target.value);
  };

  const changeModalSelectValue = (value: SearchTargetOptions) => {
    setModalSelectValue(value);
  };

  const detailSearchBooks = () => {
    modalSearch();
    closeModal();
  };

  useOutsideClickEffect(modalContainerRef, closeModal);

  useEffect(() => {
    if (isOpen && !openRef.current) {
      openRef.current = true;
      resetPageSearchInput();
    } else if (!isOpen) {
      openRef.current = false;
    }
  }, [resetPageSearchInput, isOpen]);

  return (
    <>
      <Button variant="outline" onClick={openModal}>
        상세 검색
      </Button>
      {isOpen && (
        <div
          ref={modalContainerRef}
          className="flex flex-col shadow-lg max-w-80 px-6 pb-9 rounded-xl"
        >
          <div className="w-full flex justify-end items-center">
            <XIcon width={12} height={12} color={"gray"} onClick={closeModal} />
          </div>
          <div className="flex">
            <DetailSearchSelect
              selected={modalSelectValue}
              onSelect={changeModalSelectValue}
            />
            <input
              type="text"
              ref={searchInputRef}
              value={modalInputValue}
              placeholder="검색어를 입력하세요"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cdri-primary"
              onChange={changeModalInputValue}
              onKeyDown={(event) => {
                if (event.key !== "Enter") {
                  return;
                }
                detailSearchBooks();
              }}
            />
          </div>
          <Button
            variant="primary"
            className="mt-4"
            onClick={detailSearchBooks}
          >
            검색 하기
          </Button>
        </div>
      )}
    </>
  );
}
