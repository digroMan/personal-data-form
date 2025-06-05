export interface IFormInput {
  firstName: string;
  lastName: string;
  familyName: string;
  birthdate: string;
  gender: "male"|"female";
};

export type TFormInputsNames = keyof IFormInput;