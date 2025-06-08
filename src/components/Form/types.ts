import type { FormHTMLAttributes } from "react";
import type { RegisterOptions, Validate } from "react-hook-form";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  labels: { [key: string]: string };
  textValidation: Pick<RegisterOptions, "minLength" & "pattern">;
  handleAgeValidation: Validate<string, IFormInput>;
  requiredSettings: RegisterOptions["required"];
  formData?: Partial<IFormInput>;
  setFormData: (key: Partial<IFormInput>) => void;
  clearFormData?: () => void;
}

export type TFormField = "firstName" | "lastName" | "familyName" | "birthDate" | "gender";
export interface IFormInput {
  firstName: string;
  lastName: string;
  familyName: string;
  birthDate: string;
  gender: "male" | "female";
}
