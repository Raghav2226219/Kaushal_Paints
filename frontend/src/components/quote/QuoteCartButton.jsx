import { useQuote } from "../../context/QuoteContext";

import {
  generateQuoteCartMessage,
  generateWhatsAppUrl,
} from "../../utils/whatsapp";

const QuoteCartButton = () => {
  const { quoteItems } = useQuote();

  const handleGetQuote = () => {
    if (quoteItems.length === 0) {
      return;
    }

    const message =
      generateQuoteCartMessage(quoteItems);

    const whatsappUrl =
      generateWhatsAppUrl(message);

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      type="button"
      onClick={handleGetQuote}
      disabled={quoteItems.length === 0}
      className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
    >
      Get Quote on WhatsApp
    </button>
  );
};

export default QuoteCartButton;