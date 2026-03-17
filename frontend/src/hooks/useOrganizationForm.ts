import type { Role } from "../interfaces/Role";
import { organizationService } from "../services/organizationService";
import { useFormInput } from "./useFormInput";

export const useOrganizationForm = (onUpdate: (roles: Role[]) => void) => {
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const role = useFormInput("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await organizationService.createRole(firstName.value, lastName.value, role.value);

    if (!result.success) {
      const message = result.message || "Unable to create role.";
      firstName.setMessage(message);
      return;
    }

    firstName.setValue("");
    lastName.setValue("");
    role.setValue("");

    onUpdate(result.data);
  };

  return {
    firstName,
    lastName,
    role,
    handleSubmit
  };
};
