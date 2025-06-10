import type { FormHTMLAttributes } from "react";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  labels: { [key: string]: string };
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
