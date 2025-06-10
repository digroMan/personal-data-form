import styles from "./Form.module.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { IFormInput, TFormField, FormProps, TFormValues } from "./types";
import { InputWrapper } from "../InputWrapper/InputWrapper";
import { useEffect } from "react";
import { InputPersonalData } from "./ui/InputPersonalData/InputPersonalData";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./lib/validation";

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
    console.log("first");
    console.log(formData);
    // reset(formData);
  }, []);

  useEffect(() => {
    const subscription = watch((data) => {
      console.log("hi");
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
            <InputPersonalData name={key as TFormField} configuration={register} />
          </InputWrapper>
        );
      })}
      <input type='submit' value='Сохранить' />
    </form>
  );
};
