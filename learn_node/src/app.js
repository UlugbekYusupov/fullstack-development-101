import express from "express"
import cors from "cors"
import authRoutes from "./routes/authRoutes.js"

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/", (req, res) => {
//     res.json({
//         message: "Api is running correctly!"
//     })
// })

app.use("/api/auth", authRoutes)



export default app;


