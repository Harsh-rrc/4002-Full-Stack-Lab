# Lab 5.2 Implementation TODO

## Branch: blackboxai/lab-5.2

### Setup
- [x] Create new branch `blackboxai/lab-5.2` from `lab-5.1`
- [ ] Install TanStack Query in frontend

### Backend Changes
- [ ] Update `backend/src/repositories/employeeRepository.ts` - add deleteEmployee
- [ ] Update `backend/src/repositories/roleRepository.ts` - add deleteRole
- [ ] Update `backend/src/services/employeeService.ts` - add deleteEmployee service
- [ ] Update `backend/src/services/roleService.ts` - add deleteRole service
- [ ] Update `backend/src/controllers/employeeController.ts` - add deleteEmployee controller
- [ ] Update `backend/src/controllers/roleController.ts` - add deleteRole controller
- [ ] Update `backend/src/routes/employeeRoutes.ts` - add DELETE /:id route
- [ ] Update `backend/src/routes/roleRoutes.ts` - add DELETE /:id route

### Frontend Hooks (TanStack Query)
- [ ] Create `frontend/src/hooks/useDepartments.ts`
- [ ] Create `frontend/src/hooks/useRoles.ts`
- [ ] Create `frontend/src/hooks/useEmployeeMutations.ts`
- [ ] Create `frontend/src/hooks/useRoleMutations.ts`

### Frontend Pages & Components
- [ ] Update `frontend/src/main.tsx` - add QueryClientProvider
- [ ] Update `frontend/src/pages/Employees.tsx` - use TanStack Query + delete
- [ ] Update `frontend/src/pages/Organization.tsx` - use TanStack Query + delete
- [ ] Update `frontend/src/components/AddEmployeeForm.tsx` - use mutation
- [ ] Update `frontend/src/components/AddRoleForm.tsx` - use mutation

### Documentation & Cleanup
- [ ] Update `frontend/README.md` with Lab 5.2 documentation
- [ ] Delete unnecessary root files (index.html, logo.png, script.js, START-LAB-5.1.md, styles.css)
- [ ] Run TypeScript checks and verify build
- [ ] Commit all changes

