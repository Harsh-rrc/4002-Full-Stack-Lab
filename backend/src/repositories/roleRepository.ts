import { prisma } from "../config/prisma";

export const roleRepository = {
  async getRoles() {
    const roles = await prisma.role.findMany({
      include: {
        employee: true,
      },
      orderBy: {
        id: "asc",
      },
    });

    return roles.map((item) => ({
      firstName: item.employee.firstName,
      lastName: item.employee.lastName,
      role: item.title,
    }));
  },

  async createRole(firstName: string, lastName: string, role: string) {
    let employee = await prisma.employee.findFirst({
      where: {
        firstName,
        lastName,
      },
    });

    if (!employee) {
      const defaultDepartment = await prisma.department.findFirst();

      if (!defaultDepartment) {
        throw new Error("No department found. Seed the database first.");
      }

      employee = await prisma.employee.create({
        data: {
          firstName,
          lastName,
          departmentId: defaultDepartment.id,
        },
      });
    }

    const existingRole = await prisma.role.findUnique({
      where: {
        employeeId: employee.id,
      },
    });

    if (existingRole) {
      await prisma.role.update({
        where: {
          employeeId: employee.id,
        },
        data: {
          title: role,
        },
      });
    } else {
      await prisma.role.create({
        data: {
          title: role,
          employeeId: employee.id,
        },
      });
    }

    const roles = await prisma.role.findMany({
      include: {
        employee: true,
      },
      orderBy: {
        id: "asc",
      },
    });

    return roles.map((item) => ({
      firstName: item.employee.firstName,
      lastName: item.employee.lastName,
      role: item.title,
    }));
  },
};
