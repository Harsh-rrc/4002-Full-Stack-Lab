import { useEffect, useState } from "react";
import AddEmployeeForm from "../components/AddEmployeeForm";
import { employeeService } from "../services/employeeService";
import type { Department } from "../interfaces/Department";
import { AuthSignedIn, AuthSignedOut } from "../auth/AuthContext";
import { useAuthMode } from "../auth/AuthContext";

const Employees = () => {
  const { clerkEnabled } = useAuthMode();
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
    <main style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h2 style={{ color: "#ec9214", textAlign: "center", marginBottom: "20px" }}>Employees</h2>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      {departments.map((dept) => (
        <div
          key={dept.id}
          style={{
            marginBottom: "20px",
            padding: "20px",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ marginTop: 0, color: "#333" }}>{dept.name}</h3>
          {dept.employees.length === 0 ? (
            <p style={{ color: "#666" }}>No employees in this department yet.</p>
          ) : (
            dept.employees.map((emp, index) => (
              <p key={`${dept.id}-${emp.firstName}-${emp.lastName ?? ""}-${index}`} style={{ margin: "8px 0" }}>
                {emp.firstName} {emp.lastName}
              </p>
            ))
          )}
        </div>
      ))}

      <AuthSignedIn>
        <AddEmployeeForm departments={departments} onAddEmployee={setDepartments} />
      </AuthSignedIn>

      <AuthSignedOut>
        <div style={{ marginTop: "20px", padding: "18px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "center", backgroundColor: "#fff8ef" }}>
          <p style={{ marginTop: 0 }}>
            {clerkEnabled
              ? "You must be logged in to add a new employee."
              : "Add your real Clerk publishable key to enable sign in, then log in to add a new employee."}
          </p>
          <a href="/sign-in" style={{ padding: "10px 18px", backgroundColor: "#ec9214", color: "white", borderRadius: "4px", textDecoration: "none", display: "inline-block" }}>Log In</a>
        </div>
      </AuthSignedOut>
    </main>
  );
};

export default Employees;
