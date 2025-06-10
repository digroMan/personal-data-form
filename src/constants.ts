import { z } from "zod";
import dayjs from "dayjs";

export const LABELS = {
  firstName: "Имя",
  lastName: "Фамилия",
  familyName: "Отчество",
  birthDate: "Дата рождения",
  gender: "Пол",
};

export const ZOD_VALIDATION_TEXT = z
  .string()
  .min(2, "Необходимо ввести 2 или более символа")
  .regex(
    /^[a-zA-Zа-яА-ЯёЁ][a-zA-Zа-яА-ЯёЁ\s\-']+[a-zA-Zа-яА-ЯёЁ]$/u,
    "Допустимы символы латинского и кириллического алфавита, - ",
  );

export const formSchema = z.object({
  firstName: ZOD_VALIDATION_TEXT,
  birthDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Не верный формат даты")
    .refine((dateString) => {
      const today = dayjs();
      const dateBirth = dayjs(dateString);
      const difference = today.diff(dateBirth, "years");

      if (difference >= 18) return true;
    }, "Вам меньше 18 лет"),
  lastName: ZOD_VALIDATION_TEXT,
  familyName: ZOD_VALIDATION_TEXT,
  gender: z.enum(["male", "female"], {
    errorMap: () => ({ message: "Выберите пол" }),
  }),
});

export type TFormValues = z.infer<typeof formSchema>;
