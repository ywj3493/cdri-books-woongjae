interface BookItemDetailsProps {
  book: KakaoBookDocument;
}

export function BookItemDetails({ book }: BookItemDetailsProps) {
  return (
    <li className="grid grid-cols-[auto_1fr_auto] h-86">
      <img src={thumbnail} alt={title} className="w-16 h-24 object-cover" />
    </li>
  );
}
