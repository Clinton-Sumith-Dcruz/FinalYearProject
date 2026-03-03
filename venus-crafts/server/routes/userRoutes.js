import express from "express";
import {
  getUserOrders,
  getUserWishlist
} from "../controllers/authController.js";

const router = express.Router();

router.get("/orders/:userId", getUserOrders);
router.get("/wishlist/:userId", getUserWishlist);

export default router;