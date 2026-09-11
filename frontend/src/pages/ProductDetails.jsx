import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getProductById } from "../services/productService";

import ProductDetailsInfo from "../components/products/ProductDetailsInfo";
import ProductDetailsActions from "../components/products/ProductDetailsActions";

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
        setSelectedVariant(null);
        setQuantity(1);
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
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-gray-900" />

            <p className="mt-4 text-sm font-medium text-gray-600">
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
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-10 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-xl">
              !
            </div>

            <p className="mt-4 text-sm font-semibold text-red-700">
              {error}
            </p>

            <button
              type="button"
              onClick={() => navigate("/products")}
              className="mt-5 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700"
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
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-10 text-center shadow-sm">
            <p className="text-sm font-medium text-gray-600">
              Product not found.
            </p>

            <button
              type="button"
              onClick={() => navigate("/products")}
              className="mt-5 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700"
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
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">

        {/* Back */}
        <button
          type="button"
          onClick={() => navigate("/products")}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-gray-900"
        >
          <span className="text-lg">←</span>
          Back to Products
        </button>

        {/* Product */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

          {/* Top Accent */}
          <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

          <div className="grid lg:grid-cols-5">

            {/* Product Information */}
            <section className="border-b border-gray-200 p-6 sm:p-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-10">
              <ProductDetailsInfo product={product} />
            </section>

            {/* Selection Area */}
            <section className="bg-gray-50/70 p-6 sm:p-8 lg:col-span-2 lg:p-10">
              <div className="mb-6">
                <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600 shadow-sm">
                  Price available on request
                </span>

                <h2 className="mt-4 text-xl font-bold tracking-tight text-gray-900">
                  Select your requirements
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Choose the required pack size and quantity to add this
                  product to your quotation.
                </p>
              </div>

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

              <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Quote information
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  We'll share the current price and availability after you
                  submit your quotation.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;