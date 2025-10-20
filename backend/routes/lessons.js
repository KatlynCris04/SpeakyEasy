import { Router } from 'express'
import { auth } from '../middleware/auth.js'
import Lesson from '../models/Lesson.js'

const router = Router()

router.get('/', auth, async (req, res)=>{
  const list = await Lesson.find().limit(50)
  res.json(list)
})

router.post('/', auth, async (req, res)=>{
  const item = await Lesson.create(req.body)
  res.json(item)
})

export default router
