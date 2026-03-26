This folder combines your working Lab 4.1 frontend/backend with the Lab 4.2 Prisma/Postgres backend.

Run order:
1. Open terminal in backend
2. npm install
3. docker compose up -d
4. npx prisma migrate dev --name init
5. npm run prisma:seed
6. npm run dev
7. Open second terminal in frontend
8. npm install
9. npm run dev
10. Open http://localhost:5173

Important:
- Backend uses port 3001
- Frontend uses port 5173
- Postgres Docker maps localhost:5433 -> container 5432
- Database URL is already set in backend/.env for port 5433
- Work on main branch only

Files added for Lab 4.2:
- backend/.env
- backend/docker-compose.yml
- backend/prisma/schema.prisma
- backend/prisma/seed.ts
- backend/src/config/prisma.ts
- backend/src/repositories/employeeRepository.ts
- backend/src/repositories/roleRepository.ts
- backend/src/services/employeeService.ts
- backend/src/services/roleService.ts
- backend/src/controllers/employeeController.ts
- backend/src/controllers/roleController.ts
- backend/src/routes/employeeRoutes.ts
- backend/src/routes/roleRoutes.ts
- backend/src/server.ts
