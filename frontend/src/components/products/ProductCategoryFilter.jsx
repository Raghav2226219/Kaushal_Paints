const ProductCategoryFilter = ({ value, onChange }) => {
  const categories = [
    "Interior Wall Paint",
    "Exterior Paint",
    "Enamel",
    "Wood Paint",
    "Metal Paint",
    "Wall Putty",
    "Primer",
    "Waterproofing",
    "Thinner",
    "Brushes",
    "Rollers",
    "Painting Accessories",
  ];

  return (
    <div className="w-full">
      <label
        htmlFor="product-category"
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        Category
      </label>

      <select
        id="product-category"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
      >
        <option value="">All Categories</option>

        {categories.map((category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductCategoryFilter;