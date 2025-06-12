export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="font-noto-sans-kr flex flex-col justify-center items-center">
      {children}
    </main>
  );
}
