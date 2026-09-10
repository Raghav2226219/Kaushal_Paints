const ProductPagination = ({
  page,
  totalPages,
  onPrevious,
  onNext,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      className="mt-8 flex items-center justify-center gap-4"
      aria-label="Product pagination"
    >
      <button
        type="button"
        onClick={onPrevious}
        disabled={page === 1}
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>

      <span className="text-sm font-medium text-gray-600">
        Page {page} of {totalPages}
      </span>

      <button
        type="button"
        onClick={onNext}
        disabled={page === totalPages}
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </nav>
  );
};

export default ProductPagination;