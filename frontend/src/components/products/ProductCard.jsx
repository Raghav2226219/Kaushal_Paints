import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <article
      onClick={handleProductClick}
      className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md"
    >
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
          {product.brand}
        </p>

        <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-gray-700">
          {product.name}
        </h3>
      </div>
    </article>
  );
};

export default ProductCard;