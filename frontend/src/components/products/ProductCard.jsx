import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/products/${product.id}`);
  };

  const activeVariants =
    product.variants?.filter((variant) => variant.isActive !== false) || [];

  return (
    <article
      onClick={handleProductClick}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl"
    >
      {/* Top accent */}
      <div className="h-1.5 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500" />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Brand + Category */}
        <div className="flex items-start justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
            {product.brand}
          </p>

          {product.category && (
            <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-semibold text-gray-600">
              {product.category}
            </span>
          )}
        </div>

        {/* Product Name */}
        <h3 className="mt-4 text-xl font-bold tracking-tight text-gray-900 transition duration-200 group-hover:text-indigo-600">
          {product.name}
        </h3>

        {/* Description */}
        {product.description && (
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
            {product.description}
          </p>
        )}

        {/* Pack Sizes */}
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Available Sizes
          </p>

          {activeVariants.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {activeVariants.map((variant) => (
                <span
                  key={variant.id}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-700"
                >
                  {variant.size}
                </span>
              ))}
            </div>
          ) : (
            <p className="mt-2 text-sm text-gray-500">
              Sizes available on request
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition duration-200 group-hover:bg-indigo-600">
            <span>View Product</span>

            <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;