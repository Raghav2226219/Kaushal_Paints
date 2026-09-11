import { Link } from "react-router-dom";

import QuoteCartItem from "./QuoteCartItem";
import QuoteCartButton from "./QuoteCartButton";

import { useQuote } from "../../context/QuoteContext";

const QuoteCart = () => {
  const {
    quoteItems,
    quoteItemCount,
    clearQuote,
  } = useQuote();

  if (quoteItems.length === 0) {
    return (
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

        <div className="px-6 py-16 text-center sm:px-8 sm:py-20">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-2xl">
            🛒
          </div>

          <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Your Quote Cart is Empty
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
            Browse our products and add the items you need to your quote.
            You can review everything here before requesting a price.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white shadow-sm transition duration-200 hover:bg-indigo-600 hover:shadow-md"
          >
            Browse Products
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
          Kaushal Paints
        </p>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Quote Cart
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Review your selected products before requesting a quote.
            </p>
          </div>

          <div className="w-fit rounded-full border border-gray-200 bg-white px-3.5 py-2 shadow-sm">
            <span className="text-xs font-semibold text-gray-500">
              {quoteItems.length}{" "}
              {quoteItems.length === 1 ? "item" : "items"}
            </span>
          </div>
        </div>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {quoteItems.map((item) => (
          <QuoteCartItem
            key={`${item.productId}-${item.variantId}`}
            item={item}
          />
        ))}
      </div>

      {/* Quote Summary */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

        <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
          {/* Selected Products */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-lg">
                📦
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Selected Products
                </p>

                <p className="mt-1 text-lg font-bold text-gray-900">
                  {quoteItems.length}
                </p>
              </div>
            </div>
          </div>

          {/* Total Quantity */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-lg">
                🔢
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Total Quantity
                </p>

                <p className="mt-1 text-lg font-bold text-gray-900">
                  {quoteItemCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="p-5 sm:p-6">
          <div className="mb-5">
            <p className="text-sm font-semibold text-gray-900">
              Ready to request your quote?
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              We'll prepare your selected products and open WhatsApp with
              your quotation request.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <Link
              to="/products"
              className="text-center text-sm font-semibold text-gray-600 transition hover:text-gray-900"
            >
              ← Continue Shopping
            </Link>

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
              className="rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
            >
              Clear Cart
            </button>

            <QuoteCartButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCart;