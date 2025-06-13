interface EmptyBookListProps {
  message: string;
}

export function EmptyBookList({ message }: EmptyBookListProps) {
  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <img src="/assets/icon_book.png" alt="책 아이콘" width={80} height={80} />
      <p className="text-cdri-text-secondary">{message}</p>
    </section>
  );
}
