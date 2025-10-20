import { useEffect, useState } from 'react'
import { User } from '@/entities/User'
export default function Profile(){
  const [me, setMe] = useState<any>(null)
  const [saving, setSaving] = useState(false)
  useEffect(()=>{ User.me().then(setMe) },[])
  async function save(){ setSaving(true); await User.updateMyUserData(me); setSaving(false) }
  if(!me) return <div className="p-6">Carregando...</div>
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <div className="bg-white rounded-2xl p-6 shadow-soft">
        <h2 className="text-2xl font-bold mb-4">Seu perfil</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {['full_name','target_language','learning_purpose','current_level'].map(k=> (
            <div key={k} className="space-y-1">
              <label className="text-sm text-gray-600">{k}</label>
              <input className="border rounded-xl px-3 py-2" value={me[k]||''} onChange={e=>setMe({ ...me, [k]:(e.target as HTMLInputElement).value })}/>
            </div>
          ))}
        </div>
        <button onClick={save} className="btn bg-blue-600 text-white mt-4">{saving?'Salvando...':'Salvar'}</button>
      </div>
    </div>
  )
}
