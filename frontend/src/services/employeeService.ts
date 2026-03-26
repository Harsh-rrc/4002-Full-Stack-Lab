import { employeeRepo } from "../repositories/employeeRepo";
import type { Department } from "../interfaces/Department";

export const employeeService = {
  async getDepartments(): Promise<Department[]> {
    return await employeeRepo.getDepartments();
  },

  async createEmployee(
    firstName: string,
    lastName: string,
    departmentName: string
  ) {
    if (firstName.trim().length < 3) {
      return {
        success: false,
        message: "First name must be at least 3 characters."
      };
    }

    try {
      const updatedDepartments = await employeeRepo.createEmployee(
        firstName,
        lastName,
        departmentName
      );

      return { success: true, data: updatedDepartments };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Unable to create employee."
      };
    }
  }
};