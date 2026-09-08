import { useCallback, useEffect, useState } from "react";
import { getProducts } from "../services/productService";

const useProducts = ({
  page = 1,
  limit = 10,
  search = "",
  category = "",
  brand = "",
} = {}) => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit,
    total: 0,
    totalPages: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getProducts({
        page,
        limit,
        search,
        category,
        brand,
      });

      setProducts(data.products || []);
      setPagination(
        data.pagination || {
          page,
          limit,
          total: 0,
          totalPages: 0,
        }
      );
    } catch (error) {
      console.error("Fetch products error:", error);
      setError("Unable to load products. Please try again.");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, [page, limit, search, category, brand]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    pagination,
    loading,
    error,
    refetch: fetchProducts,
  };
};

export default useProducts;