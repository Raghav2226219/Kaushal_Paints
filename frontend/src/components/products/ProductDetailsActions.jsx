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
    <div className="max-w-lg">
      <ProductVariantSelector
        variants={product.variants}
        onSelect={onVariantSelect}
      />

      <div className="mt-6">
        <ProductQuantitySelector
          value={quantity}
          onChange={onQuantityChange}
        />
      </div>

      <button
        type="button"
        onClick={handleAddToQuote}
        disabled={!selectedVariant}
        className="mt-6 w-full rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 sm:w-auto"
      >
        {addedToQuote
          ? "✓ Added to Quote"
          : "Add to Quote"}
      </button>

      {addedToQuote && (
        <p className="mt-3 text-sm font-medium text-green-600">
          ✓ Added to quote
        </p>
      )}
    </div>
  );
};

export default ProductDetailsActions;