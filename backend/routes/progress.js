import { Router } from 'express'
import { auth } from '../middleware/auth.js'
import Progress from '../models/Progress.js'

const router = Router()

router.get('/', auth, async (req, res)=>{
  const list = await Progress.find({ user: req.userId }).populate('lesson')
  res.json(list)
})

router.post('/', auth, async (req, res)=>{
  const item = await Progress.create({ ...req.body, user: req.userId })
  res.json(item)
})

export default router
