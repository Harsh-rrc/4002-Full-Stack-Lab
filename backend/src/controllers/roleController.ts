import { Request, Response } from "express";
import { roleService } from "../services/roleService";

export const roleController = {
  async getRoles(_req: Request, res: Response) {
    const roles = await roleService.getRoles();
    res.json(roles);
  },

  async createRole(req: Request, res: Response) {
    const { firstName, lastName, role } = req.body;

    if (!firstName || !lastName || !role) {
      return res.status(400).json({
        message: "First name, last name, and role are required.",
      });
    }

    const result = await roleService.createRole(firstName, lastName, role);

    if (!result.success) {
      return res.status(400).json({
        message: result.message,
      });
    }

    return res.status(201).json(result.roles);
  },

  async deleteRole(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid role ID.",
      });
    }

    const result = await roleService.deleteRole(id);

    if (!result.success) {
      return res.status(400).json({
        message: result.message,
      });
    }

    return res.status(200).json(result.roles);
  },
};
