import { useParams } from "react-router-dom";

export function BookDetailPage() {
  const { isbn } = useParams();

  return (
    <section className="mx-auto p-4 flex flex-col gap-6">
      <h1 className="text-cdri-title2">구매하기</h1>
      <p className="flex gap-4">
        ISBN: <span className="text-cdri-primary">{isbn}</span>
      </p>
    </section>
  );
}
