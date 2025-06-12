import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="grid grid-cols-3 justify-between items-center p-6">
      <h1 className="text-2xl text-black font-bold">CERTICOS BOOKS</h1>
      <nav className="flex gap-14 text-body1 items-center justify-center">
        <Link
          className={`${currentPath === "/search" ? "border-b border-cdri-primary py-1" : ""}`}
          to="/search"
        >
          도서 검색
        </Link>
        <Link
          className={`${currentPath === "/favorites" ? "border-b border-cdri-primary py-1" : ""}`}
          to="/favorites"
        >
          내가 찜한 책
        </Link>
      </nav>
    </header>
  );
}
