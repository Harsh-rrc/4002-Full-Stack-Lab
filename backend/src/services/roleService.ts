import { roleRepository } from "../repositories/roleRepository";

export const roleService = {
  async getRoles() {
    return roleRepository.getRoles();
  },

  async createRole(firstName: string, lastName: string, role: string) {
    try {
      const roles = await roleRepository.createRole(firstName, lastName, role);

      return {
        success: true,
        roles,
      };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Unable to create role.",
      };
    }
  },
};
