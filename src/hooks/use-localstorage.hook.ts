import { useState, useEffect } from 'react';
import type { IFormInput } from '../components/Form/types';

export function useLocalStorage(key: string) {
	const [data, setData] = useState<Partial<IFormInput>>();
	useEffect(() => {
		const json = localStorage.getItem(key);
		let res;
		try {
			if(!json) throw 'Записей в localStorage нет';
			res = JSON.parse(json);
		} catch (error) {
			console.log(error);
		}
		
		if(res){
			setData(res);
		}
	}, []);

	const saveData = (newData: IFormInput) => {
		// if(!newData.length) return;
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [data, saveData];
}