import type { Department as DepartmentType } from "../interfaces/Department";

interface Props {
  department: DepartmentType;
}

const Department = ({ department }: Props) => {
  return (
    <section style={{ marginBottom: "30px" }}>
      <h2>{department.name}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {department.employees.map((emp, index) => (
          <span key={index} style={{ padding: "8px 15px", backgroundColor: "#e9e1e1", borderRadius: "10px" }}>
            {emp.firstName} {emp.lastName}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Department;