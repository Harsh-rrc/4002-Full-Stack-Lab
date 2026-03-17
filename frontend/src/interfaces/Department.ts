export interface Employee {
  firstName: string;
  lastName?: string;
}

export interface Department {
  id: number;
  name: string;
  employees: Employee[];
}
