import type { LabelProps } from "./types";

export const InputWrapper = ({ labelTitle, children, errorMessage }: LabelProps) => {
  return (
    <>
      {labelTitle && <label>{labelTitle}</label>}
      {children}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};
