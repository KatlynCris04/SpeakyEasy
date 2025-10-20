import jwt from 'jsonwebtoken'
export function auth(req, res, next){
  const header = req.headers.authorization
  if (!header) return res.status(401).json({ message: 'No token' })
  const [, token] = header.split(' ')
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = payload.id
    next()
  } catch (e) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}
