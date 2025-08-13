import type { FormHTMLAttributes } from "react";
import type { formSchema } from "./lib/validation";
import type { z } from "zod";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  labels: { [key: string]: string };
  localStorageKey: string;
}

export type TFormField = "firstName" | "lastName" | "familyName" | "birthDate" | "gender";

export interface IFormInput {
  firstName: string;
  lastName: string;
  familyName: string;
  birthDate: string;
  gender: "male" | "female";
}

export type TFormValues = z.infer<typeof formSchema>;
