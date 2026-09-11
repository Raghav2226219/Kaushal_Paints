import { useState } from "react";

import { useQuote } from "../../context/QuoteContext";
import { createQuote } from "../../services/quoteService";

import {
  generateQuoteCartMessage,
  generateWhatsAppUrl,
} from "../../utils/whatsapp";

const QuoteCartButton = () => {
  const { quoteItems, clearQuote } = useQuote();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGetQuote = async () => {
    if (quoteItems.length === 0 || loading) {
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await createQuote(quoteItems);

      console.log("Quote created:", data.quote);

      const message = generateQuoteCartMessage(quoteItems);
      const whatsappUrl = generateWhatsAppUrl(message);

      window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
      );

      clearQuote();
    } catch (error) {
      console.error("Create quote error:", error);

      setError(
        error.message ||
          "Unable to prepare your quote. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-stretch gap-3">
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
              !
            </div>

            <div>
              <p className="text-sm font-semibold text-red-700">
                Unable to prepare quote
              </p>

              <p className="mt-1 text-xs leading-5 text-red-600">
                {error}
              </p>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={handleGetQuote}
        disabled={quoteItems.length === 0 || loading}
        className="inline-flex min-w-52 items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white shadow-sm transition duration-200 hover:bg-indigo-600 hover:shadow-md disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
      >
        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Preparing Quote...
          </>
        ) : (
          <>
            Get Quote on WhatsApp
            <span className="text-base">→</span>
          </>
        )}
      </button>
    </div>
  );
};

export default QuoteCartButton;