import { describe, it, expect, vi } from 'vitest'
import api from '@/lib/api'
import { User } from '@/entities/User'

vi.mock('@/lib/api', () => ({
  default: {
    post: vi.fn(async ()=>({ data: { token: 't' } })),
    get: vi.fn(async ()=>({ data: { id: 1 } })),
    patch: vi.fn(async (_:any, body:any)=>({ data: body }))
  }
}))

describe('User entity', () => {
  it('login retorna token', async () => {
    const { token } = await User.login('a@a.com', '123')
    expect(token).toBe('t')
  })
  it('updateMyUserData devolve payload', async () => {
    const data = await User.updateMyUserData({ full_name: 'Bia' })
    expect((data as any).full_name).toBe('Bia')
  })
})
