import { employeeRepo } from "../repositories/employeeRepo";

export const employeeService = {
  createEmployee(
    firstName: string,
    lastName: string,
    departmentName: string
  ): { success: boolean; message?: string; field?: string; departments?: any } {

    const departments = employeeRepo.getDepartments();

    const departmentExists = departments.some(
      dept => dept.name === departmentName
    );

    if (!departmentExists) {
      return { success: false, message: "Department does not exist.", field: "department" };
    }

    if (firstName.trim().length < 3) {
      return {
        success: false,
        message: "First name must be at least 3 characters.",
        field: "firstName"
      };
    }

    const updatedDepartments = employeeRepo.createEmployee(
      firstName,
      lastName,
      departmentName
    );

    return { success: true, departments: updatedDepartments };
  }
};