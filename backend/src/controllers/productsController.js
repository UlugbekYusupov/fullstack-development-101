import { products } from "../data/db.js";
import generateId from "../utils/generateId.js";

export const getProducts = (req, res) => {
  if (products.length === 0) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.json({ products });
};
export const getProduct = (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === Number(id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  return res.json({ product });
};
export const deleteProduct = (req, res) => {
  const { id } = req.params;
  const afterProducts = products.filter((p) => p.id !== Number(id));
  if (afterProducts.length === products.length) {
    return res.status(404).json({ message: "Product not found" });
  }
  products = afterProducts;
  return res.json({
    message: "Product deleted successfully",
    products: products,
  });
};
export const createProduct = (req, res) => {
   const {name, price} = req.body
   if(!name || !price){
      return res.status(400).json({ message: "Name and price are required" });
   }
   const newProduct = {
      id: generateId(products),
      name,
      price
   }
   products.push(newProduct);
   return res.status(201).json({ message: "Product created successfully", product: newProduct });
};
export const updateProduct = (req, res) => {
   const { id } = req.params
   const { name, price } = req.body
   const product = products.find((p) => p.id === Number(id))
   if(!product){
      return res.status(404).json({ message: "Product not found" });
   }
   if(!name || !price){
      return res.status(400).json({ message: "Name and price are required" });
   }
   product.name = name
   product.price = price
   return res.json({ message: "Product updated successfully", product });
};
