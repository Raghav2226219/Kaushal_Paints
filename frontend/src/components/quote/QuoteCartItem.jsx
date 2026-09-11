import { useQuote } from "../../context/QuoteContext";

const QuoteCartItem = ({ item }) => {
  const { updateQuoteQuantity, removeFromQuote } = useQuote();

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:border-gray-300 hover:shadow-md">
      {/* Accent */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />

      <div className="p-5 pl-6 sm:p-6 sm:pl-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Product Information */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                {item.brand}
              </span>

              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-semibold text-gray-600">
                {item.size}
              </span>
            </div>

            <h3 className="mt-3 text-lg font-bold tracking-tight text-gray-900">
              {item.productName}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Pack size:{" "}
              <span className="font-medium text-gray-700">
                {item.size}
              </span>
            </p>
          </div>

          {/* Quantity + Remove */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:justify-end">
            {/* Quantity */}
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Quantity
              </p>

              <div className="flex w-fit items-center overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() =>
                    updateQuoteQuantity(
                      item.productId,
                      item.variantId,
                      item.quantity - 1,
                    )
                  }
                  disabled={item.quantity <= 1}
                  className="flex h-10 w-10 items-center justify-center text-lg font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-300"
                  aria-label={`Decrease quantity of ${item.productName}`}
                >
                  −
                </button>

                <span className="flex h-10 min-w-12 items-center justify-center border-x border-gray-300 px-3 text-sm font-bold text-gray-900">
                  {item.quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    updateQuoteQuantity(
                      item.productId,
                      item.variantId,
                      item.quantity + 1,
                    )
                  }
                  className="flex h-10 w-10 items-center justify-center text-lg font-medium text-gray-700 transition hover:bg-gray-50"
                  aria-label={`Increase quantity of ${item.productName}`}
                >
                  +
                </button>
              </div>
            </div>

            {/* Remove */}
            <button
              type="button"
              onClick={() => {
                const confirmed = window.confirm(
                  `Are you sure you want to remove "${item.productName} - ${item.size}" from your quote cart?`,
                );

                if (confirmed) {
                  removeFromQuote(item.productId, item.variantId);
                }
              }}
              className="self-start rounded-lg px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 hover:text-red-700 sm:self-end lg:self-auto"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default QuoteCartItem;