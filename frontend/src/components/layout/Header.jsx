import { Link } from "react-router-dom";
import { useQuote } from "../../context/QuoteContext";

const Header = () => {
  const {
    quoteItemCount,
    quoteLineCount,
  } = useQuote();

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-gray-900"
        >
          Kaushal Paints
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <Link
            to="/products"
            className="hidden text-sm font-medium text-gray-600 transition hover:text-gray-900 sm:block"
          >
            Products
          </Link>

          <Link
            to="/quote"
            className="rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-gray-700 sm:px-4"
          >
            <span className="sm:hidden">
              Quote ({quoteLineCount})
            </span>

            <span className="hidden sm:inline">
              Quote ({quoteLineCount} items, {quoteItemCount} units)
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;