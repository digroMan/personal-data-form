import type { FormHTMLAttributes } from "react";
import type { RegisterOptions, ValidationRule } from "react-hook-form";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  labels: { [key: string]: string };
  textValidation: Pick<RegisterOptions, "minLength" & "pattern">;
}

export type TFormField = "firstName" | "lastName" | "familyName" | "birthDate" | "gender";
export interface IFormInput {
  firstName: string;
  lastName: string;
  familyName: string;
  birthDate: string;
  gender: "male" | "female";
}
