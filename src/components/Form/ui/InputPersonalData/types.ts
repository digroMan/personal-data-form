import type { InputHTMLAttributes } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { IFormInput, TFormField } from "../../types";

export interface InputProps extends InputHTMLAttributes<HTMLLabelElement> {
  name: TFormField;
  configuration: UseFormRegister<IFormInput>;
}
