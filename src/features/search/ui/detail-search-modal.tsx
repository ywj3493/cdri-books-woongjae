import { useEffect, useRef, useState } from "react";
import { Button, XIcon } from "@/shared/ui";
import { useOutsideClickEffect } from "@/shared/hooks";
import {
  type SearchTargetOptions,
  DetailSearchSelect,
} from "@/entities/search";
import { useSearchStore } from "../hooks";

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
    <div className="relative w-full h-auto">
      <Button variant="outline" className="h-9 w-18 " onClick={openModal}>
        상세검색
      </Button>
      {isOpen && (
        <div
          ref={modalContainerRef}
          className="absolute -left-30 bg-cdri-white mt-4 flex flex-col shadow-lg w-80 pt-2 px-6 pb-9 rounded-xl"
        >
          <div className="w-full flex justify-end items-center">
            <XIcon width={12} height={12} color={"gray"} onClick={closeModal} />
          </div>
          <div className="flex gap-1 items-center">
            <DetailSearchSelect
              selected={modalSelectValue}
              onSelect={changeModalSelectValue}
            />
            <input
              type="text"
              ref={searchInputRef}
              value={modalInputValue}
              placeholder="검색어 입력"
              className="w-full p-2 border-b border-b-cdri-primary focus:outline-none"
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
            className="mt-4 h-9 w-full text-cdri-caption text-cdri-white"
            onClick={detailSearchBooks}
          >
            검색하기
          </Button>
        </div>
      )}
    </div>
  );
}
