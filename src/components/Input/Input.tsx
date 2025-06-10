import type { InputProps } from "./types";
import styles from "./Input.module.css";

export const Input = ({ name, configuration }: InputProps) => {
  switch (name) {
    case "birthDate":
      return <input type='date' {...configuration(name)} className={styles.input} />;
    case "gender":
      return (
        <>
          <label>
            Мужчина
            <input type='radio' value='male' {...configuration(name)} />
          </label>
          <label>
            Женщина
            <input type='radio' value='female' {...configuration(name)} />
          </label>
        </>
      );
    default:
      return <input type='text' {...configuration(name)} className={styles.input} />;
  }
};
