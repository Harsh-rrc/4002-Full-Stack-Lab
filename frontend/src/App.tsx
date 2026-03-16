import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Layout from "./layout/Layout";
import Employees from "./pages/Employees";
import Organization from "./pages/Organization";
import type { Department as DepartmentType } from "./interfaces/Department";
import type { Role } from "./interfaces/Role";
import { employeeRepo } from "./repositories/employeeRepo";
import { organizationRepo } from "./repositories/organizationRepo";

const App = () => {
  console.log("App component is rendering");
  const [departments, setDepartments] = useState<DepartmentType[]>(employeeRepo.getDepartments());
  const [roles, setRoles] = useState<Role[]>(organizationRepo.getRoles());

  const addEmployee = (departments: DepartmentType[]) => {
    setDepartments(departments);
  };

  const addRole = (roles: Role[]) => {
    setRoles(roles);
  };

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/employees" />} />
        <Route
          path="/employees"
          element={
            <Employees
              departments={departments}
              onAddEmployee={addEmployee}
            />
          }
        />
        <Route
          path="/organization"
          element={
            <Organization
              roles={roles}
              onAddRole={addRole}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
