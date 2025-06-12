import { SearchBooks } from "@/pages/books/search-books";
import { Header } from "@/widgets/header";
import { FavoriteBooks } from "@/pages/books/favorite-books";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <main className="font-display">
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/search" />} />
          <Route path="/search" element={<SearchBooks />} />
          <Route path="/favorites" element={<FavoriteBooks />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
