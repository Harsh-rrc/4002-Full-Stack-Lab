import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./layout/Layout";
import Employees from "./pages/Employees";
import Organization from "./pages/Organization";
import type { Department } from "./interfaces/Department";
import type { Role } from "./interfaces/Role";
import { employeeService } from "./services/employeeService";
import { organizationService } from "./services/organizationService";

const App = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [employeeError, setEmployeeError] = useState("");
  const [roleError, setRoleError] = useState("");
  const [isLoadingEmployees, setIsLoadingEmployees] = useState(true);
  const [isLoadingRoles, setIsLoadingRoles] = useState(true);

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const departmentData = await employeeService.getDepartments();
        setDepartments(departmentData);
        setEmployeeError("");
      } catch {
        setEmployeeError("Could not load employee data from the backend.");
      } finally {
        setIsLoadingEmployees(false);
      }
    };

    const loadRoles = async () => {
      try {
        const roleData = await organizationService.getRoles();
        setRoles(roleData);
        setRoleError("");
      } catch {
        setRoleError("Could not load role data from the backend.");
      } finally {
        setIsLoadingRoles(false);
      }
    };

    void loadEmployees();
    void loadRoles();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/employees" replace />} />
          <Route
            path="/employees"
            element={
              <Employees
                departments={departments}
                error={employeeError}
                isLoading={isLoadingEmployees}
                onAddEmployee={setDepartments}
              />
            }
          />
          <Route
            path="/organization"
            element={
              <Organization
                roles={roles}
                error={roleError}
                isLoading={isLoadingRoles}
                onAddRole={setRoles}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
