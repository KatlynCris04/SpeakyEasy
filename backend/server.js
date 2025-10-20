import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import app from './app.js'

dotenv.config()
const PORT = process.env.PORT || 4000
connectDB(process.env.MONGODB_URI).then(()=>{
  app.listen(PORT, ()=> console.log('🚀 API on http://localhost:'+PORT))
})
