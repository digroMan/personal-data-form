import type { LabelHTMLAttributes } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  labelTitle: string;
  errorMessage?: string;
  inputInside?: boolean;
}
