export function Input({ className = '', ...props }: any){
  return <input className={`w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${className}`} {...props} />
}
