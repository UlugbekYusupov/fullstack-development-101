import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";


const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use('/api/cart', cartRoutes)

export default app;
