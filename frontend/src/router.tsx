import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from '@/pages/Landing'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Welcome from '@/pages/Welcome'
import Dashboard from '@/pages/Dashboard'
import Exercises from '@/pages/Exercises'
import Profile from '@/pages/Profile'
import Leaderboard from '@/pages/Leaderboard'
import { useAuth } from '@/store/auth'
import React from 'react'

function PrivateRoute({ children }: { children: React.ReactElement }){
  const { token } = useAuth()
  return token ? children : <Navigate to="/login" replace />
}

export default function Router(){
  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/welcome" element={<PrivateRoute><Welcome/></PrivateRoute>} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      <Route path="/exercises" element={<PrivateRoute><Exercises/></PrivateRoute>} />
      <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>} />
      <Route path="/leaderboard" element={<PrivateRoute><Leaderboard/></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
