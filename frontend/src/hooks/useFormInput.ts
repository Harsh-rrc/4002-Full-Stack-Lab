import { useState } from "react";

export const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [message, setMessage] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValue(e.target.value);
    setMessage("");
  };

  const validate = (validator: (value: string) => string | null) => {
    const error = validator(value);

    if (error) {
      setMessage(error);
      return false;
    }

    return true;
  };

  return {
    value,
    onChange,
    message,
    setMessage,
    setValue,
    validate
  };
};