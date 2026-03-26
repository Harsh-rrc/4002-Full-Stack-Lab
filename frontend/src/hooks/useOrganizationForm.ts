import { useFormInput } from "./useFormInput";
import { organizationService } from "../services/organizationService";

export const useOrganizationForm = (onUpdate: (roles: any) => void) => {
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const role = useFormInput("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await organizationService.createRole(
      firstName.value,
      lastName.value,
      role.value
    );

    if (!result.success) {
      firstName.setMessage(result.message || "");
      return;
    }

    firstName.setValue("");
    lastName.setValue("");
    role.setValue("");

    onUpdate(result.roles);
  };

  return {
    firstName,
    lastName,
    role,
    handleSubmit
  };
};