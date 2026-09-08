import { useEffect, useState } from "react";

const ProductSearch = ({ value, onChange }) => {
  const [searchValue, setSearchValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(searchValue);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchValue, onChange]);

  return (
    <div className="product-search">
      <label htmlFor="product-search">
        Search Products
      </label>

      <input
        id="product-search"
        type="search"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Search by product, brand or category..."
      />
    </div>
  );
};

export default ProductSearch;