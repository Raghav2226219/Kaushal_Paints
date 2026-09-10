import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const QuoteContext = createContext(null);

const QUOTE_STORAGE_KEY = "kaushal_paints_quote";

export const QuoteProvider = ({ children }) => {
  const [quoteItems, setQuoteItems] = useState(() => {
    try {
      const savedQuote = localStorage.getItem(
        QUOTE_STORAGE_KEY
      );

      return savedQuote
        ? JSON.parse(savedQuote)
        : [];
    } catch (error) {
      console.error(
        "Failed to load quote cart:",
        error
      );

      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        QUOTE_STORAGE_KEY,
        JSON.stringify(quoteItems)
      );
    } catch (error) {
      console.error(
        "Failed to save quote cart:",
        error
      );
    }
  }, [quoteItems]);

  const addToQuote = ({
    product,
    variant,
    quantity = 1,
  }) => {
    setQuoteItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) =>
          item.productId === product.id &&
          item.variantId === variant.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.productId === product.id &&
          item.variantId === variant.id
            ? {
                ...item,
                quantity:
                  item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          productId: product.id,
          variantId: variant.id,
          productName: product.name,
          brand: product.brand,
          size: variant.size,
          quantity,
        },
      ];
    });
  };

  const removeFromQuote = (
    productId,
    variantId
  ) => {
    setQuoteItems((currentItems) =>
      currentItems.filter(
        (item) =>
          !(
            item.productId === productId &&
            item.variantId === variantId
          )
      )
    );
  };

  const updateQuoteQuantity = (
    productId,
    variantId,
    quantity
  ) => {
    const validQuantity = Math.max(
      1,
      quantity
    );

    setQuoteItems((currentItems) =>
      currentItems.map((item) =>
        item.productId === productId &&
        item.variantId === variantId
          ? {
              ...item,
              quantity: validQuantity,
            }
          : item
      )
    );
  };

  const clearQuote = () => {
    setQuoteItems([]);
  };

  const quoteItemCount = quoteItems.reduce(
  (total, item) => total + item.quantity,
  0
);

const quoteLineCount = quoteItems.length;

  return (
    <QuoteContext.Provider
      value={{
  quoteItems,
  quoteItemCount,
  quoteLineCount,
  addToQuote,
  removeFromQuote,
  updateQuoteQuantity,
  clearQuote,
}}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => {
  const context = useContext(QuoteContext);

  if (!context) {
    throw new Error(
      "useQuote must be used inside QuoteProvider"
    );
  }

  return context;
};