import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductVariantSelector from "./ProductVariantSelector";
import ProductQuoteButton from "./ProductQuoteButton";
import ProductQuantitySelector from "./ProductQuantitySelector";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <article className="product-card">
      <div className="product-card-content">
        <p className="product-brand">{product.brand}</p>

       <h3
  className="product-name"
  onClick={() => navigate(`/products/${product.id}`)}
>
  {product.name}
</h3>

        <p className="product-category">{product.category}</p>

        {product.description && (
          <p className="product-description">
            {product.description}
          </p>
        )}

        <ProductVariantSelector
  variants={product.variants}
  onSelect={setSelectedVariant}
/>

       <ProductQuoteButton
  product={product}
  selectedVariant={selectedVariant}
  quantity={quantity}
/>

        <ProductQuantitySelector
          value={quantity}
          onChange={setQuantity}
        />
      </div>
    </article>
  );
};

export default ProductCard;