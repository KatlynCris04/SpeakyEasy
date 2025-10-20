export function createPageUrl(name: string){
  const map: Record<string,string> = { Dashboard: '/dashboard', Welcome: '/welcome' }
  return map[name] || '/'
}
