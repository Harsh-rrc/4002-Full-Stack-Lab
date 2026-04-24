import { useMutation, useQueryClient } from "@tanstack/react-query";
import { employeeService } from "../services/employeeService";
import type { Department } from "../interfaces/Department";

const DEPARTMENTS_QUERY_KEY = ["departments"] as const;

export const useCreateEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      firstName,
      lastName,
      departmentName,
    }: {
      firstName: string;
      lastName: string;
      departmentName: string;
    }) => employeeService.createEmployee(firstName, lastName, departmentName),
    onSuccess: (data) => {
      if (data.success && data.data) {
        queryClient.setQueryData<Department[]>(DEPARTMENTS_QUERY_KEY, data.data);
      }
    },
  });
};

export const useDeleteEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => employeeService.deleteEmployee(id),
    onSuccess: (data) => {
      if (data.success && data.data) {
        queryClient.setQueryData<Department[]>(DEPARTMENTS_QUERY_KEY, data.data);
      }
    },
  });
};
