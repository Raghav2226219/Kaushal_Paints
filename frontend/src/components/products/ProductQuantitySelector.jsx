const ProductQuantitySelector = ({
  value = 1,
  onChange,
}) => {
  const updateQuantity = (newQuantity) => {
    const numericQuantity = Number(newQuantity);

    if (!Number.isFinite(numericQuantity)) {
      return;
    }

    const validQuantity = Math.max(
      1,
      Math.floor(numericQuantity)
    );

    onChange?.(validQuantity);
  };

  const handleInputChange = (event) => {
    updateQuantity(event.target.value);
  };

  return (
    <div>
      <label
        htmlFor="product-quantity"
        className="mb-3 block text-sm font-semibold text-gray-800"
      >
        Quantity
      </label>

      <div className="flex w-fit items-center overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
        <button
          type="button"
          onClick={() => updateQuantity(value - 1)}
          disabled={value <= 1}
          className="flex h-11 w-11 items-center justify-center text-xl font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-300"
          aria-label="Decrease quantity"
        >
          −
        </button>

        <input
          id="product-quantity"
          type="number"
          min="1"
          step="1"
          inputMode="numeric"
          value={value}
          onChange={handleInputChange}
          className="h-11 w-16 border-x border-gray-300 bg-white text-center text-sm font-semibold text-gray-900 outline-none focus:bg-gray-50"
          aria-label="Quantity"
        />

        <button
          type="button"
          onClick={() => updateQuantity(value + 1)}
          className="flex h-11 w-11 items-center justify-center text-xl font-medium text-gray-700 transition hover:bg-gray-50"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductQuantitySelector;