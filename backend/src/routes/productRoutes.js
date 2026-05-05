import express from 'express'
const router = express.Router()
import { getProducts,
     getSingleProduct, 
     createProduct, 
     updateProduct,
      deleteProduct
    } from '../controllers/productContoller.js'
router.get("/", getProducts)
router.get("/:id", getSingleProduct)
router.post("/", createProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)
export default router