import { useQuote } from "../../context/QuoteContext";

const QuoteCartItem = ({ item }) => {
  const {
    updateQuoteQuantity,
    removeFromQuote,
  } = useQuote();

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        {/* Product Information */}
        <div className="min-w-0">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
            {item.brand}
          </p>

          <h3 className="text-base font-semibold text-gray-900">
            {item.productName}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Size: {item.size}
          </p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-600">
            Quantity
          </span>

          <div className="flex items-center overflow-hidden rounded-lg border border-gray-300 bg-white">
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
              className="flex h-9 w-9 items-center justify-center text-lg font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-300"
              aria-label={`Decrease quantity of ${item.productName}`}
            >
              −
            </button>

            <span className="flex h-9 min-w-10 items-center justify-center border-x border-gray-300 px-2 text-sm font-semibold text-gray-900">
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
              className="flex h-9 w-9 items-center justify-center text-lg font-medium text-gray-700 transition hover:bg-gray-50"
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
              removeFromQuote(
                item.productId,
                item.variantId,
              );
            }
          }}
          className="text-left text-sm font-medium text-red-600 transition hover:text-red-700 sm:text-center"
        >
          Remove
        </button>

      </div>
    </div>
  );
};

export default QuoteCartItem;