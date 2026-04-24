import type { Department } from "../interfaces/Department";

const API_URL = "/api/employees";

export const employeeRepo = {
  async getDepartments(): Promise<Department[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch departments.");
    }

    return await response.json();
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
      credentials: "include",
      body: JSON.stringify({ firstName, lastName, departmentName })
    });

    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (!response.ok) {
      throw new Error(data?.message || "Failed to create employee.");
    }

    return data;
  },

  async deleteEmployee(id: number): Promise<Department[]> {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (!response.ok) {
      throw new Error(data?.message || "Failed to delete employee.");
    }

    return data;
  }
};
