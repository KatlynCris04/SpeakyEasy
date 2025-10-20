import axios from 'axios'
const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api' })
api.interceptors.request.use((config)=>{ const t = localStorage.getItem('se_token'); if(t) config.headers.Authorization = `Bearer ${t}`; return config })
export default api
