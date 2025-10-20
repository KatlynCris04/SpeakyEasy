export function Label({ className = '', ...props }: any){
  return <label className={`text-sm font-medium text-gray-700 ${className}`} {...props} />
}
