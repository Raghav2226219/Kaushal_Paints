import { useState } from "react";

import ProductSearch from "../components/products/ProductSearch";
import ProductCategoryFilter from "../components/products/ProductCategoryFilter";
import ProductBrandFilter from "../components/products/ProductBrandFilter";
import ProductGrid from "../components/products/ProductGrid";
import ProductPagination from "../components/products/ProductPagination";

import useProducts from "../hooks/useProducts";

const Products = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");

  const {
    products,
    pagination,
    loading,
    error,
    refetch,
  } = useProducts({
    page,
    limit: 10,
    search,
    category,
    brand,
  });

  const handleSearchChange = (value) => {
    setSearch(value);
    setPage(1);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    setPage(1);
  };

  const handleBrandChange = (value) => {
    setBrand(value);
    setPage(1);
  };

  const handleClearFilters = () => {
    setSearch("");
    setCategory("");
    setBrand("");
    setPage(1);
  };

  const hasActiveFilters =
    search.trim() !== "" ||
    category !== "" ||
    brand !== "";

  const handlePreviousPage = () => {
    setPage((currentPage) =>
      Math.max(currentPage - 1, 1)
    );
  };

  const handleNextPage = () => {
    setPage((currentPage) =>
      Math.min(
        currentPage + 1,
        pagination.totalPages
      )
    );
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">

        {/* Page Header */}
        <section className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Kaushal Paints
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Products
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600">
            Explore our range of paints and painting products.
          </p>
        </section>

        {/* Filters */}
        <section className="mb-8 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <ProductSearch
              value={search}
              onChange={handleSearchChange}
            />

            <ProductCategoryFilter
              value={category}
              onChange={handleCategoryChange}
            />

            <ProductBrandFilter
              value={brand}
              onChange={handleBrandChange}
            />
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
              <p className="text-sm text-gray-500">
                Filters are currently applied.
              </p>

              <button
                type="button"
                onClick={handleClearFilters}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        {/* Loading */}
        {loading && (
          <div className="rounded-xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm">
            <p className="text-sm font-medium text-gray-600">
              Loading products...
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-8 text-center">
            <p className="text-sm font-medium text-red-700">
              {error}
            </p>

            <button
              type="button"
              onClick={refetch}
              className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Products */}
        {!loading && !error && (
          <>
            {products.length > 0 ? (
              <>
                <ProductGrid products={products} />

                <ProductPagination
                  page={pagination.page}
                  totalPages={pagination.totalPages}
                  onPrevious={handlePreviousPage}
                  onNext={handleNextPage}
                />
              </>
            ) : (
              <div className="rounded-2xl border border-gray-200 bg-white px-6 py-14 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-2xl">
                  🔍
                </div>

                <h2 className="mt-5 text-lg font-bold text-gray-900">
                  No products found
                </h2>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                  We couldn't find any products matching your current
                  search or filters. Try changing your search or clearing
                  the filters.
                </p>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={handleClearFilters}
                    className="mt-6 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default Products;