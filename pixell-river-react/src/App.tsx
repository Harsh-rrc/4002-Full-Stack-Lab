import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Layout from "./layout/Layout";
import Employees from "./pages/Employees";
import Organization from "./pages/Organization";
import type { Department as DepartmentType } from "./interfaces/Department";
import { departments as initialDepartments } from "./data/departments";

const App = () => {
  console.log("App component is rendering");
  const [departments, setDepartments] =
    useState<DepartmentType[]>(initialDepartments);

  const addEmployee = (
    firstName: string,
    lastName: string,
    departmentName: string
  ) => {
    setDepartments(prev =>
      prev.map(dept =>
        dept.name === departmentName
          ? { ...dept, employees: [...dept.employees, { firstName, lastName }] }
          : dept
      )
    );
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
        <Route path="/organization" element={<Organization />} />
      </Route>
    </Routes>
  );
};

export default App;