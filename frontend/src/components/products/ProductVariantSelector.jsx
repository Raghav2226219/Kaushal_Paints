import { useEffect, useMemo, useState } from "react";

const ProductVariantSelector = ({
  variants = [],
  onSelect,
}) => {
  const activeVariants = useMemo(
    () =>
      variants.filter(
        (variant) => variant.isActive !== false
      ),
    [variants]
  );

  const [selectedVariantId, setSelectedVariantId] =
    useState(null);

  useEffect(() => {
    setSelectedVariantId(null);
  }, [variants]);

  if (activeVariants.length === 0) {
    return (
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
        <p className="text-sm font-medium text-gray-700">
          No sizes are currently available.
        </p>

        <p className="mt-1 text-xs text-gray-500">
          Please contact us for availability.
        </p>
      </div>
    );
  }

  const handleSelect = (variant) => {
    setSelectedVariantId(variant.id);
    onSelect?.(variant);
  };

  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-gray-800">
        Select Size
      </p>

      <div className="flex flex-wrap gap-3">
        {activeVariants.map((variant) => {
          const isSelected =
            selectedVariantId === variant.id;

          return (
            <button
              key={variant.id}
              type="button"
              onClick={() => handleSelect(variant)}
              aria-pressed={isSelected}
              className={`rounded-xl border px-5 py-3 text-sm font-semibold transition duration-200 ${
                isSelected
                  ? "border-indigo-600 bg-indigo-600 text-white shadow-md"
                  : "border-gray-300 bg-white text-gray-700 hover:border-indigo-400 hover:bg-indigo-50"
              }`}
            >
              {variant.size}
            </button>
          );
        })}
      </div>

      {!selectedVariantId && (
        <p className="mt-3 text-xs text-gray-500">
          Select a size to continue.
        </p>
      )}
    </div>
  );
};

export default ProductVariantSelector;