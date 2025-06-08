import styles from "./Form.module.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { IFormInput, TFormField, FormProps } from "./types";
import { InputWrapper } from "../InputWrapper/InputWrapper";
import { useEffect } from "react";

export const Form = ({
  labels,
  textValidation,
  handleAgeValidation,
  requiredSettings,
  formData,
  setFormData,
}: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = () => reset();

  useEffect(() => {
    reset(formData);
  }, [formData]);

  useEffect(() => {
    watch((data) => {
      const hasValues = Object.values(data).some((value) => value);
      if (hasValues) setFormData(data);
    });
  }, [watch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {Object.entries(labels).map(([key, label], index) => {
        const inputName = key as TFormField;
        const inputType = key === "birthDate" ? "date" : key === "gender" ? "radio" : "text";

        return (
          <InputWrapper key={index} labelTitle={label} errorMessage={errors[inputName]?.message}>
            {inputType === "text" && (
              <input
                type={inputType}
                {...register(inputName, { ...textValidation, required: requiredSettings })}
                className={styles.input}
              />
            )}
            {inputType === "date" && (
              <input
                type={inputType}
                {...register(inputName, { validate: handleAgeValidation })}
                className={styles.input}
              />
            )}
            {inputType === "radio" && (
              <>
                <label>
                  Мужчина
                  <input type={inputType} value='male' {...register(inputName, { required: requiredSettings })} />
                </label>
                <label>
                  Женщина
                  <input type={inputType} value='female' {...register(inputName, { required: requiredSettings })} />
                </label>
              </>
            )}
          </InputWrapper>
        );
      })}
      <input type='submit' value='Сохранить' />
    </form>
  );
};
