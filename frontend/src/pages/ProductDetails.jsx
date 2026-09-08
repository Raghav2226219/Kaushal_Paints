import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { getProductById } from "../services/productService";
import ProductVariantSelector from "../components/products/ProductVariantSelector";
import ProductQuantitySelector from "../components/products/ProductQuantitySelector";
import ProductQuoteButton from "../components/products/ProductQuoteButton";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getProductById(id);

        setProduct(data.product);
      } catch (error) {
        console.error("Fetch product details error:", error);
        setError("Unable to load product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <main className="product-details-page">
        <p>Loading product...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="product-details-page">
        <p>{error}</p>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="product-details-page">
        <p>Product not found.</p>
      </main>
    );
  }

  return (
    <main className="product-details-page">
      <button
  type="button"
  onClick={() => navigate("/products")}
>
  ← Back to Products
</button>

      <p>{product.brand}</p>

      <h1>{product.name}</h1>

      <p>{product.category}</p>

      {product.description && (
        <p>{product.description}</p>
      )}

      <ProductVariantSelector
        variants={product.variants}
        onSelect={setSelectedVariant}
      />

      <ProductQuantitySelector
  value={quantity}
  onChange={setQuantity}
/>

      <ProductQuoteButton
        product={product}
        selectedVariant={selectedVariant}
        quantity={quantity}
      />

    </main>
  );
};

export default ProductDetails;