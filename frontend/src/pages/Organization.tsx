import { useState } from "react";
import AddRoleForm from "../components/AddRoleForm";
import { useRoles } from "../hooks/useRoles";
import { useDeleteRole } from "../hooks/useRoleMutations";
import { AuthSignedIn, AuthSignedOut, useAuthMode } from "../auth/AuthContext";

const Organization = () => {
  const { clerkEnabled } = useAuthMode();
  const { data: roles, isLoading, error: queryError } = useRoles();
  const deleteRole = useDeleteRole();
  const [deleteMessage, setDeleteMessage] = useState("");

  const handleDelete = async (id: number) => {
    setDeleteMessage("");
    const result = await deleteRole.mutateAsync(id);
    if (!result.success) {
      setDeleteMessage(result.message || "Failed to delete role.");
    }
  };

  return (
    <main style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", color: "#ec9214", marginBottom: "30px" }}>
        Organization Structure
      </h2>

      {isLoading && <p style={{ textAlign: "center" }}>Loading roles...</p>}

      {queryError && (
        <p style={{ color: "red", textAlign: "center" }}>
          Could not load role data from the backend.
        </p>
      )}

      {deleteMessage && <p style={{ color: "red", textAlign: "center" }}>{deleteMessage}</p>}

      <div
        style={{
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "30px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginBottom: "20px", color: "#333" }}>Current Roles</h3>

        {roles?.length === 0 && !queryError ? (
          <p style={{ color: "#666", textAlign: "center" }}>No roles added yet.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {roles?.map((person, index) => (
              <li
                key={person.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px",
                  marginBottom: "10px",
                  backgroundColor: "white",
                  borderRadius: "6px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  borderLeft: index === 0 ? "4px solid #ec9214" : "4px solid #4caf50",
                }}
              >
                <div>
                  <span style={{ fontWeight: "bold", color: "#333" }}>
                    {person.firstName} {person.lastName}
                  </span>
                  <span
                    style={{
                      color: "#666",
                      backgroundColor: "#f0f0f0",
                      padding: "5px 12px",
                      borderRadius: "15px",
                      fontSize: "14px",
                      marginLeft: "10px",
                    }}
                  >
                    {person.role}
                  </span>
                </div>
                <AuthSignedIn>
                  <button
                    onClick={() => handleDelete(person.id)}
                    disabled={deleteRole.isPending}
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
                    {deleteRole.isPending ? "Deleting..." : "Delete"}
                  </button>
                </AuthSignedIn>
              </li>
            ))}
          </ul>
        )}
      </div>

      <AuthSignedIn>
        <AddRoleForm />
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
              ? "You must be logged in to manage roles."
              : "Add your real Clerk publishable key to enable sign in, then log in to manage roles."}
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

export default Organization;
