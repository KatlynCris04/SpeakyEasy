import { Link } from 'react-router-dom'
export default function Dashboard(){
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-blue-600 text-white rounded-2xl p-8 mb-6">
        <h2 className="text-3xl font-bold">Olá!</h2>
        <p className="opacity-90 mt-2">Pronto para praticar Inglês hoje?</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {['Progresso Geral','Sequência Atual','Tempo de Prática','Pontos da Semana'].map((t,i)=> (
            <div key={i} className="bg-white/10 rounded-xl p-4">
              <p className="text-sm opacity-90">{t}</p>
              <p className="text-2xl font-semibold mt-2">0</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <Link to="/exercises" className="rounded-xl p-4 border hover:shadow-soft bg-white">Fazer Exercícios</Link>
        <Link to="/profile" className="rounded-xl p-4 border hover:shadow-soft bg-white">Perfil</Link>
        <Link to="/leaderboard" className="rounded-xl p-4 border hover:shadow-soft bg-white">Ranking</Link>
      </div>
    </div>
  )
}
