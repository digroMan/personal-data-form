import type { InputProps, LabelProps } from "./Input.props";

export const Input = ({ type, labelTitle, name, value }: InputProps & LabelProps) => {
  return (
    <>
      {labelTitle && <label>{labelTitle}</label>}
      <input type={type} name={name} value={value}/>
    </>
  );
};
