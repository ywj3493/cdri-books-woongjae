import { EmptyBookList } from "@/entities/books/ui";
import { BookList } from "@/features/books";
import { useFavoritesStore } from "@/features/favorites/hooks/use-favorites-store";

export function FavoriteBooksPage() {
  const { favorites } = useFavoritesStore();
  return (
    <section className="h-screen max-w-240 mx-auto p-4 flex flex-col gap-6">
      <h1 className="text-cdri-title2">내가 찜한 책</h1>
      <p className="flex gap-4">
        찜한 책
        <span>
          총 <span className="text-cdri-primary">{21}</span>건
        </span>
      </p>
      <div className="max-w-240 w-full">
        {favorites.length > 0 ? (
          <BookList bookList={favorites} />
        ) : (
          <EmptyBookList message="찜한 책이 없습니다." />
        )}
      </div>
    </section>
  );
}
