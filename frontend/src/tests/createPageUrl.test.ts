import { describe, it, expect } from 'vitest'
import { createPageUrl } from '@/utils/createPageUrl'

describe('createPageUrl', () => {
  it('mapa conhecido', () => {
    expect(createPageUrl('Dashboard')).toBe('/dashboard')
    expect(createPageUrl('Welcome')).toBe('/welcome')
  })
  it('rota desconhecida vai para raiz', () => {
    expect(createPageUrl('X')).toBe('/')
  })
})
