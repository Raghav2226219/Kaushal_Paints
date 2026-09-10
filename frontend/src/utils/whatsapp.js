const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;

export const generateProductQuoteMessage = ({
  product,
  selectedVariant,
  quantity = 1,
}) => {
  return `Hello Kaushal Paints,

I would like to get a price for:

Product: ${product.name}
Brand: ${product.brand}
Size: ${selectedVariant.size}
Quantity: ${quantity}

Please share the price and availability.`;
};

export const generateWhatsAppUrl = (message) => {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const generateQuoteCartMessage = (quoteItems) => {
  const productLines = quoteItems
    .map(
      (item, index) =>
        `${index + 1}. ${item.productName}
   Brand: ${item.brand}
   Size: ${item.size}
   Quantity: ${item.quantity}`
    )
    .join("\n\n");

  return `Hello Kaushal Paints,

I would like to get a price for the following products:

${productLines}

Please share the price and availability.

Thank you.`;
};