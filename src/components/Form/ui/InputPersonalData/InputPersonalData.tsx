import type { InputProps } from "./types";
import styles from "./InputPersonalData.module.css";
import { GENDER } from "../../../../constants";
import { InputWrapper } from "../../../InputWrapper/InputWrapper";

export const InputPersonalData = ({ name, configuration }: InputProps) => {
  switch (name) {
    case "birthDate":
      return <input type='date' {...configuration(name)} />;
    case "gender":
      return (
        <>
          {GENDER.map((genderItem, index) => (
            <InputWrapper key={index} labelTitle={genderItem.name} className={styles.inputWrapper} inputInside>
              <input type='radio' value={genderItem.value} {...configuration(name)} />
            </InputWrapper>
          ))}
        </>
      );
    default:
      return <input type='text' {...configuration(name)} />;
  }
};
