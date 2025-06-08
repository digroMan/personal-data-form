import type { IFormInput } from "../components/Form/types";

export type TUseLocalStorage = [
    Partial<IFormInput> | undefined,
    (key: Partial<IFormInput>)=> void,
    () => void,
];