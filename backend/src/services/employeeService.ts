import { employeeRepository } from "../repositories/employeeRepository";

export const employeeService = {
  async getDepartments() {
    return employeeRepository.getDepartments();
  },

  async createEmployee(firstName: string, lastName: string, departmentName: string) {
    try {
      const data = await employeeRepository.createEmployee(firstName, lastName, departmentName);

      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Unable to create employee.",
      };
    }
  },
};
