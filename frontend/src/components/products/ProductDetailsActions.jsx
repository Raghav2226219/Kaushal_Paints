import { useState } from "react";

import { useQuote } from "../../context/QuoteContext";

import ProductVariantSelector from "./ProductVariantSelector";
import ProductQuantitySelector from "./ProductQuantitySelector";

const ProductDetailsActions = ({
  product,
  selectedVariant,
  onVariantSelect,
  quantity,
  onQuantityChange,
}) => {
  const { addToQuote } = useQuote();

  const [addedToQuote, setAddedToQuote] = useState(false);

  const handleAddToQuote = () => {
    if (!selectedVariant) {
      return;
    }

    addToQuote({
      product,
      variant: selectedVariant,
      quantity,
    });

    setAddedToQuote(true);

    setTimeout(() => {
      setAddedToQuote(false);
    }, 2000);
  };

  return (
    <div>
      {/* Variant */}
      <ProductVariantSelector
        variants={product.variants}
        onSelect={onVariantSelect}
      />

      {/* Quantity */}
      <div className="mt-7">
        <ProductQuantitySelector
          value={quantity}
          onChange={onQuantityChange}
        />
      </div>

      {/* Add to Quote */}
      <button
        type="button"
        onClick={handleAddToQuote}
        disabled={!selectedVariant}
        className="mt-7 flex w-full items-center justify-center rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-bold text-white shadow-sm transition duration-200 hover:bg-indigo-600 hover:shadow-md disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
      >
        {addedToQuote ? (
          <>
            <span className="mr-2 text-base">✓</span>
            Added to Quote
          </>
        ) : (
          "Add to Quote"
        )}
      </button>

      {/* Confirmation */}
      {addedToQuote && (
        <div className="mt-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3">
          <p className="text-sm font-semibold text-green-700">
            Product added to your quote.
          </p>

          <p className="mt-1 text-xs text-green-600">
            You can continue shopping or open your Quote Cart.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsActions;