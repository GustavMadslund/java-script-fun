const getSleepHours = (day) => {
	switch (day) {
		case 'monday':
			return 8;
		case 'tuesday':
			return 7;
		case 'wednesday':
			return 6;
		case 'thursday':
			return 5;
		case 'friday':
			return 9;
		case 'saturday':
			return 10;
		default:
			return 11;
	}
}

const getActualSleepHours = () => 
	getSleepHours('monday') + 
	getSleepHours('tuesday') + 
	getSleepHours('wednesday') + 
	getSleepHours('thursday') + 
	getSleepHours('friday') + 
	getSleepHours('saturday') + 
	getSleepHours('sunday');


const getIdealSleepHours = (hours) => {
	return hours * 7;
}

const calculateSleepDebt = (hours) => {
	const actualSleepHours = getActualSleepHours();
	const idealSleepHours = getIdealSleepHours(hours);
	
	if (actualSleepHours === idealSleepHours) {
		console.log('You got the perfect amount of sleep!');
	} else if (actualSleepHours > idealSleepHours) {
		console.log(`You got more sleep than needed! You got ${actualSleepHours-idealSleepHours} hours more than needed`);
	} else {
		console.log(`You need to get some rest. You are ${idealSleepHours-actualSleepHours} hours below your ideal number of sleep hours!`)
	}
}

const idealHoursPerDay = 10;
calculateSleepDebt(idealHoursPerDay);