import { useFormInput } from "./useFormInput";
import { organizationService } from "../services/organizationService";

export const useOrganizationForm = (onUpdate: (roles: any) => void) => {
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const role = useFormInput("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = organizationService.createRole(
      firstName.value,
      lastName.value,
      role.value
    );

    if (!result.success) {
      firstName.setMessage(result.message || "");
      return;
    }

    onUpdate(result.roles);
  };

  return {
    firstName,
    lastName,
    role,
    handleSubmit
  };
};