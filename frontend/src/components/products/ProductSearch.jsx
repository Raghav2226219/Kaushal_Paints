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
    <div className="w-full">
      <label
        htmlFor="product-search"
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        Search Products
      </label>

      <input
        id="product-search"
        type="search"
        value={searchValue}
        onChange={(event) =>
          setSearchValue(event.target.value)
        }
        placeholder="Search by product, brand or category..."
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
      />
    </div>
  );
};

export default ProductSearch;