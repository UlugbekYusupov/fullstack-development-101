import cors from 'cors'
import express from 'express'
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRouter.js'

const app = express()
app.use(cors())
app.use(express.json())

// app.use("/", (req, res) => {
//   res.json({ message: "API is running correctly!" });
// });

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/cart', cartRoutes)

export default app
