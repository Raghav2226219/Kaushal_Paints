import ProductVariantSelector from "./ProductVariantSelector";
import ProductQuantitySelector from "./ProductQuantitySelector";
import ProductQuoteButton from "./ProductQuoteButton";

const ProductDetailsActions = ({
  product,
  selectedVariant,
  onVariantSelect,
  quantity,
  onQuantityChange,
}) => {
  return (
    <div className="product-details-actions">
      <ProductVariantSelector
        variants={product.variants}
        onSelect={onVariantSelect}
      />

      <ProductQuantitySelector
        value={quantity}
        onChange={onQuantityChange}
      />

      <ProductQuoteButton
        product={product}
        selectedVariant={selectedVariant}
        quantity={quantity}
      />
    </div>
  );
};

export default ProductDetailsActions;