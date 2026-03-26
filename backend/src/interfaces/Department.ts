import { Employee } from "./Employee";

export interface Department {
  id: number;
  name: string;
  employees: Employee[];
}