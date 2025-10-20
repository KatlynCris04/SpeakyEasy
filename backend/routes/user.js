import { Router } from 'express'
import User from '../models/User.js'
import { auth } from '../middleware/auth.js'

const router = Router()

router.get('/me', auth, async (req, res) => {
  const me = await User.findById(req.userId).lean()
  res.json(me)
})

router.patch('/me', auth, async (req, res) => {
  const allowed = ['full_name','target_language','learning_purpose','current_level','profile_completed','jam_gender','name']
  const update = {}
  for (const k of allowed) if (k in req.body) update[k] = req.body[k]
  const me = await User.findByIdAndUpdate(req.userId, update, { new: true }).lean()
  res.json(me)
})

export default router
