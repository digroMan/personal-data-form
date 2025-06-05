import type { InputHTMLAttributes, LabelHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{};
export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>{
    labelTitle?: string,
};