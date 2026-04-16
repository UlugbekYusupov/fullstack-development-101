import express from 'express'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import usersRoute from './routes/usersRoute.js'
import productsRoute from './routes/productsRoute.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/v2/auth', authRoutes)
app.use('/api/v2/users', usersRoute)
app.use('/api/v2/products', productsRoute)

export default app