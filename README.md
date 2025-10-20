# SpeakEasy — Fullstack (TS) + Deploy + Testes

Frontend: React + Vite + **TypeScript** + Tailwind + Router + Vitest  
Backend: Node + Express + MongoDB + JWT + Supertest + Vitest

## Rodar local
1. **Backend**: 
   - `cp backend/.env.example backend/.env` e ajuste `MONGODB_URI` e `JWT_SECRET`
   - `cd backend && npm i && npm start`
2. **Frontend**:
   - `cp frontend/.env.example frontend/.env` (opcional)
   - `cd frontend && npm i && npm run dev`
3. Acesse `http://localhost:5173`

## Testes
- Frontend: `cd frontend && npm run test`
- Backend: `cd backend && npm run test` (smoke tests com Supertest)

## Deploy
- **Backend** (Railway/Render/Heroku): use `backend/Dockerfile` e variáveis de ambiente `MONGODB_URI`, `JWT_SECRET`, `CORS_ORIGIN`.
- **Frontend** (Vercel/Netlify): importe `frontend/` e defina `VITE_API_BASE_URL` para a URL pública da API.
