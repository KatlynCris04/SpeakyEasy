import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '../app.js'

describe('API smoke tests', () => {
  it('GET /api/health -> { ok: true }', async () => {
    const res = await request(app).get('/api/health')
    expect(res.status).toBe(200)
    expect(res.body).toEqual({ ok: true })
  })

  it('GET /api/user/me without token -> 401', async () => {
    const res = await request(app).get('/api/user/me')
    expect(res.status).toBe(401)
  })
})
