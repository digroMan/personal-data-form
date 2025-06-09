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
    const subscription = watch((data) => {
      const hasValues = Object.values(data).some((value) => value);
      if (hasValues) setFormData(data);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const newInput = (name: TFormField) => {
    switch (name) {
      case "birthDate":
        return <input type='date' {...register(name, { validate: handleAgeValidation })} className={styles.input} />;
      case "gender":
        return (
          <>
            <label>
              Мужчина
              <input type='radio' value='male' {...register(name, { required: requiredSettings })} />
            </label>
            <label>
              Женщина
              <input type='radio' value='female' {...register(name, { required: requiredSettings })} />
            </label>
          </>
        );
      default:
        return (
          <input
            type='text'
            {...register(name, { ...textValidation, required: requiredSettings })}
            className={styles.input}
          />
        );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {Object.entries(labels).map(([key, label], index) => {
        const inputName = key as TFormField;
        const inputType = key === "birthDate" ? "date" : key === "gender" ? "radio" : "text";

        return (
          <InputWrapper key={index} labelTitle={label} errorMessage={errors[inputName]?.message}>
            {newInput(key)}
          </InputWrapper>
        );
      })}
      <input type='submit' value='Сохранить' />
    </form>
  );
};
