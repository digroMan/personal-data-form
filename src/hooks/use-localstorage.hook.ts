import { useState, useEffect } from 'react';
import type { IFormInput } from "../components/Form/types";
import type { TUseLocalStorage } from "./types";

export function useLocalStorage(key: string): TUseLocalStorage {
  const [data, setData] = useState<Partial<IFormInput>>();
  useEffect(() => {
    const json = localStorage.getItem(key);
    if (!json) return;

    try {
      const parsed = JSON.parse(json);
      setData(parsed);
    } catch (error) {
      console.log(`Ошибка парсинга данных из localStorage по ключу ${key}, ${error}`);
    }
  }, [key]);

  const saveData = (newData: Partial<IFormInput>) => {
    const json = localStorage.getItem(key);
    const parsed = json ? JSON.parse(json) : null;

    try {
      if (JSON.stringify(parsed) !== JSON.stringify(newData)) {
        localStorage.setItem(key, JSON.stringify(newData));
        setData(newData);
      }
    } catch (error) {
      console.log(`Ошибка парсинга данных из localStorage по ключу ${key}, ${error}`);
    }
  };

  const clearData = () => localStorage.removeItem(key);

  return [data, saveData, clearData];
}