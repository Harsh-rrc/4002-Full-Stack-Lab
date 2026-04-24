import { useMutation, useQueryClient } from "@tanstack/react-query";
import { organizationService } from "../services/organizationService";
import type { Role } from "../interfaces/Role";

const ROLES_QUERY_KEY = ["roles"] as const;

export const useCreateRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      firstName,
      lastName,
      role,
    }: {
      firstName: string;
      lastName: string;
      role: string;
    }) => organizationService.createRole(firstName, lastName, role),
    onSuccess: (data) => {
      if (data.success && data.roles) {
        queryClient.setQueryData<Role[]>(ROLES_QUERY_KEY, data.roles);
      }
    },
  });
};

export const useDeleteRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => organizationService.deleteRole(id),
    onSuccess: (data) => {
      if (data.success && data.roles) {
        queryClient.setQueryData<Role[]>(ROLES_QUERY_KEY, data.roles);
      }
    },
  });
};
