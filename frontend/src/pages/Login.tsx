import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SpeakEasyLogo } from '@/components/ui/SpeakEasyLogo'
import { User } from '@/entities/User'
import { useAuth } from '@/store/auth'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const nav = useNavigate()
  const { setToken } = useAuth()
  const submit = async (e: React.FormEvent)=>{
    e.preventDefault(); setError('')
    try{ const { token } = await User.login(email, password); setToken(token); nav('/welcome') }catch{ setError('Credenciais inválidas') }
  }
  return (
    <div className="min-h-screen grid place-items-center p-6">
      <form className="w-full max-w-md bg-white rounded-2xl shadow-soft p-8" onSubmit={submit}>
        <div className="text-center mb-6"><SpeakEasyLogo className="w-20 h-20 mx-auto" /><h2 className="mt-4 text-2xl font-bold">Entrar</h2></div>
        <div className="space-y-4">
          <div><Label htmlFor="email">E-mail</Label><Input id="email" type="email" value={email} onChange={e=>setEmail((e.target as HTMLInputElement).value)} placeholder="voce@email.com"/></div>
          <div><Label htmlFor="pass">Senha</Label><Input id="pass" type="password" value={password} onChange={e=>setPassword((e.target as HTMLInputElement).value)} /></div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <Button className="w-full">Entrar</Button>
          <p className="text-sm text-center">Não tem conta? <Link to="/register" className="text-blue-600">Criar</Link></p>
        </div>
      </form>
    </div>
  )
}
