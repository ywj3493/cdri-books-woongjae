interface EmptyBookListProps {
  message: string;
}

export function EmptyBookList({ message }: EmptyBookListProps) {
  return (
    <section className="flex flex-col items-center justify-center gap-6 mx-auto px-4 w-240 text-center">
      <img src="/assets/icon_book.png" alt="책 아이콘" className="w-20 h-20" />
      <p className="text-cdri-text-secondary text-center">{message}</p>
    </section>
  );
}
