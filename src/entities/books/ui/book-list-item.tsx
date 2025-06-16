import { useState } from "react";
import type { KakaoBookDocument } from "@/features/books";
import { ArrowIcon, Button } from "@/shared/ui";
import { FavoriteImage } from "@/entities/favorites";
import { Book } from "../model/book";
import { DetailPrice } from "./detail-price";
interface BookListItemProps {
  book: KakaoBookDocument;
  isFavorite: boolean;
  onToggleFavorite: (book: Book) => void;
}

export function BookListItem({
  book,
  isFavorite,
  onToggleFavorite,
}: BookListItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const bookEntity = Book.create(book);
  const { title, authors, thumbnail, salePriceTag, priceTag, contents } =
    bookEntity;

  const toggleFavorite = () => {
    onToggleFavorite?.(bookEntity);
  };

  return (
    <li
      className={`grid grid-cols-[auto_1fr_auto] gap-12 items-start border-b border-[#D2D6DA] pl-12 pr-4 px-4 pt-4 transition-all duration-300 ${isExpanded ? "h-[344px]" : "h-25"}`}
    >
      {/* 썸네일 부분 */}
      <FavoriteImage
        src={thumbnail}
        alt={title}
        isFavorite={isFavorite}
        onChangeFavorite={toggleFavorite}
        className={`transition-all duration-300 ${isExpanded ? "w-52.5 h-70" : "w-12 h-17"} object-cover`}
      />
      {/* 제목, 저자, 책 소개 부분 */}
      <div className="flex flex-col gap-2 h-full mt-5">
        <div className="flex items-center gap-1">
          <h3 className="text-cdri-title3">{title}</h3>
          <p className="text-cdri-body2 text-cdri-text-subtitle">
            {authors.join(", ")}
          </p>
        </div>
        {isExpanded && (
          <div className="flex flex-col gap-3 mt-4">
            <h4 className="text-cdri-title3">책 소개</h4>
            <p className="text-cdri-small">{contents}</p>
          </div>
        )}
      </div>

      {/* 가격 및 버튼 부분 */}
      {isExpanded ? (
        <div className="flex flex-col justify-between items-end h-full pb-10">
          <Button
            variant="secondary"
            className="mb-2"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            상세보기{" "}
            <ArrowIcon
              className={`mt-1 transform transition-transform ${isExpanded ? "rotate-180" : ""}`}
            />
          </Button>

          <div className="flex flex-col items-end gap-2">
            <DetailPrice priceTag={priceTag} salePriceTag={salePriceTag} />
            <Button
              variant="primary"
              className={`w-60 py-3 ${isExpanded ? "" : "hidden"}`}
            >
              구매하기
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex items-center">
          <p className="text-cdri-title3 mr-16">
            {salePriceTag ? salePriceTag : priceTag}
          </p>
          <div>
            <Button
              variant="primary"
              className={`w-[115px] py-3 ${isExpanded ? "hidden" : ""}`}
            >
              구매하기
            </Button>
            <Button
              variant="secondary"
              className="ml-2 gap-1 w-[115px] py-3"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              상세보기{" "}
              <ArrowIcon
                className={`mt-1 transform transition-transform ${isExpanded ? "rotate-180" : ""}`}
              />
            </Button>
          </div>
        </div>
      )}
    </li>
  );
}
