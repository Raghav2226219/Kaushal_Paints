import { useState } from "react";

import { useQuote } from "../../context/QuoteContext";
import { createQuote } from "../../services/quoteService";

import {
  generateQuoteCartMessage,
  generateWhatsAppUrl,
} from "../../utils/whatsapp";

const QuoteCartButton = () => {
  const {
    quoteItems,
    clearQuote,
  } = useQuote();

  const [loading, setLoading] = useState(false);

  const handleGetQuote = async () => {
    if (
      quoteItems.length === 0 ||
      loading
    ) {
      return;
    }

    try {
      setLoading(true);

      const data = await createQuote(
        quoteItems
      );

      console.log(
        "Quote created:",
        data.quote
      );

      const message =
        generateQuoteCartMessage(
          quoteItems
        );

      const whatsappUrl =
        generateWhatsAppUrl(message);

      window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
      );

      clearQuote();
    } catch (error) {
      console.error(
        "Create quote error:",
        error
      );

      alert(
        error.message ||
          "Failed to create quote. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGetQuote}
      disabled={
        quoteItems.length === 0 ||
        loading
      }
      className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
    >
      {loading
        ? "Preparing Quote..."
        : "Get Quote on WhatsApp"}
    </button>
  );
};

export default QuoteCartButton;