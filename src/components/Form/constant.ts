type FormField = 'firstName' | 'lastName' | 'familyName' | 'birthdate' | 'gender';

export const LABELS = {
  firstName: "Имя",
  lastName: "Отчество",
  familyName: "Фамилия",
  birthdate: "Дата рождения",
  gender: "Укажите Ваш пол",
} satisfies Record<FormField, string>;
