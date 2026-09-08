import { useState } from "react";

import ProductSearch from "../components/products/ProductSearch";
import ProductCategoryFilter from "../components/products/ProductCategoryFilter";
import ProductBrandFilter from "../components/products/ProductBrandFilter";
import ProductGrid from "../components/products/ProductGrid";
import useProducts from "../hooks/useProducts";
import ProductPagination from "../components/products/ProductPagination";

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

  const handlePreviousPage = () => {
    setPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((currentPage) =>
      Math.min(currentPage + 1, pagination.totalPages)
    );
  };

  return (
    <main className="products-page">
      <section className="products-header">
        <h1>Our Products</h1>

        <p>
          Explore our range of paints and painting products.
        </p>
      </section>

      <section className="products-filters">
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
      </section>

      {loading && (
        <div className="products-loading">
          <p>Loading products...</p>
        </div>
      )}

      {error && (
        <div className="products-error">
          <p>{error}</p>

          <button
            type="button"
            onClick={refetch}
          >
            Try Again
          </button>
        </div>
      )}

      {!loading && !error && (
        <>
          <ProductGrid products={products} />

          <ProductPagination
  page={pagination.page}
  totalPages={pagination.totalPages}
  onPrevious={handlePreviousPage}
  onNext={handleNextPage}
/>
        </>
      )}
    </main>
  );
};

export default Products;