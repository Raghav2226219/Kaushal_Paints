import express from "express";

import { createQuote, getQuotes, getQuoteById, } from "../controller/quoteController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createQuote);
router.get("/", protect, getQuotes);
router.get("/:id", protect, getQuoteById);

export default router;
