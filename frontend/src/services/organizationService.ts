import { organizationRepo } from "../repositories/organizationRepo";

export const organizationService = {
  createRole(firstName: string, lastName: string, role: string) {
    const roles = organizationRepo.getRoles();

    if (firstName.trim().length < 3) {
      return { success: false, message: "First name must be at least 3 characters." };
    }

    const roleExists = roles.some(r => r.role === role);

    if (roleExists) {
      return { success: false, message: "This role is already occupied." };
    }

    const updatedRoles = organizationRepo.createRole(
      firstName,
      lastName,
      role
    );

    return { success: true, roles: updatedRoles };
  }
};