import type { LabelProps } from "./types";
import styles from "./InputWrapper.module.css";

export const InputWrapper = ({ labelTitle, children, errorMessage }: LabelProps) => {
  return (
    <>
      {labelTitle && <label>{labelTitle}</label>}
      {children}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </>
  );
};
