import express from "express";
import cors from "cors";
import "dotenv/config";
import prisma from "./config/prisma.js";

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

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