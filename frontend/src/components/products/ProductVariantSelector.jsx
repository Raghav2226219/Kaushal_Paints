import { useState } from "react";

const ProductVariantSelector = ({ variants = [], onSelect }) => {
  const [selectedVariantId, setSelectedVariantId] = useState(null);

  if (variants.length === 0) {
    return null;
  }

  const handleSelect = (variant) => {
    setSelectedVariantId(variant.id);
    onSelect?.(variant);
  };

  return (
    <div className="product-variant-selector">
      <span>Available sizes:</span>

      <div className="product-size-list">
        {variants.map((variant) => (
          <button
            key={variant.id}
            type="button"
            className={
              selectedVariantId === variant.id
                ? "product-size selected"
                : "product-size"
            }
            onClick={() => handleSelect(variant)}
          >
            {variant.size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductVariantSelector;