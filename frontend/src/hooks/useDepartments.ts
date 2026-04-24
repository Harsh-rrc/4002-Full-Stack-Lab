import { useQuery } from "@tanstack/react-query";
import { employeeService } from "../services/employeeService";
import type { Department } from "../interfaces/Department";

const DEPARTMENTS_QUERY_KEY = ["departments"] as const;

export const useDepartments = () => {
  return useQuery<Department[], Error>({
    queryKey: DEPARTMENTS_QUERY_KEY,
    queryFn: employeeService.getDepartments,
  });
};
