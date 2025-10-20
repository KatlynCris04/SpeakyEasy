import { Router } from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const router = Router()

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body
  try {
    const exists = await User.findOne({ email })
    if (exists) return res.status(400).json({ message: 'Email já cadastrado' })
    const user = await User.create({ name, email, password })
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
    res.json({ token })
  } catch (e) { res.status(500).json({ message: 'Erro', error: e.message }) }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email }).select('+password')
  if (!user) return res.status(401).json({ message: 'Credenciais inválidas' })
  const ok = await user.comparePassword(password)
  if (!ok) return res.status(401).json({ message: 'Credenciais inválidas' })
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
  res.json({ token })
})

export default router
