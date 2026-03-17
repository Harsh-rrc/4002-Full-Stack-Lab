import type { Role } from "../interfaces/Role";

const API_URL = "http://localhost:3001/roles";

export const organizationRepo = {
  async getRoles(): Promise<Role[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch roles.");
    }

    return (await response.json()) as Role[];
  },

  async createRole(firstName: string, lastName: string, role: string): Promise<Role[]> {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ firstName, lastName, role })
    });

    if (!response.ok) {
      const error = (await response.json()) as { message?: string };
      throw new Error(error.message || "Failed to create role.");
    }

    return (await response.json()) as Role[];
  }
};
