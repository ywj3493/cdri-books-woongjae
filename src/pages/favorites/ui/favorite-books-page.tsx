import { EmptyBookList } from "@/entities/books";
import { BookList } from "@/features/books";
import { useFavoritesStore } from "@/features/favorites";

export function FavoriteBooksPage() {
  const { favorites } = useFavoritesStore();
  const favoriteCount = favorites.length;
  return (
    <section className="mx-auto p-4 flex flex-col gap-6">
      <h1 className="text-cdri-title2">내가 찜한 책</h1>
      <p className="flex gap-4">
        찜한 책
        <span>
          총 <span className="text-cdri-primary">{favoriteCount}</span>건
        </span>
      </p>
      {favorites.length > 0 ? (
        <BookList bookList={favorites} />
      ) : (
        <EmptyBookList message="찜한 책이 없습니다." />
      )}
    </section>
  );
}
