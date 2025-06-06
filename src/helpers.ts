import dayjs from "dayjs";

export const verificationAge = (value: string) => {
  const today = dayjs();
  const dateBirth = dayjs(value);
  const difference = today.diff(dateBirth, "years");
  if (difference >= 18) return true;
  else return "Вам меньше 18 лет";
};