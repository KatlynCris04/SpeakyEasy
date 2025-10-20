import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/user.js'
import lessonRoutes from './routes/lessons.js'
import progressRoutes from './routes/progress.js'
import uploadRoutes from './routes/uploads.js'

dotenv.config()
const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') || '*' }))
app.use(express.json())
app.use(morgan('dev'))
app.use('/uploads', express.static(path.join(__dirname,'uploads')))

app.get('/api/health', (req,res)=>res.json({ ok: true }))
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/lessons', lessonRoutes)
app.use('/api/progress', progressRoutes)
app.use('/api/uploads', uploadRoutes)

export default app
