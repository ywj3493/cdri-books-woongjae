import { DetailSearchSelect } from "@/entities/search/ui/detail-search-select";
import { useOutsideClickEffect } from "@/shared/hooks";
import { Button, XIcon } from "@/shared/ui";
import { useRef, useState } from "react";

export function DetailSearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<"title" | "author" | "publisher">(
    "title",
  );
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useOutsideClickEffect(modalRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <div>
      <Button variant="outline" onClick={openModal}>
        상세 검색
      </Button>
      {isOpen && (
        <div
          ref={modalRef}
          className="flex flex-col shadow-lg max-w-80 px-6 pb-9 rounded-xl"
        >
          <div className="w-full flex justify-end items-center">
            <XIcon width={12} height={12} color={"gray"} onClick={closeModal} />
          </div>
          <div className="flex">
            <DetailSearchSelect
              selected={selected}
              onChange={(selected) => setSelected(selected)}
            />
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cdri-primary"
              onFocus={() => {
                console.log("Input focused");
              }}
              onBlur={() => {
                console.log("Input blurred");
              }}
            />
          </div>
          <Button
            variant="primary"
            className="mt-4"
            onClick={() => {
              console.log("검색 실행");
              closeModal();
            }}
          >
            검색 하기
          </Button>
        </div>
      )}
    </div>
  );
}
