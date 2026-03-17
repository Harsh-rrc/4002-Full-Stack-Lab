import type { Role } from "../interfaces/Role";
import { organizationRepo } from "../repositories/organizationRepo";

export const organizationService = {
  async getRoles(): Promise<Role[]> {
    return await organizationRepo.getRoles();
  },

  async createRole(firstName: string, lastName: string, role: string) {
    if (firstName.trim().length < 2) {
      return { success: false as const, message: "First name must be at least 2 characters." };
    }

    if (lastName.trim().length < 2) {
      return { success: false as const, message: "Last name must be at least 2 characters." };
    }

    if (role.trim().length < 2) {
      return { success: false as const, message: "Role must be at least 2 characters." };
    }

    try {
      const updatedRoles = await organizationRepo.createRole(firstName, lastName, role);
      return { success: true as const, data: updatedRoles };
    } catch (error) {
      return {
        success: false as const,
        message: error instanceof Error ? error.message : "Unable to create role."
      };
    }
  }
};
