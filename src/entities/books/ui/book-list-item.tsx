import type { KakaoBookDocument } from "@/features/books/types";
import { ArrowIcon, Button } from "@/shared/ui";
import { Book } from "../model/book";

interface BookItemProps {
  book: KakaoBookDocument;
}

export function BookItem({ book }: BookItemProps) {
  const { title, authors, thumbnail, salePriceTag } = Book.create(book);
  return (
    <li className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center border-b border-[#D2D6DA] h-25 pl-12 pr-4 px-4">
      <img src={thumbnail} alt={title} className="w-16 h-24 object-cover" />
      <div className="ml-12 flex gap-4 items-center">
        <h3 className="text-cdri-title3">{title}</h3>
        <p className="text-cdri-body2 text-cdri-secondry">
          {authors.join(", ")}
        </p>
      </div>
      <p className="text-cdri-title3 mr-16">{salePriceTag}</p>
      <Button variant="primary">구매하기</Button>
      <Button variant="secondary" className="ml-2 gap-1">
        상세보기 <ArrowIcon className="mt-1" />
      </Button>
    </li>
  );
}
