import type { Department } from "../interfaces/Department";
import { employeeRepo } from "../repositories/employeeRepo";

export const employeeService = {
  async getDepartments(): Promise<Department[]> {
    return await employeeRepo.getDepartments();
  },

  async createEmployee(firstName: string, lastName: string, departmentName: string) {
    if (firstName.trim().length < 2) {
      return {
        success: false as const,
        message: "First name must be at least 2 characters."
      };
    }

    if (lastName.trim().length < 2) {
      return {
        success: false as const,
        message: "Last name must be at least 2 characters."
      };
    }

    if (!departmentName.trim()) {
      return {
        success: false as const,
        message: "Please select a department."
      };
    }

    try {
      const updatedDepartments = await employeeRepo.createEmployee(firstName, lastName, departmentName);

      return { success: true as const, data: updatedDepartments };
    } catch (error) {
      return {
        success: false as const,
        message: error instanceof Error ? error.message : "Unable to create employee."
      };
    }
  }
};
