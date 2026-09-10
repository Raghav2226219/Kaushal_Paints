const ProductDetailsInfo = ({ product }) => {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
        {product.brand}
      </p>

      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {product.name}
      </h1>

      <p className="mt-3 text-sm font-medium text-gray-500">
        {product.category}
      </p>

      {product.description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
          {product.description}
        </p>
      )}
    </div>
  );
};

export default ProductDetailsInfo;