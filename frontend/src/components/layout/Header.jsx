import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { useQuote } from "../../context/QuoteContext";

import CustomerMenu from "./CustomerMenu";

const Header = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    user,
    isAuthenticated,
    logout,
  } = useAuth();

  const {
    quoteItemCount,
    quoteLineCount,
  } = useQuote();

  const handleLogout = async () => {
    try {
      await logout();

      setIsMenuOpen(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b border-gray-200 bg-white ${
          isAuthenticated ? "md:ml-72" : ""
        }`}
      >
        <nav className="flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            {isAuthenticated && (
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 md:hidden"
                aria-label="Open customer menu"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            )}

            <Link
              to="/"
              className="text-xl font-bold tracking-tight text-gray-900"
            >
              Kaushal Paints
            </Link>
          </div>

          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <span className="hidden text-sm font-medium text-gray-600 lg:block">
                Hi, {user?.name}
              </span>

              <Link
                to="/quote"
                className="rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-gray-700 sm:px-4"
              >
                <span className="sm:hidden">
                  Quote ({quoteLineCount})
                </span>

                <span className="hidden sm:inline">
                  Quote ({quoteLineCount} items,{" "}
                  {quoteItemCount} units)
                </span>
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                className="hidden rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-red-50 hover:text-red-600 md:block"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Login
            </Link>
          )}
        </nav>
      </header>

      {isAuthenticated && (
        <>
          {/* Desktop sidebar */}
          <aside className="fixed inset-y-0 left-0 z-50 hidden w-72 border-r border-gray-200 bg-white md:block">
            <div className="flex h-16 items-center border-b border-gray-200 px-5">
              <Link
                to="/"
                className="text-xl font-bold tracking-tight text-gray-900"
              >
                Kaushal Paints
              </Link>
            </div>

            <CustomerMenu />
          </aside>

          {/* Mobile overlay */}
          {isMenuOpen && (
            <button
              type="button"
              aria-label="Close customer menu"
              onClick={closeMenu}
              className="fixed inset-0 z-50 bg-black/40 md:hidden"
            />
          )}

          {/* Mobile drawer */}
          <aside
            className={`fixed inset-y-0 left-0 z-[60] w-72 bg-white shadow-xl transition-transform duration-300 md:hidden ${
              isMenuOpen
                ? "translate-x-0"
                : "-translate-x-full"
            }`}
          >
            <div className="flex h-16 items-center justify-between border-b border-gray-200 px-5">
              <Link
                to="/"
                onClick={closeMenu}
                className="text-xl font-bold tracking-tight text-gray-900"
              >
                Kaushal Paints
              </Link>

              <button
                type="button"
                onClick={closeMenu}
                className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                aria-label="Close customer menu"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <CustomerMenu
              onNavigate={closeMenu}
            />

            <div className="border-t border-gray-200 p-4">
              <button
                type="button"
                onClick={handleLogout}
                className="w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                Logout
              </button>
            </div>
          </aside>
        </>
      )}
    </>
  );
};

export default Header;