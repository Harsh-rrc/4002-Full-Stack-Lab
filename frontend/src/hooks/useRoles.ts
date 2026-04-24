import { useQuery } from "@tanstack/react-query";
import { organizationService } from "../services/organizationService";
import type { Role } from "../interfaces/Role";

const ROLES_QUERY_KEY = ["roles"] as const;

export const useRoles = () => {
  return useQuery<Role[], Error>({
    queryKey: ROLES_QUERY_KEY,
    queryFn: organizationService.getRoles,
  });
};
