import styles from "./Form.module.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { IFormInput, TFormInputsNames } from "./types";
import { LABELS } from "./constant";

export const Form = () => {
    const { register, handleSubmit, formState:{errors} } = useForm<IFormInput>();
      const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {Object.entries(LABELS).map(([key, value]) => (
        <>
          <label>
            {value}
            {/* <input {...register(key)} /> */}
            <input {...register(key)} />
          </label>
        </>
      ))}
    </form>
  );
};
