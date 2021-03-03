let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let runnersAge = 18;

if (runnersAge > 18 && registeredEarly) {
	raceNumber += 1000;
}
if (runnersAge > 18 && registeredEarly) {
	console.log(`You will race at 9:30 am. Your race number is ${raceNumber}`);
} else if (runnersAge > 18 && !registeredEarly) {
	console.log(`You will race at 11:00 am. Your race number is ${raceNumber}`);
} else if (runnersAge < 18) {
	console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}`);
} else {
	console.log('Plese see the registration desk');
}