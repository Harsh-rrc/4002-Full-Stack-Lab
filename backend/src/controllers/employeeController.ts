import { Request, Response } from "express";
import { employeeService } from "../services/employeeService";

export const employeeController = {
  async getDepartments(_req: Request, res: Response) {
    const departments = await employeeService.getDepartments();
    res.json(departments);
  },

  async createEmployee(req: Request, res: Response) {
    const { firstName, lastName, departmentName } = req.body;

    if (!firstName || !lastName || !departmentName) {
      return res.status(400).json({
        message: "First name, last name, and department are required.",
      });
    }

    const result = await employeeService.createEmployee(firstName, lastName, departmentName);

    if (!result.success) {
      return res.status(400).json({
        message: result.message,
      });
    }

    return res.status(201).json(result.data);
  },
};
