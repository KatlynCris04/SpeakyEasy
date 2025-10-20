export function SpeakEasyLogo({ className = '' }: { className?: string }){
  return (
    <div className={`w-16 h-16 rounded-2xl bg-blue-600 grid place-items-center shadow-soft ${className}`}>
      <span className="text-2xl text-white">:)</span>
    </div>
  )
}
