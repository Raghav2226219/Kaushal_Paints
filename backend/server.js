import express from "express";
import cors from "cors";
import "dotenv/config";
import prisma from "./config/prisma.js";
import cookieParser from "cookie-parser";

import authRoutes from "./routers/authRoutes.js";
import productRoutes from "./routers/productRoutes.js";
import quoteRoutes from "./routers/quoteRoutes.js";


const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/quotes", quoteRoutes);
// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Kaushal Paints Backend is running"
    });
});

app.get("/prisma-test", async (req, res) => {
  try {
    const userCount = await prisma.user.count();

    res.json({
      message: "Prisma connected successfully",
      userCount,
    });
  } catch (error) {
    console.error("Prisma error:", error);

    res.status(500).json({
      message: "Prisma connection failed",
    });
  }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});