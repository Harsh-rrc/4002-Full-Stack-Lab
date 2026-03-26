import { useEffect, useState } from "react";
import { employeeService } from "../services/employeeService";
import type { Department } from "../interfaces/Department";
import AddEmployeeForm from "../components/AddEmployeeForm";

const EmployeesPage = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadDepartments = async () => {
      try {
        const data = await employeeService.getDepartments();
        setDepartments(data);
        setError("");
      } catch {
        setError("Could not load employee data from the backend.");
      }
    };

    loadDepartments();
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <h2>Employees</h2>

      {error && <p>{error}</p>}

      {departments.length === 0 && !error && <p>Loading...</p>}

      {departments.map((dept) => (
        <div key={dept.id} style={{ marginBottom: "20px" }}>
          <h3>{dept.name}</h3>

          {dept.employees.map((emp, index) => (
            <p key={index}>
              {emp.firstName} {emp.lastName}
            </p>
          ))}
        </div>
      ))}

      <AddEmployeeForm 
        departments={departments} 
        onAddEmployee={setDepartments} 
      />
    </main>
  );
};

export default EmployeesPage;