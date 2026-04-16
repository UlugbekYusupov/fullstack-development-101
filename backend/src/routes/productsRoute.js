import express from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/productsController.js";
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.delete("/:id", deleteProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);

export default router;
