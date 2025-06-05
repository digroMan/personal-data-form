import styles from "./Form.module.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { IFormInput, TFormField, FormProps } from "./types";
import { InputWrapper } from "../InputWrapper/InputWrapper";

export const verificationAge = (value: string) => {
  console.log("value");
  console.log(value);
};

export const Form = ({ labels, textValidation }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {Object.entries(labels).map(([key, label], index) => {
        const inputName = key as TFormField;
        const inputType = key !== "birthDate" ? "text" : "date";

        return (
          <InputWrapper key={index} labelTitle={label} errorMessage={errors[inputName]?.message}>
            {inputType === "text" && <input type={inputType} {...register(inputName, textValidation)} />}
            {inputType === "date" && <input type={inputType} {...register(inputName, { min: 18 })} />}
            {inputName === "gender" && (
              <>
                <label>
                  Мужчина
                  <input type='radio' value='male' {...register(inputName)} />
                </label>
                <label>
                  Женщина
                  <input type='radio' value='female' {...register(inputName)} />
                </label>
              </>
            )}
          </InputWrapper>
        );
      })}
      <input type='submit' value='Отправить персональные данные' />
    </form>
  );
};
