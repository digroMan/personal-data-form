export const LABELS = {
  firstName: "Имя",
  lastName: "Фамилия",
  familyName: "Отчество",
  birthDate: "Дата рождения",
  gender: "Пол",
};

export const VALIDATION_TEXT = {
  pattern: {
    value: /^[a-zA-Zа-яА-ЯёЁ][a-zA-Zа-яА-ЯёЁ\s\-']+[a-zA-Zа-яА-ЯёЁ]$/u,
    message: "Допустимы символы латинского и кириллического алфавита, - ",
  },
  minLength: {
    value: 2,
    message: "Необходимо ввести 2 или более символа",
  },
};
