export function FavoritesEmpty() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">찜한 책 목록</h1>
      <p className="text-gray-500">아직 찜한 책이 없습니다.</p>
      <p className="text-gray-500">책을 검색하여 찜해보세요!</p>
    </div>
  );
}
