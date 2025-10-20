import { Router } from 'express'
import multer from 'multer'
import path from 'path'
import { auth } from '../middleware/auth.js'

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '_' + file.originalname)
})
const upload = multer({ storage })

const router = Router()
router.post('/', auth, upload.single('file'), (req, res)=>{
  res.json({ path: `/uploads/${path.basename(req.file.path)}` })
})

export default router
