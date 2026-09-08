const ProductBrandFilter = ({ value, onChange }) => {
  const brands = [
    "Asian Paints",
    "Berger",
    "Nerolac",
    "Dulux",
    "Indigo Paints",
  ];

  return (
    <div className="product-brand-filter">
      <label htmlFor="product-brand">
        Brand
      </label>

      <select
        id="product-brand"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">All Brands</option>

        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductBrandFilter;