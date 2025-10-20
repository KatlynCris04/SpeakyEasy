import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '@/lib/api'

type AuthCtxT = { token: string|null, setToken: (t:string|null)=>void, user: any, setUser: (u:any)=>void }
const AuthCtx = createContext<AuthCtxT>({ token: null, setToken: ()=>{}, user: null, setUser: ()=>{} })

export function AuthProvider({ children }:{ children: React.ReactNode }){
  const [token, setToken] = useState<string|null>(localStorage.getItem('se_token'))
  const [user, setUser] = useState<any>(null)
  useEffect(()=>{
    if(token){
      localStorage.setItem('se_token', token)
      api.get('/user/me').then(r=>setUser(r.data)).catch(()=>{})
    } else {
      localStorage.removeItem('se_token'); setUser(null)
    }
  },[token])
  return <AuthCtx.Provider value={{ token, setToken, user, setUser }}>{children}</AuthCtx.Provider>
}
export const useAuth = ()=> useContext(AuthCtx)
