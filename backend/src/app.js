import express, {json} from "express";
import cors from "cors"
import bcrypt from "bcrypt"
import authRouter from "./routes/authRoutes.js"

const app = express();
app.use(cors());
app.use(express.json())

app.use("/api/auth", authRouter);

export default app;