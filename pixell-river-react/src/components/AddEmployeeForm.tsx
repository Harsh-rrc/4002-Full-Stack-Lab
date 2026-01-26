import { useState } from "react";
import type { Department } from "../interfaces/Department";

interface Props {
  departments: Department[];
  onAddEmployee: (
    firstName: string,
    lastName: string,
    departmentName: string
  ) => void;
}

const AddEmployeeForm = ({ departments, onAddEmployee }: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (firstName.trim().length < 3) {
      setError("First name must be at least 3 characters");
      return;
    }

    setError("");
    onAddEmployee(firstName, lastName, department);

    setFirstName("");
    setLastName("");
    setDepartment("");
  };

  return (
    <div style={{ maxWidth: '500px', margin: '10px auto', padding: '5px' }}>
      <h2 style={{ textAlign: 'center', color: '#ec9214', marginBottom: '20px' }}>Add New Employee</h2>
      {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px' }}>
        <div>
          <label htmlFor="firstName" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>First Name</label>
          <input
            id="firstName"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            style={{
              width: '50%',
              padding: '12px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div>
          <label htmlFor="lastName" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Last Name</label>
          <input
            id="lastName"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            style={{
              width: '50%',
              padding: '12px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div>
          <label htmlFor="department" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Select Department</label>
          <select
            id="department"
            value={department}
            onChange={e => setDepartment(e.target.value)}
            style={{
              width: '50%',
              padding: '12px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          >
            <option value="">Select Department</option>
            {departments.map(dept => (
              <option key={dept.name} value={dept.name}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#ec9214',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            alignSelf: 'start'
          }}
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;