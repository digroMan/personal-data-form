import { useForm, type SubmitHandler } from "react-hook-form";
import "./App.css";
import { Input } from "./components/Input/Input";
import type { IFormInput } from "./components/Form/types";



function App() {
  const { register, handleSubmit, formState:{errors} } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Фамилия</label>
      <input {...register("familyName", 
      {
        pattern: {
          value: /^[a-zA-Zа-яА-ЯёЁ\s\-']+$/u,
          message: 'Некоторые символы не допустимы'
        },
        minLength: {
          value: 2,
          message: 'Необходимо ввести 2 или более символа'
        }
      }
      )} />
      {errors && (
        <p>{errors.familyName?.message}</p>
      )}
      <label>Имя</label>
      <input {...register("firstName")} />
      <label>Отчество</label>
      <input {...register("lastName")} />
      <label>Дата рождения</label>
      <input type='date' {...register("birthdate")} />
      <fieldset>
        <legend>Укажите пол:</legend>
        <label htmlFor="male">
          <input type='radio' value='male' {...register("gender")} />
          Муж
        </label>
        <label htmlFor="female">
          <input type='radio' value='female'  {...register("gender")} />
          Жен
        </label>
      </fieldset>
      <Input type="submit" value="Отправить персональные данные"/>
    </form>
  );
}

export default App;
