const ProductQuantitySelector = ({ value = 1, onChange }) => {
  const updateQuantity = (newQuantity) => {
    const validQuantity = Math.max(1, newQuantity);

    onChange?.(validQuantity);
  };

  const handleInputChange = (event) => {
    const newQuantity = Number(event.target.value);

    if (Number.isNaN(newQuantity)) {
      return;
    }

    updateQuantity(newQuantity);
  };

  return (
    <div className="product-quantity-selector">
      <label htmlFor="product-quantity">
        Quantity
      </label>

      <div className="product-quantity-controls">
        <button
          type="button"
          onClick={() => updateQuantity(value - 1)}
          disabled={value <= 1}
        >
          -
        </button>

        <input
          id="product-quantity"
          type="number"
          min="1"
          value={value}
          onChange={handleInputChange}
        />

        <button
          type="button"
          onClick={() => updateQuantity(value + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductQuantitySelector;