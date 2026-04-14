Lab 5.1 quick start

1. Backend database
   cd backend
   docker compose up -d

2. Backend
   npm install
   npx prisma migrate dev --name init
   npm run prisma:seed
   npm run dev

3. Frontend
   cd ../frontend
   npm install
   npm run dev

4. Check links
   Backend health: http://localhost:3001/health
   Employees API: http://localhost:3001/api/employees
   Roles API: http://localhost:3001/api/roles
   Frontend: http://localhost:5173

5. Clerk setup
   Add your real key in frontend/.env.local
   Add your real secret in backend/.env
   Restart frontend and backend after updating keys.

6. Lab 5.1 behavior
   Signed out: users can view entries only.
   Signed out: forms are replaced by a login prompt.
   Signed in: users can add employees and roles.
