import { useState } from "react";
import AddEmployeeForm from "../components/AddEmployeeForm";
import { useDepartments } from "../hooks/useDepartments";
import { useDeleteEmployee } from "../hooks/useEmployeeMutations";
import { AuthSignedIn, AuthSignedOut, useAuthMode } from "../auth/AuthContext";

const Employees = () => {
  const { clerkEnabled } = useAuthMode();
  const { data: departments, isLoading, error: queryError } = useDepartments();
  const deleteEmployee = useDeleteEmployee();
  const [deleteMessage, setDeleteMessage] = useState("");

  const handleDelete = async (id: number) => {
    setDeleteMessage("");
    const result = await deleteEmployee.mutateAsync(id);
    if (!result.success) {
      setDeleteMessage(result.message || "Failed to delete employee.");
    }
  };

  return (
    <main style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h2 style={{ color: "#ec9214", textAlign: "center", marginBottom: "20px" }}>Employees</h2>

      {isLoading && <p style={{ textAlign: "center" }}>Loading employees...</p>}

      {queryError && (
        <p style={{ color: "red", textAlign: "center" }}>
          Could not load employee data from the backend.
        </p>
      )}

      {deleteMessage && <p style={{ color: "red", textAlign: "center" }}>{deleteMessage}</p>}

      {departments?.map((dept) => (
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
            dept.employees.map((emp) => (
              <div
                key={emp.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "8px 0",
                  padding: "8px 12px",
                  backgroundColor: "white",
                  borderRadius: "4px",
                }}
              >
                <span>
                  {emp.firstName} {emp.lastName}
                </span>
                <AuthSignedIn>
                  <button
                    onClick={() => handleDelete(emp.id)}
                    disabled={deleteEmployee.isPending}
                    style={{
                      padding: "4px 10px",
                      backgroundColor: "#dc3545",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "12px",
                    }}
                  >
                    {deleteEmployee.isPending ? "Deleting..." : "Delete"}
                  </button>
                </AuthSignedIn>
              </div>
            ))
          )}
        </div>
      ))}

      <AuthSignedIn>
        <AddEmployeeForm />
      </AuthSignedIn>

      <AuthSignedOut>
        <div
          style={{
            marginTop: "20px",
            padding: "18px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            textAlign: "center",
            backgroundColor: "#fff8ef",
          }}
        >
          <p style={{ marginTop: 0 }}>
            {clerkEnabled
              ? "You must be logged in to add or delete employees."
              : "Add your real Clerk publishable key to enable sign in, then log in to manage employees."}
          </p>
          <a
            href="/sign-in"
            style={{
              padding: "10px 18px",
              backgroundColor: "#ec9214",
              color: "white",
              borderRadius: "4px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Log In
          </a>
        </div>
      </AuthSignedOut>
    </main>
  );
};

export default Employees;
