let satellite = 'The Moon'
let galaxy = 'The Milky Way'
let stars = 'North Star'

function callMyNightSky() {
	stars = 'Sirius'
	return 'Night Sky: '
		+ satellite + ', '
		+ stars + ', and '
		+ galaxy;
}

console.log(callMyNightSky());
console.log(stars);