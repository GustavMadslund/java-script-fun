const vacationSpots = ['New York', 'Barcelona', 'Los Angeles'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

for (let counterOne = 5; counterOne <= 10; counterOne++) {
	console.log(counterOne);
}

for (let counterTwo = 3; counterTwo >= 0; counterTwo--) {
	console.log(counterTwo);
}

for (let i = 0; i < vacationSpots.length; i++) {
	console.log('I would love to visit ' + vacationSpots[i]);
}

//Break
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
	console.log(rapperArray[i]);
	if (rapperArray[i] === 'Notorious B.I.G.') {
		break;
	}
}
console.log("And if you don't know, now you know.");