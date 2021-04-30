import { LOWER_ABC_START, LOWER_ABC_END, UPPER_ABC_START, UPPER_ABC_END } from '../constants';

/**
 * This ROT describer furthers analysis by taking any string and enumerating each letter
 * along with its position in the alphabet. It ignores non-alphabetical characters by
 * substituting a '#' in place for position.
 */
const rotDescriber = (string) => {
	const descriptionArray = [];

	for (let i = 0; i < string.length; i++) {
		const currentCharCode = string.charCodeAt(i);
		if (currentCharCode >= UPPER_ABC_START && currentCharCode <= UPPER_ABC_END) {
			// handle uppercase letters
			const alphabetObject = {
				character: string[i],

				// +1 adjusts the position so that it is not zero-indexed
				position: currentCharCode - UPPER_ABC_START + 1,
			};
			descriptionArray.push(alphabetObject);
		} else if (currentCharCode >= LOWER_ABC_START && currentCharCode <= LOWER_ABC_END) {
			// handle lowercase letters
			const alphabetObject = {
				character: string[i],

				// +1 adjusts the position so that it is not zero-indexed
				position: currentCharCode - LOWER_ABC_START + 1,
			};
			descriptionArray.push(alphabetObject);
		} else {
			const nonAlphabetObject = {
				character: string[i],
				position: '#',
			};
			if (string[i] === ' ') {
				nonAlphabetObject.character = "' '";
			}
			descriptionArray.push(nonAlphabetObject);
		}
	}
	return descriptionArray;
};

// const sampleText = 'abcdefghijklABCDEFGHIJKL !@#$%^&0123456';
// const sampleResult = rotDescriber(sampleText);
// console.log(sampleResult);

export default rotDescriber;
