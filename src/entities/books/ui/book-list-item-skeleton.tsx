export function BookListItemSkeleton() {
  return (
    <li className="grid grid-cols-[auto_1fr_auto] gap-12 items-start border-b border-[#D2D6DA] h-25 pl-12 pr-4 px-4 pt-4 animate-pulse">
      <div className="w-12 h-17 bg-cdri-gray animation-pulse rounded" />
      <div className="flex w-100 h-5 mt-5 bg-cdri-gray animate-pulse rounded" />
      <div className="flex justify-center items-center gap-4 mt-2">
        <div className="w-20 h-8 bg-cdri-gray animate-pulse rounded mr-4" />
        <div className="w-[115px] h-12 bg-cdri-gray animate-pulse rounded" />
        <div className="w-[115px] h-12 bg-cdri-gray animate-pulse rounded" />
      </div>
    </li>
  );
}
