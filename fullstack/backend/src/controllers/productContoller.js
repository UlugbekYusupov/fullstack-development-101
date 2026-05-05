import { v4 as uuidv4 } from "uuid";
import { products } from "../data/db.js";
export function getProducts(req, res) {
  try {
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
export function getSingleProduct(req, res) {
  try {
    const id = req.params.id;
    const product = products.find((product) => product.id === id);
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    return res.status(200).json({ product });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
export function createProduct(req, res) {
  try {
    const { name, price, description, stock, category, image_url } = req.body;
    if (!name || !price || !stock) {
      return res
        .status(400)
        .json({ message: "Name, price, stock are required" });
    }
    const newProduct = {
      id: uuidv4(),
      name,
      description,
      price,
      stock,
      category,
      image_url,
      created_at: Date(),
      updated_at: Date(),
    };
    products.push(newProduct);
    return res
      .status(201)
      .json({ message: "Product created succesfully!", newProduct });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
export function updateProduct(req, res) {
  try {
    const id = req.params.id;
    const { name, price, description, stock, category, image_url } = req.body;
    let findProduct = products.find((product) => product.id === id);
    if (!findProduct) {
      return res.status(404).json({ message: "Product not found!" });
    }
    findProduct.name = name ?? products.name;
    findProduct.price = price ?? products.price;
    findProduct.description = description ?? products.description;
    findProduct.stock = stock ?? products.stock;
    findProduct.category = category ?? products.category;
    findProduct.image_url = image_url ?? products.image_url;
    findProduct.updated_at = Date();
    return res
      .status(200)
      .json({ message: "Product updated succesfully", findProduct });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
export function deleteProduct(req, res) {
  try {
    const id = req.params.id;
    let findProduct = products.find((product) => product.id === id);
    if (!findProduct) {
      return res.status(404).json({ message: "Product not found!" });
    }
    const findex = products.findIndex((item) => item.id === id);
    if (findex > -1) {
      products.splice(findex, 1);
    }
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
