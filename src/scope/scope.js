const city = 'New York City';

function logCitySkyline() {
	let skyscraper = 'Empire State Building';
	return 'The stars over the ' + skyscraper + ' in ' + city; 
}

console.log(logCitySkyline());

//Global Scope
let satellite = 'The Moon'
let galaxy = 'The Milky Way'
let stars = 'North Star'

function callMyNightSky() {
	return 'Night Sky: '
		+ satellite + ', '
		+ stars + ', and '
		+ galaxy;
}

console.log(callMyNightSky());

//Block Scope
const logVisibleLightWaves = () => {
	const lightWaves = 'Moonlight';
	console.log(lightWaves);
}

logVisibleLightWaves();
//console.log(lightWaves); //ReferenceError:









