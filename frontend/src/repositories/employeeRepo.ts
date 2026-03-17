import type { Department } from "../interfaces/Department";

const API_URL = "http://localhost:3001/employees";

export const employeeRepo = {
  async getDepartments(): Promise<Department[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch departments.");
    }

    return (await response.json()) as Department[];
  },

  async createEmployee(
    firstName: string,
    lastName: string,
    departmentName: string
  ): Promise<Department[]> {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ firstName, lastName, departmentName })
    });

    if (!response.ok) {
      const error = (await response.json()) as { message?: string };
      throw new Error(error.message || "Failed to create employee.");
    }

    return (await response.json()) as Department[];
  }
};
