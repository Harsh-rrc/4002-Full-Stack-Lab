import { organizationRepo } from "../repositories/organizationRepo";
import type { Role } from "../interfaces/Role";

export const organizationService = {
  async getRoles(): Promise<Role[]> {
    return await organizationRepo.getRoles();
  },

  async createRole(firstName: string, lastName: string, role: string) {
    if (firstName.trim().length < 3) {
      return { success: false, message: "First name must be at least 3 characters." };
    }

    try {
      const updatedRoles = await organizationRepo.createRole(firstName, lastName, role);
      return { success: true, roles: updatedRoles };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Unable to create role."
      };
    }
  },

  async deleteRole(id: number) {
    try {
      const updatedRoles = await organizationRepo.deleteRole(id);
      return { success: true, roles: updatedRoles };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Unable to delete role."
      };
    }
  }
};

