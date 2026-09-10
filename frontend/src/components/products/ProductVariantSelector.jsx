import { useState } from "react";

const ProductVariantSelector = ({
  variants = [],
  onSelect,
}) => {
  const [selectedVariantId, setSelectedVariantId] =
    useState(null);

  if (variants.length === 0) {
    return null;
  }

  const handleSelect = (variant) => {
    setSelectedVariantId(variant.id);
    onSelect?.(variant);
  };

  return (
    <div>
      <p className="mb-3 text-sm font-medium text-gray-700">
        Available sizes:
      </p>

      <div className="flex flex-wrap gap-3">
        {variants.map((variant) => {
          const isSelected =
            selectedVariantId === variant.id;

          return (
            <button
              key={variant.id}
              type="button"
              onClick={() => handleSelect(variant)}
              className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition ${
                isSelected
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:border-gray-500 hover:bg-gray-50"
              }`}
            >
              {variant.size}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductVariantSelector;