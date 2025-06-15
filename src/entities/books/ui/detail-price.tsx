interface DetailPriceProps {
  priceTag: string;
  salePriceTag?: string;
}

export function DetailPrice({ priceTag, salePriceTag }: DetailPriceProps) {
  return (
    <>
      <p className="text-xl flex items-center gap-2">
        <span className="text-cdri-text-subtitle text-cdri-small">원가</span>{" "}
        <span className={salePriceTag && "line-through"}>{priceTag}</span>
      </p>
      {salePriceTag && (
        <p className="text-xl font-bold flex items-center gap-4">
          <span className="text-cdri-text-subtitle text-cdri-small">
            할인가
          </span>{" "}
          {salePriceTag}
        </p>
      )}
    </>
  );
}
