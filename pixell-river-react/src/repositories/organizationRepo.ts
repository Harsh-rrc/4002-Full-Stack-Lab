import type { Role } from "../interfaces/Role";
import { organization as initialData } from "../data/organization";

let roles: Role[] = [...initialData];

export const organizationRepo = {
  getRoles(): Role[] {
    return roles;
  },

  createRole(firstName: string, lastName: string, role: string): Role[] {
    roles = [...roles, { firstName, lastName, role }];
    return roles;
  }
};