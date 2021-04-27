/**
 * Uppercase letters are between 65 (A) and 90 (Z)
 * Lowercase letters are between 97 (a) and 122 (z)
 */

const rotDescriber = (string) => {
	const alphabetEnum = [];

	for (let i = 0; i < string.length; i++) {
		const currentCharCode = string.charCodeAt(i);
		if (currentCharCode >= 65 && currentCharCode <= 90) {
			// handle uppercase letters
			const alphabetObject = {
				character: string[i],
				position: currentCharCode - 65 + 1,
			};
			alphabetEnum.push(alphabetObject);
		} else if (currentCharCode >= 97 && currentCharCode <= 122) {
			// handle lowercase letters
			const alphabetObject = {
				character: string[i],
				position: currentCharCode - 97 + 1,
			};
			alphabetEnum.push(alphabetObject);
		} else {
      const symbolObject = {
        character: string[i],
        position: '#'
      }
      alphabetEnum.push(symbolObject);
    }
	}
  return alphabetEnum;
};

// const sampleText = 'abcde ABCDE !@#$%^&';
// const result = rotDescriber(sampleText);
// console.log(result);

export default rotDescriber;