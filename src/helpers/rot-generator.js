/**
 * Uppercase letters are between 65 (A) and 90 (Z)
 * Lowercase letters are between 97 (a) and 122 (z)
 */
const rotGenerator = (string, rotation) => {
	let result = '';

	for (let i = 0; i < string.length; i++) {
		const charCode = string.charCodeAt(i);
		if (charCode >= 65 && charCode <= 90) {
			// handle uppercase letters
			let newCharCode = charCode + rotation;
			if (newCharCode > 90) {
				newCharCode -= 26;
			}
			result += String.fromCharCode(newCharCode);
		}

		if (charCode >= 97 && charCode <= 122) {
			// handle lowercase letters
			let newCharCode = charCode + rotation;
			if (newCharCode > 122) {
				newCharCode -= 26;
			}
			result += String.fromCharCode(newCharCode);
		}
	}
	return result;
};

export default rotGenerator;
