import { Link } from 'react-router-dom'
import { SpeakEasyLogo } from '@/components/ui/SpeakEasyLogo'
export default function Landing(){
  return (
    <main className="min-h-screen grid place-items-center p-6">
      <div className="text-center max-w-2xl">
        <div className="mx-auto w-fit mb-6"><SpeakEasyLogo className="w-24 h-24"/></div>
        <h1 className="text-4xl font-bold mb-3">Bem-vindo ao SpeakEasy</h1>
        <p className="text-gray-600 mb-8">Pratique vocabulário, conversação com o JAM e acompanhe seu progresso.</p>
        <div className="flex items-center justify-center gap-3">
          <Link to="/login" className="btn bg-blue-600 text-white hover:bg-blue-700">Entrar</Link>
          <Link to="/register" className="btn border border-gray-300 bg-white hover:bg-gray-50">Criar conta</Link>
        </div>
      </div>
    </main>
  )
}
