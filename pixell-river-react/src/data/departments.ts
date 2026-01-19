import type { Department } from "../interfaces/Department";

export const departments: Department[] = [
  {
    name: "Management",
    employees: [
      { firstName: "Jigneshkumar", lastName: "Pandya" },
      { firstName: "Harsh", lastName: "Pandya" }
    ]
  },
  {
    name: "Finance",
    employees: [
      { firstName: "Ayushi", lastName: "Pandya" },
      { firstName: "Vraj", lastName: "Patel" }
    ]
  },
  {
    name: "Customer Support",
    employees: [
      { firstName: "Ava", lastName: "Patel" },
      { firstName: "Akansha", lastName: "Pandya" }
    ]
  }
];