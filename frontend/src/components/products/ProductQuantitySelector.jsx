const ProductQuantitySelector = ({
  value = 1,
  onChange,
}) => {
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
    <div>
      <label
        htmlFor="product-quantity"
        className="mb-3 block text-sm font-medium text-gray-700"
      >
        Quantity
      </label>

      <div className="flex w-fit items-center overflow-hidden rounded-lg border border-gray-300 bg-white">
        <button
          type="button"
          onClick={() => updateQuantity(value - 1)}
          disabled={value <= 1}
          className="flex h-10 w-10 items-center justify-center text-lg font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-300"
          aria-label="Decrease quantity"
        >
          −
        </button>

        <input
          id="product-quantity"
          type="number"
          min="1"
          value={value}
          onChange={handleInputChange}
          className="h-10 w-14 border-x border-gray-300 text-center text-sm font-medium text-gray-900 outline-none"
          aria-label="Quantity"
        />

        <button
          type="button"
          onClick={() => updateQuantity(value + 1)}
          className="flex h-10 w-10 items-center justify-center text-lg font-medium text-gray-700 transition hover:bg-gray-50"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductQuantitySelector;