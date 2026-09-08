const ProductDetailsInfo = ({ product }) => {
  return (
    <div className="product-details-info">
      <p className="product-details-brand">
        {product.brand}
      </p>

      <h1 className="product-details-name">
        {product.name}
      </h1>

      <p className="product-details-category">
        {product.category}
      </p>

      {product.description && (
        <p className="product-details-description">
          {product.description}
        </p>
      )}
    </div>
  );
};

export default ProductDetailsInfo;