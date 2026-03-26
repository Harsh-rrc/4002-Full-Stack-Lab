import { prisma } from "../config/prisma";

export const employeeRepository = {
  async getDepartments() {
    return prisma.department.findMany({
      include: {
        employees: true,
      },
      orderBy: {
        id: "asc",
      },
    });
  },

  async createEmployee(firstName: string, lastName: string, departmentName: string) {
    const department = await prisma.department.findUnique({
      where: { name: departmentName },
    });

    if (!department) {
      throw new Error("Department not found.");
    }

    await prisma.employee.create({
      data: {
        firstName,
        lastName,
        departmentId: department.id,
      },
    });

    return prisma.department.findMany({
      include: {
        employees: true,
      },
      orderBy: {
        id: "asc",
      },
    });
  },
};
