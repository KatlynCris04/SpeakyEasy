export function Button({ className = '', variant = 'default', ...props }: any){
  const base = 'btn h-10 px-4 gap-2 disabled:opacity-60 disabled:cursor-not-allowed'
  const variants: Record<string,string> = { default: 'bg-blue-600 text-white hover:bg-blue-700', outline: 'border border-gray-300 bg-white hover:bg-gray-50' }
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}
