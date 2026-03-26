import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.role.deleteMany();
  await prisma.employee.deleteMany();
  await prisma.department.deleteMany();

  const it = await prisma.department.create({ data: { name: "IT" } });
  const hr = await prisma.department.create({ data: { name: "HR" } });
  const finance = await prisma.department.create({ data: { name: "Finance" } });

  const harsh = await prisma.employee.create({
    data: {
      firstName: "Harsh",
      lastName: "Pandya",
      departmentId: it.id,
    },
  });

  const jane = await prisma.employee.create({
    data: {
      firstName: "Jane",
      lastName: "Doe",
      departmentId: hr.id,
    },
  });

  const alex = await prisma.employee.create({
    data: {
      firstName: "Alex",
      lastName: "Smith",
      departmentId: finance.id,
    },
  });

  await prisma.role.create({
    data: {
      title: "Head",
      employeeId: harsh.id,
    },
  });

  await prisma.role.create({
    data: {
      title: "Manager",
      employeeId: jane.id,
    },
  });

  await prisma.role.create({
    data: {
      title: "Analyst",
      employeeId: alex.id,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
