import API_BASE_URL from "./api";

export const getQuotes = async () => {
  const response = await fetch(
    `${API_BASE_URL}/quotes`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch quote history"
    );
  }

  return data;
};

export const getQuoteById = async (quoteId) => {
  const response = await fetch(
    `${API_BASE_URL}/quotes/${quoteId}`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch quote"
    );
  }

  return data;
};

export const createQuote = async (items) => {
  const response = await fetch(
    `${API_BASE_URL}/quotes`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        items,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to create quote"
    );
  }

  return data;
};