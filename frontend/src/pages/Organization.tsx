import { useEffect, useState } from "react";
import AddRoleForm from "../components/AddRoleForm";
import { organizationService } from "../services/organizationService";
import type { Role } from "../interfaces/Role";

const Organization = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadRoles = async () => {
      try {
        const data = await organizationService.getRoles();
        setRoles(data);
        setError("");
      } catch {
        setError("Could not load role data from the backend.");
      }
    };

    loadRoles();
  }, []);

  return (
    <main style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", color: "#ec9214", marginBottom: "30px" }}>
        Organization Structure
      </h2>

      {error && <p>{error}</p>}

      <div style={{ 
        backgroundColor: "#f9f9f9", 
        borderRadius: "8px", 
        padding: "20px",
        marginBottom: "30px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}>
        <h3 style={{ marginBottom: "20px", color: "#333" }}>Current Roles</h3>

        {roles.length === 0 && !error ? (
          <p style={{ color: "#666", textAlign: "center" }}>No roles added yet.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {roles.map((person, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "15px",
                  marginBottom: "10px",
                  backgroundColor: "white",
                  borderRadius: "6px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  borderLeft: index === 0 ? "4px solid #ec9214" : "4px solid #4caf50"
                }}
              >
                <span style={{ fontWeight: "bold", color: "#333" }}>
                  {person.firstName} {person.lastName}
                </span>
                <span style={{ 
                  color: "#666", 
                  backgroundColor: "#f0f0f0",
                  padding: "5px 12px",
                  borderRadius: "15px",
                  fontSize: "14px"
                }}>
                  {person.role}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <AddRoleForm onUpdate={setRoles} />
    </main>
  );
};

export default Organization;