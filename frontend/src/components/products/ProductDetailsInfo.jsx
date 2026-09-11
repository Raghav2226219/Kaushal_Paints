const ProductDetailsInfo = ({ product }) => {
  const activeVariants =
    product.variants?.filter(
      (variant) => variant.isActive !== false
    ) || [];

  return (
    <div className="flex h-full flex-col">

      {/* Brand */}
      <div>
        <span className="inline-flex rounded-full bg-gray-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-600">
          {product.brand}
        </span>
      </div>

      {/* Product Name */}
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        {product.name}
      </h1>

      {/* Category */}
      {product.category && (
        <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-indigo-600">
          {product.category}
        </p>
      )}

      {/* Description */}
      {product.description && (
        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600">
          {product.description}
        </p>
      )}

      {/* Available Sizes Summary */}
      {activeVariants.length > 0 && (
        <div className="mt-auto pt-10">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Available Pack Sizes
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {activeVariants.map((variant) => (
              <span
                key={variant.id}
                className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-700"
              >
                {variant.size}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsInfo;