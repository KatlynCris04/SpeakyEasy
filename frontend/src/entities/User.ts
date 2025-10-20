import api from '@/lib/api'
export const User = {
  async login(email: string, password: string){ const { data } = await api.post('/auth/login', { email, password }); return data },
  async register(payload: { name: string; email: string; password: string }){ const { data } = await api.post('/auth/register', payload); return data },
  async me(){ const { data } = await api.get('/user/me'); return data },
  async updateMyUserData(payload: Record<string,unknown>){ const { data } = await api.patch('/user/me', payload); return data }
}
