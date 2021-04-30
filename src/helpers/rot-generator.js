import {
	LOWER_ABC_START,
	LOWER_ABC_END,
	UPPER_ABC_START,
	UPPER_ABC_END,
	ABC_LENGTH,
} from '../constants';

const rotGenerator = (string, rotation) => {
	let result = '';

	for (let i = 0; i < string.length; i++) {
		const charCode = string.charCodeAt(i);
		if (charCode >= UPPER_ABC_START && charCode <= UPPER_ABC_END) {
			// handle uppercase letters
			let newCharCode = charCode + rotation;
			if (newCharCode > UPPER_ABC_END) {
				newCharCode -= ABC_LENGTH;
			}
			result += String.fromCharCode(newCharCode);
		} else if (charCode >= LOWER_ABC_START && charCode <= LOWER_ABC_END) {
			// handle lowercase letters
			let newCharCode = charCode + rotation;
			if (newCharCode > LOWER_ABC_END) {
				newCharCode -= ABC_LENGTH;
			}
			result += String.fromCharCode(newCharCode);
		} else {
			result += string[i];
		}
	}
	return result;
};

export default rotGenerator;
