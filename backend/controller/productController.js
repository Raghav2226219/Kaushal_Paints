import prisma from "../config/prisma.js";

export const getProducts = async (req, res) => {
  try {
    const { category, brand, search } = req.query;

    const page = Math.max(Number(req.query.page) || 1, 1);
    const limit = Math.min(
      Math.max(Number(req.query.limit) || 10, 1),
      50
    );

    const skip = (page - 1) * limit;

    const where = {
      isActive: true,

      ...(search && {
        OR: [
          {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            brand: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            category: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      }),

      ...(category && {
        category: {
          equals: category,
          mode: "insensitive",
        },
      }),

      ...(brand && {
        brand: {
          equals: brand,
          mode: "insensitive",
        },
      }),
    };

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        include: {
          variants: {
            where: {
              isActive: true,
            },
            orderBy: {
              id: "asc",
            },
          },
        },
        orderBy: {
          name: "asc",
        },
        skip,
        take: limit,
      }),

      prisma.product.count({
        where,
      }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return res.status(200).json({
      products,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    });
  } catch (error) {
    console.error("Get products error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const productId = Number(req.params.id);

    if (Number.isNaN(productId)) {
      return res.status(400).json({
        message: "Invalid product ID",
      });
    }

const product = await prisma.product.findUnique({
  where: {
    id: productId,
  },
  include: {
    variants: {
      where: {
        isActive: true,
      },
      orderBy: {
        id: "asc",
      },
    },
  },
});

    if (!product || !product.isActive) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      product,
    });
  } catch (error) {
    console.error("Get product error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};