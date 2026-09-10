import prisma from "../config/prisma.js";

export const createQuote = async (req, res) => {
  try {
    const { items } = req.body;

    // Validate quote items
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        message: "Quote must contain at least one item",
      });
    }

    // Validate each item
    for (const item of items) {
      if (
        !Number.isInteger(item.productId) ||
        !Number.isInteger(item.variantId) ||
        !Number.isInteger(item.quantity) ||
        item.quantity < 1
      ) {
        return res.status(400).json({
          message:
            "Each quote item must have valid productId, variantId and quantity",
        });
      }
    }

    // Get all requested product IDs
    const productIds = [
      ...new Set(items.map((item) => item.productId)),
    ];

    // Get all requested variant IDs
    const variantIds = [
      ...new Set(items.map((item) => item.variantId)),
    ];

    // Fetch active products
    const products = await prisma.product.findMany({
      where: {
        id: {
          in: productIds,
        },
        isActive: true,
      },
    });

    // Fetch active variants
    const variants = await prisma.productVariant.findMany({
      where: {
        id: {
          in: variantIds,
        },
        isActive: true,
      },
    });

    // Make lookup maps
    const productMap = new Map(
      products.map((product) => [
        product.id,
        product,
      ])
    );

    const variantMap = new Map(
      variants.map((variant) => [
        variant.id,
        variant,
      ])
    );

    // Validate every requested item
    for (const item of items) {
      const product = productMap.get(item.productId);
      const variant = variantMap.get(item.variantId);

      if (!product) {
        return res.status(400).json({
          message: `Product ${item.productId} is not available`,
        });
      }

      if (!variant) {
        return res.status(400).json({
          message: `Product variant ${item.variantId} is not available`,
        });
      }

      // Make sure the variant belongs to the requested product
      if (variant.productId !== product.id) {
        return res.status(400).json({
          message:
            "Product variant does not belong to the selected product",
        });
      }
    }

    // Create quote with items
    const quote = await prisma.quote.create({
      data: {
        userId: req.user.id,
        status: "SENT_TO_WHATSAPP",

        items: {
          create: items.map((item) => {
            const product = productMap.get(
              item.productId
            );

            const variant = variantMap.get(
              item.variantId
            );

            return {
              productId: product.id,
              variantId: variant.id,
              productName: product.name,
              brand: product.brand,
              size: variant.size,
              quantity: item.quantity,
            };
          }),
        },
      },

      include: {
        items: true,
      },
    });

    return res.status(201).json({
      message: "Quote created successfully",
      quote,
    });
  } catch (error) {
    console.error("Create quote error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getQuotes = async (req, res) => {
  try {
    const quotes = await prisma.quote.findMany({
      where: {
        userId: req.user.id,
      },
      include: {
        items: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
      quotes,
    });
  } catch (error) {
    console.error("Get quotes error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getQuoteById = async (req, res) => {
  try {
    const quoteId = Number(req.params.id);

    if (Number.isNaN(quoteId)) {
      return res.status(400).json({
        message: "Invalid quote ID",
      });
    }

    const quote = await prisma.quote.findFirst({
      where: {
        id: quoteId,
        userId: req.user.id,
      },
      include: {
        items: true,
      },
    });

    if (!quote) {
      return res.status(404).json({
        message: "Quote not found",
      });
    }

    return res.status(200).json({
      quote,
    });
  } catch (error) {
    console.error("Get quote error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};