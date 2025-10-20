export default function Leaderboard(){
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Ranking e Conquistas</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-2xl shadow-soft">
          <h3 className="font-semibold mb-2">Ranking Semanal</h3>
          <div className="border rounded-xl p-4">Você — 0 pontos</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-soft">
          <h3 className="font-semibold mb-2">Sequência</h3>
          <div className="border rounded-xl p-4">0 dias consecutivos</div>
        </div>
      </div>
    </div>
  )
}
