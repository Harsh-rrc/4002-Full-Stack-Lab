import type { Role } from "../interfaces/Role";

const API_URL = "/api/roles";

export const organizationRepo = {
  async getRoles(): Promise<Role[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch roles.");
    }

    return await response.json();
  },

  async createRole(
    firstName: string,
    lastName: string,
    role: string
  ): Promise<Role[]> {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ firstName, lastName, role })
    });

    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (!response.ok) {
      throw new Error(data?.message || "Failed to create role.");
    }

    return data;
  }
};