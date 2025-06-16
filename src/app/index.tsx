import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "@/widgets/header";
import { Layout } from "@/widgets/layout";
import { SearchBooksPage } from "@/pages/search";
import { FavoriteBooksPage } from "@/pages/favorites";
import { QueryProvider } from "@/shared/providers";
import { BookDetailPage } from "@/pages/books";

export default function App() {
  return (
    <main className="font-noto-sans-kr">
      <QueryProvider>
        <BrowserRouter
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <Header />
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/search" />} />
              <Route path="/search" element={<SearchBooksPage />} />
              <Route path="/favorites" element={<FavoriteBooksPage />} />
              <Route path="/books/:isbn" element={<BookDetailPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </QueryProvider>
    </main>
  );
}
