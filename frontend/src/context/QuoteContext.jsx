import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { useAuth } from "./AuthContext";

const QuoteContext = createContext(null);

const QUOTE_STORAGE_PREFIX =
  "kaushal_paints_quote_";

export const QuoteProvider = ({ children }) => {
  const { user, loading: authLoading } = useAuth();

  const storageKey = user
    ? `${QUOTE_STORAGE_PREFIX}${user.id}`
    : null;

  const [quoteItems, setQuoteItems] = useState([]);

  // Load the quote cart whenever the logged-in user changes.
  useEffect(() => {
    if (authLoading) {
      return;
    }

    if (!user) {
      setQuoteItems([]);
      return;
    }

    try {
      const savedQuote =
        localStorage.getItem(storageKey);

      setQuoteItems(
        savedQuote
          ? JSON.parse(savedQuote)
          : []
      );
    } catch (error) {
      console.error(
        "Failed to load quote cart:",
        error
      );

      setQuoteItems([]);
    }
  }, [user, authLoading, storageKey]);

  // Save the current user's quote cart.
  useEffect(() => {
    if (
      authLoading ||
      !user ||
      !storageKey
    ) {
      return;
    }

    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify(quoteItems)
      );
    } catch (error) {
      console.error(
        "Failed to save quote cart:",
        error
      );
    }
  }, [
    quoteItems,
    user,
    authLoading,
    storageKey,
  ]);

  const addToQuote = ({
    product,
    variant,
    quantity = 1,
  }) => {
    setQuoteItems((currentItems) => {
      const existingItem =
        currentItems.find(
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

  const quoteItemCount =
    quoteItems.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );

  const quoteLineCount =
    quoteItems.length;

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
  const context = useContext(
    QuoteContext
  );

  if (!context) {
    throw new Error(
      "useQuote must be used inside QuoteProvider"
    );
  }

  return context;
};