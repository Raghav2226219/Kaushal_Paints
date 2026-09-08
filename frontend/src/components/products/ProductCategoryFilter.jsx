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
    <div className="product-category-filter">
      <label htmlFor="product-category">
        Category
      </label>

      <select
        id="product-category"
        value={value}
        onChange={(event) => onChange(event.target.value)}
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