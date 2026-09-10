import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { getProductById } from "../services/productService";

import ProductDetailsInfo from "../components/products/ProductDetailsInfo";
import ProductDetailsActions from "../components/products/ProductDetailsActions";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] =
    useState(null);

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
        console.error(
          "Fetch product details error:",
          error
        );

        setError("Unable to load product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm">
            <p className="text-sm font-medium text-gray-600">
              Loading product...
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-10 text-center">
            <p className="text-sm font-medium text-red-700">
              {error}
            </p>

            <button
              type="button"
              onClick={() => navigate("/products")}
              className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Back to Products
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-gray-200 bg-white px-6 py-10 text-center shadow-sm">
            <p className="text-sm font-medium text-gray-600">
              Product not found.
            </p>

            <button
              type="button"
              onClick={() => navigate("/products")}
              className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Back to Products
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">

        <button
          type="button"
          onClick={() => navigate("/products")}
          className="mb-8 text-sm font-medium text-gray-600 transition hover:text-gray-900"
        >
          ← Back to Products
        </button>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">

          <ProductDetailsInfo product={product} />

          <div className="mt-8 border-t border-gray-200 pt-8">
            <ProductDetailsActions
              product={product}
              selectedVariant={selectedVariant}
              onVariantSelect={(variant) => {
                setSelectedVariant(variant);
                setQuantity(1);
              }}
              quantity={quantity}
              onQuantityChange={setQuantity}
            />
          </div>

        </div>
      </div>
    </main>
  );
};

export default ProductDetails;