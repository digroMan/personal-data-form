import type { LabelProps } from "./types";
import styles from "./InputWrapper.module.css";

export const InputWrapper = ({ labelTitle, children, errorMessage, inputInside, className }: LabelProps) => {
  return (
    <>
      {inputInside && (
        <label className={className}>
          {labelTitle}
          {children}
        </label>
      )}
      {!inputInside && (
        <>
          <label>{labelTitle}</label>
          {children}
        </>
      )}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </>
  );
};
