import React, { useState } from 'react'
import { User } from '@/entities/User'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Globe, Target, TrendingUp, ArrowRight, UserCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { createPageUrl } from '@/utils/createPageUrl'
import { SpeakEasyLogo } from '@/components/ui/SpeakEasyLogo'

export default function Welcome(){
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState({ full_name:'', target_language:'', learning_purpose:'', current_level:'' })
  const [isLoading, setIsLoading] = useState(false)
  const languages = { english:{name:'Inglês',flag:'🇺🇸'}, spanish:{name:'Espanhol',flag:'🇪🇸'}, french:{name:'Francês',flag:'🇫🇷'}, german:{name:'Alemão',flag:'🇩🇪'} }
  const purposes = { work:{name:'Trabalho',icon:'💼',description:'Para avançar na carreira'}, travel:{name:'Viagem',icon:'✈',description:'Para explorar o mundo'}, hobby:{name:'Hobby',icon:'🎯',description:'Por prazer pessoal'}, study:{name:'Estudos',icon:'📚',description:'Para fins acadêmicos'}, family:{name:'Família',icon:'👨‍👩‍👧‍👦',description:'Para conversar com família'}, culture:{name:'Cultura',icon:'🎭',description:'Para conhecer culturas'} }
  const levels = { basic:{name:'Básico',description:'Iniciante completo',color:'bg-green-100 text-green-800'}, intermediate:{name:'Intermediário',description:'Já sei algumas palavras',color:'bg-yellow-100 text-yellow-800'}, advanced:{name:'Avançado',description:'Preciso praticar mais',color:'bg-blue-100 text-blue-800'} }
  const handleInputChange = (field: string, value: string)=> setUserData(prev=>({ ...prev, [field]: value }))
  const handleContinue = ()=> { if(currentStep<4) setCurrentStep(s=>s+1) }
  const handleBack = ()=> { if(currentStep>1) setCurrentStep(s=>s-1) }
  const handleComplete = async ()=>{ setIsLoading(true); try{ await User.updateMyUserData({ ...userData, profile_completed:true, jam_gender: Math.random()>0.5?'female':'male' }); navigate(createPageUrl('Dashboard')) } finally { setIsLoading(false) } }
  const isStepValid = ()=> currentStep===1? userData.full_name.trim().length>0 : currentStep===2? !!userData.target_language : currentStep===3? !!userData.learning_purpose : currentStep===4? !!userData.current_level : false

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="inline-block mb-4"><SpeakEasyLogo className="w-24 h-24"/></div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Bem-vindo ao SpeakEasy</h1>
          <p className="text-gray-600">Vamos começar sua jornada de aprendizado!</p>
        </div>
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2"><span className="text-sm font-medium text-gray-600">Passo {currentStep} de 4</span><span className="text-sm font-medium text-blue-600">{Math.round((currentStep/4)*100)}%</span></div>
          <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(currentStep/4)*100}%`}}/></div>
        </div>
        <Card className="shadow-xl border-0"><CardContent className="p-8">
          {currentStep===1 && (<div className="space-y-6"><div className="text-center"><div className="w-16 h-16 bg-blue-100 rounded-xl mx-auto mb-4 grid place-items-center"><UserCircle className="w-8 h-8 text-blue-600"/></div><h2 className="text-2xl font-bold mb-2">Como você se chama?</h2><p className="text-gray-600">Vamos personalizar sua experiência</p></div><div className="space-y-2"><Label htmlFor="name">Seu nome</Label><Input id="name" type="text" placeholder="Digite seu nome completo" value={userData.full_name} onChange={(e)=>handleInputChange('full_name',(e.target as HTMLInputElement).value)} className="h-12 text-base"/></div></div>)}
          {currentStep===2 && (<div className="space-y-6"><div className="text-center"><div className="w-16 h-16 bg-blue-100 rounded-xl mx-auto mb-4 grid place-items-center"><Globe className="w-8 h-8 text-blue-600"/></div><h2 className="text-2xl font-bold mb-2">Qual idioma deseja aprender?</h2><p className="text-gray-600">Escolha sua nova língua</p></div><div className="grid gap-4">{Object.entries(languages).map(([key,lang])=> (<button key={key} onClick={()=>handleInputChange('target_language', key)} className={`p-4 rounded-xl border-2 transition ${userData.target_language===key?'border-blue-600 bg-blue-50':'border-gray-200 hover:border-blue-300'}`}><div className="flex items-center gap-4"><span className="text-2xl">{(lang as any).flag}</span><div className="text-left"><p className="font-semibold">{(lang as any).name}</p></div></div></button>))}</div></div>)}
          {currentStep===3 && (<div className="space-y-6"><div className="text-center"><div className="w-16 h-16 bg-blue-100 rounded-xl mx-auto mb-4 grid place-items-center"><Target className="w-8 h-8 text-blue-600"/></div><h2 className="text-2xl font-bold mb-2">Por que quer aprender?</h2><p className="text-gray-600">Isso nos ajuda a personalizar</p></div><div className="grid gap-3">{Object.entries(purposes).map(([key,purpose])=> (<button key={key} onClick={()=>handleInputChange('learning_purpose', key)} className={`p-4 rounded-xl border-2 transition ${userData.learning_purpose===key?'border-blue-600 bg-blue-50':'border-gray-200 hover:border-blue-300'}`}><div className="flex items-center gap-4"><span className="text-2xl">{(purpose as any).icon}</span><div className="text-left"><p className="font-semibold">{(purpose as any).name}</p><p className="text-sm text-gray-600">{(purpose as any).description}</p></div></div></button>))}</div></div>)}
          {currentStep===4 && (<div className="space-y-6"><div className="text-center"><div className="w-16 h-16 bg-blue-100 rounded-xl mx-auto mb-4 grid place-items-center"><TrendingUp className="w-8 h-8 text-blue-600"/></div><h2 className="text-2xl font-bold mb-2">Qual seu nível atual?</h2><p className="text-gray-600">Vamos adequar os exercícios</p></div><div className="grid gap-4">{Object.entries(levels).map(([key,level])=> (<button key={key} onClick={()=>handleInputChange('current_level', key)} className={`p-4 rounded-xl border-2 transition ${userData.current_level===key?'border-blue-600 bg-blue-50':'border-gray-200 hover:border-blue-300'}`}><div className="flex items-center justify-between"><div className="text-left"><p className="font-semibold">{(level as any).name}</p><p className="text-sm text-gray-600">{(level as any).description}</p></div><div className={`px-3 py-1 rounded-full text-xs font-medium ${(level as any).color}`}>{(level as any).name}</div></div></button>))}</div></div>)}
          <div className="flex gap-4 mt-8">{currentStep>1 && (<Button variant="outline" onClick={handleBack} className="flex-1 h-12">Voltar</Button>)}{currentStep<4 ? (<Button onClick={handleContinue} disabled={!isStepValid()} className="flex-1 h-12">Continuar <ArrowRight className="w-4 h-4 ml-2"/></Button>) : (<Button onClick={handleComplete} disabled={!isStepValid()||isLoading} className="flex-1 h-12">{isLoading?'Criando perfil...':'Começar jornada'} <ArrowRight className="w-4 h-4 ml-2"/></Button>)}</div>
        </CardContent></Card>
      </div>
    </div>
  )
}
