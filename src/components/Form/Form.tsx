import styles from "./Form.module.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { IFormInput, TFormField, FormProps } from "./types";
import { InputWrapper } from "../InputWrapper/InputWrapper";
import { useEffect } from "react";
import { Input } from "../Input/Input";
import { formSchema, type TFormValues } from "../../constants";
import { zodResolver } from "@hookform/resolvers/zod";

export const Form = ({ labels, formData, setFormData }: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<TFormValues>({
    resolver: zodResolver(formSchema),
  });

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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {Object.entries(labels).map(([key, label], index) => {
        return (
          <InputWrapper key={index} labelTitle={label} errorMessage={errors[key as TFormField]?.message}>
            <Input name={key as TFormField} configuration={register} />
          </InputWrapper>
        );
      })}
      <input type='submit' value='Сохранить' />
    </form>
  );
};
