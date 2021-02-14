function getReminder() {
	console.log('Water the plants');
}

function greetInSpanish() {
	console.log('Buenas Tardes');
}

function sayThanks(name) {
	console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

sayThanks('Cole');
sayThanks();
sayThanks();

//Default paramters
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
	console.log(`Remeber to buy ${item1}`);
	console.log(`Remeber to buy ${item2}`);
	console.log(`Remeber to buy ${item3}`);
}

makeShoppingList();

//Return
function monitorCount(rows, columns) {
	return rows * columns;
}

const numOfMonitors = monitorCount(5,4);

console.log(numOfMonitors);

//Helper functions
function costOfMonitors(rows, columns) {
	return monitorCount(rows, columns) * 200;
}
 
const totalCost = costOfMonitors(5,4);

console.log(totalCost);

//Funtion epressions
const plantNeedsWater = function(day) {
	if (day === 'Wednesday') {
		return true;
	} else {
		return false;
	}
}

console.log(plantNeedsWater('Tuesday'));