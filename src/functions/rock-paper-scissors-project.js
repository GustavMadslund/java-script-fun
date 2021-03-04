const getUserChoice = (userInput) => {
	userInput = userInput.toLowerCase();
	
	if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
		return userInput;
	} else {
		console.log('Invalid input. Input should be Rock, Paper, or Scissors!');
	}
}

const getComputerChoice = () => {
	const randomChoice = Math.floor(Math.random() * 3);
	
	switch (randomChoice) {
		case 0:
			return 'rock';
			break;
		case 1:
			return 'paper';
			break;
		default:
			return 'scissors';
			break;
	}
}

const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
		return 'Tied';
	}
	
	if (userChoice === 'bomb') {
		return 'You Won!';
	}
	
	if (userChoice === 'rock') {
		if (computerChoice === 'paper') {
			return 'The Computer Won!';
		} else {
			return 'You Won!';
		}
	}
	
	if (userChoice === 'paper') {
		if (computerChoice === 'scissors') {
			return 'The Computer Won!';
		} else {
			return 'You Won!';
		}
	}
	
	if (userChoice === 'scissors') {
		if (computerChoice === 'rock') {
			return 'The Computer Won!';
		} else {
			return 'You Won!';
		}
	}
}

const playGame = (userInput) => {
	const userChoice = getUserChoice(userInput);
	const computerChoice = getComputerChoice();
	
	console.log(`User choice is ${userChoice}. Computer choice is: ${computerChoice}`);
	console.log(determineWinner(userChoice, computerChoice));
}

playGame('bomb');




