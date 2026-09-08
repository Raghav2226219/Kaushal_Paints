import {
  generateProductQuoteMessage,
  generateWhatsAppUrl,
} from "../../utils/whatsapp";

const ProductQuoteButton = ({
  product,
  selectedVariant,
  quantity,
}) => {
  const handleGetPrice = () => {
    if (!selectedVariant) {
      return;
    }

    const message = generateProductQuoteMessage({
      product,
      selectedVariant,
      quantity,
    });

    const whatsappUrl = generateWhatsAppUrl(message);

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      type="button"
      className="product-quote-button"
      onClick={handleGetPrice}
      disabled={!selectedVariant}
    >
      Get Price
    </button>
  );
};

export default ProductQuoteButton;