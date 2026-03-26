import type { Department } from "../interfaces/Department";
import { useFormInput } from "../hooks/useFormInput";
import { employeeService } from "../services/employeeService";

interface Props {
  departments: Department[];
  onAddEmployee: (departments: Department[]) => void;
}

const AddEmployeeForm = ({ departments, onAddEmployee }: Props) => {
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const department = useFormInput("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await employeeService.createEmployee(
      firstName.value,
      lastName.value,
      department.value
    );

    if (!result.success || !result.data) {
      firstName.setMessage(result.message || "Unable to add employee.");
      return;
    }

    firstName.setValue("");
    lastName.setValue("");
    department.setValue("");

    onAddEmployee(result.data);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '10px auto', padding: '5px' }}>
      <h2 style={{ textAlign: 'center', color: '#ec9214', marginBottom: '20px' }}>Add New Employee</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px' }}>
        <div>
          <label htmlFor="firstName" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>First Name</label>
          <input
            id="firstName"
            value={firstName.value}
            onChange={firstName.onChange}
            placeholder="Enter First Name"
            style={{ width: '100%', padding: '12px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          />
          {firstName.message && <p style={{ color: 'red', marginTop: '5px' }}>{firstName.message}</p>}
        </div>

        <div>
          <label htmlFor="lastName" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Last Name</label>
          <input
            id="lastName"
            value={lastName.value}
            onChange={lastName.onChange}
            placeholder="Enter Last Name"
            style={{ width: '100%', padding: '12px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label htmlFor="department" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Select Department</label>
          <select
            id="department"
            value={department.value}
            onChange={department.onChange}
            style={{ width: '100%', padding: '12px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          >
            <option value="">Select Department</option>
            {departments.map(dept => (
              <option key={dept.id} value={dept.name}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" style={{ padding: '12px 24px', fontSize: '16px', backgroundColor: '#ec9214', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', alignSelf: 'start' }}>
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;