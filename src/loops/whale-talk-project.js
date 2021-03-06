const input = 'This is a phrase I like and it contains a u';

const vowels = ['a','e', 'i', 'o', 'u'];

const resultArray = [];

for (let i = 0; i < input.length; i++) {
	//console.log(i);
	for (let j = 0; j < vowels.length; j++) {
		if (input[i].toLowerCase() === vowels[j].toLowerCase()) {
			resultArray.push(input[i]);
		}
	}
	if (input[i].toLowerCase() === 'e') {
		resultArray.push(input[i]);
	}
		if (input[i].toLowerCase() === 'u') {
		resultArray.push(input[i]);
	}
}

console.log(resultArray.join('').toUpperCase());