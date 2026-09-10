import { Link } from "react-router-dom";

import QuoteCartItem from "./QuoteCartItem";
import QuoteCartButton from "./QuoteCartButton";

import { useQuote } from "../../context/QuoteContext";

const QuoteCart = () => {
  const {
    quoteItems,
    clearQuote,
  } = useQuote();

  if (quoteItems.length === 0) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm sm:px-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Quote Cart
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          Your quote cart is empty.
        </p>

        <Link
          to="/products"
          className="mt-6 inline-flex rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
          Kaushal Paints
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Quote Cart
        </h1>

        <p className="mt-3 text-sm text-gray-600">
          Review your selected products before requesting a quote.
        </p>
      </div>

      <div className="space-y-4">
        {quoteItems.map((item) => (
          <QuoteCartItem
            key={`${item.productId}-${item.variantId}`}
            item={item}
          />
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          to="/products"
          className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
        >
          ← Continue Shopping
        </Link>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => {
              const confirmed = window.confirm(
                "Are you sure you want to clear your quote cart?",
              );

              if (confirmed) {
                clearQuote();
              }
            }}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
          >
            Clear Cart
          </button>

          <QuoteCartButton />
        </div>
      </div>
    </div>
  );
};

export default QuoteCart;