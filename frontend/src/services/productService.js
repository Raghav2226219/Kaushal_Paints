import API_BASE_URL from "./api";

export const getProducts = async ({
  page = 1,
  limit = 10,
  search = "",
  category = "",
  brand = "",
} = {}) => {
  const params = new URLSearchParams();

  params.append("page", page);
  params.append("limit", limit);

  if (search) {
    params.append("search", search);
  }

  if (category) {
    params.append("category", category);
  }

  if (brand) {
    params.append("brand", brand);
  }

  const response = await fetch(
    `${API_BASE_URL}/products?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};

export const getProductById = async (productId) => {
  const response = await fetch(
    `${API_BASE_URL}/products/${productId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
};