interface DetailPriceProps {
  priceTag: string;
  salePriceTag?: string;
}

export function DetailPrice({ priceTag, salePriceTag }: DetailPriceProps) {
  return (
    <>
      <p className="text-xl flex items-center gap-2">
        <span className="text-cdri-text-subtitle text-cdri-tiny">원가</span>{" "}
        <span className={salePriceTag ? "line-through" : undefined}>
          {priceTag}
        </span>
      </p>
      {salePriceTag && (
        <p className="text-xl font-bold flex items-center gap-4">
          <span className="text-cdri-text-subtitle text-cdri-tiny">할인가</span>{" "}
          {salePriceTag}
        </p>
      )}
    </>
  );
}
