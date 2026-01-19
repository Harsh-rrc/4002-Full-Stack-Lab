import type { Department as DepartmentType } from "../interfaces/Department";

interface Props {
  department: DepartmentType;
}

const Department = ({ department }: Props) => {
  return (
    <section style={{ marginBottom: "25px" }}>
      <h2>{department.name}</h2>
      <ul>
        {department.employees.map((emp, index) => (
          <li key={index}>
            {emp.firstName} {emp.lastName}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Department;