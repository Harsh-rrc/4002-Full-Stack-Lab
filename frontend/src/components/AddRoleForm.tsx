import { useFormInput } from "../hooks/useFormInput";
import { useCreateRole } from "../hooks/useRoleMutations";

const AddRoleForm = () => {
  const createRole = useCreateRole();
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const role = useFormInput("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await createRole.mutateAsync({
      firstName: firstName.value,
      lastName: lastName.value,
      role: role.value,
    });

    if (!result.success) {
      firstName.setMessage(result.message || "");
      return;
    }

    firstName.setValue("");
    lastName.setValue("");
    role.setValue("");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", padding: "5px" }}>
      <h3 style={{ textAlign: "center", color: "#ec9214", marginBottom: "20px" }}>
        Add New Role
      </h3>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "15px" }}>
        <div>
          <label
            htmlFor="firstName"
            style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
          >
            First Name
          </label>
          <input
            id="firstName"
            value={firstName.value}
            onChange={firstName.onChange}
            placeholder="Enter First Name"
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
          {firstName.message && (
            <p style={{ color: "red", marginTop: "5px" }}>{firstName.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
          >
            Last Name
          </label>
          <input
            id="lastName"
            value={lastName.value}
            onChange={lastName.onChange}
            placeholder="Enter Last Name"
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="role"
            style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
          >
            Role
          </label>
          <input
            id="role"
            value={role.value}
            onChange={role.onChange}
            placeholder="Enter Role"
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
          {role.message && (
            <p style={{ color: "red", marginTop: "5px" }}>{role.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={createRole.isPending}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#ec9214",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            alignSelf: "start",
            marginTop: "10px",
          }}
        >
          {createRole.isPending ? "Creating..." : "Create Role"}
        </button>
      </form>
    </div>
  );
};

export default AddRoleForm;

