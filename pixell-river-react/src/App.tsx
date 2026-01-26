import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Department from "./components/Department";
import AddEmployeeForm from "./components/AddEmployeeForm";

import type { Department as DepartmentType } from "./interfaces/Department";
import { departments as initialDepartments } from "./data/departments";

const App = () => {
  const [departments, setDepartments] =
  useState<DepartmentType[]>(initialDepartments);

  const addEmployee = (firstName, lastName, departmentName) => {
  setDepartments(prev =>
    prev.map(dept =>
      dept.name === departmentName
        ? {
            ...dept,
            employees: [
              ...dept.employees,
              { firstName, lastName }
            ]
          }
        : dept
    )
  );
};

  return (
    <>
      <Header />

      <main style={{ padding: "20px" }}>
        {departments.map(dept => (
    <Department key={dept.name} department={dept} />
    ))}

        <AddEmployeeForm
          departments={departments}
          onAddEmployee={addEmployee}
        />
      </main>

      <Footer />
    </>
  );
};

export default App;