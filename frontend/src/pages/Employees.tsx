import AddEmployeeForm from "../components/AddEmployeeForm";
import type { Department } from "../interfaces/Department";

interface Props {
  departments: Department[];
  error: string;
  isLoading: boolean;
  onAddEmployee: (departments: Department[]) => void;
}

const Employees = ({ departments, error, isLoading, onAddEmployee }: Props) => {
  return (
    <main style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", color: "#ec9214", marginBottom: "30px" }}>
        Employees
      </h2>

      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
      {isLoading && <p style={{ textAlign: "center" }}>Loading employees...</p>}

      {!isLoading && !error && departments.length === 0 && (
        <p style={{ textAlign: "center" }}>No employees found.</p>
      )}

      {departments.map((department) => (
        <section
          key={department.id}
          style={{
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "20px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}
        >
          <h3 style={{ marginBottom: "12px" }}>{department.name}</h3>

          {department.employees.length === 0 ? (
            <p>No employees in this department yet.</p>
          ) : (
            department.employees.map((employee, index) => (
              <p key={`${department.id}-${employee.firstName}-${employee.lastName ?? ""}-${index}`}>
                {employee.firstName} {employee.lastName}
              </p>
            ))
          )}
        </section>
      ))}

      <AddEmployeeForm departments={departments} onAddEmployee={onAddEmployee} />
    </main>
  );
};

export default Employees;