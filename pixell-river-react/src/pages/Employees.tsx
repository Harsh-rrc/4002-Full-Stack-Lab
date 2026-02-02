import Department from "../components/Department";
import AddEmployeeForm from "../components/AddEmployeeForm";
import type { Department as DepartmentType } from "../interfaces/Department";

interface Props {
  departments: DepartmentType[];
  onAddEmployee: (
    firstName: string,
    lastName: string,
    departmentName: string
  ) => void;
}

const Employees = ({ departments, onAddEmployee }: Props) => {
  return (
    <main style={{ padding: "20px" }}>
      {departments.map(dept => (
        <Department key={dept.name} department={dept} />
      ))}

      <AddEmployeeForm
        departments={departments}
        onAddEmployee={onAddEmployee}
      />
    </main>
  );
};

export default Employees;