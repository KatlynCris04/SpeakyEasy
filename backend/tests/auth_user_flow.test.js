import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { MongoMemoryServer } from 'mongodb-memory-server'
import app from '../app.js'
import { connectDB, disconnectDB } from '../config/db.js'

let mongod

describe('Auth + User flow (integration)', () => {
  beforeAll(async () => {
    process.env.JWT_SECRET = 'testsecret'
    process.env.CORS_ORIGIN = 'http://localhost:5173'
    mongod = await MongoMemoryServer.create()
    const uri = mongod.getUri()
    process.env.MONGODB_URI = uri
    await connectDB(uri)
  })

  afterAll(async () => {
    await disconnectDB()
    if (mongod) await mongod.stop()
  })

  it('register -> login -> patch /user/me -> get /user/me', async () => {
    // Register
    const reg = await request(app).post('/api/auth/register').send({
      name: 'Bia',
      email: 'bia@example.com',
      password: '123456'
    })
    expect(reg.status).toBe(200)
    expect(reg.body.token).toBeTypeOf('string')

    // Login
    const login = await request(app).post('/api/auth/login').send({
      email: 'bia@example.com',
      password: '123456'
    })
    expect(login.status).toBe(200)
    const token = login.body.token
    expect(token).toBeTypeOf('string')

    // Update profile
    const patch = await request(app)
      .patch('/api/user/me')
      .set('Authorization', `Bearer ${token}`)
      .send({
        full_name: 'Beatriz',
        target_language: 'english',
        learning_purpose: 'study',
        current_level: 'basic',
        profile_completed: true,
        jam_gender: 'female'
      })
    expect(patch.status).toBe(200)
    expect(patch.body.full_name).toBe('Beatriz')
    expect(patch.body.profile_completed).toBe(true)

    // Get profile
    const me = await request(app)
      .get('/api/user/me')
      .set('Authorization', `Bearer ${token}`)
    expect(me.status).toBe(200)
    expect(me.body.email).toBe('bia@example.com')
    expect(me.body.full_name).toBe('Beatriz')
  })
})
