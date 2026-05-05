import express from "express";
import {addToCart, removeCartItem, updateCartItem, viewCart} from "../controllers/CartController.js";

const router = express.Router();

router.get("/", viewCart)
router.post("/items", addToCart)
router.put("/items/:id", updateCartItem)
router.delete("/items/:id", removeCartItem)

export default router;