//Push Method - Add an item to the end of an Array
const chores = ['wash dishes', 'do laundry', 'take out the train'];
chores.push('learn new programming languages', 'play CoD');
console.log(chores);

//Pop method - Remove an item from the end of an Array
let chore = chores.pop();
console.log(chore);
console.log(chores);

//Shift - Remove an item from the beginning of an Array
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

let firstItem = groceryList.shift();
console.log(groceryList);

//Unshift - Add an item to the beginning of an Array
let newLength = groceryList.unshift('popcorn');
console.log(groceryList);
console.log(newLength);

//Slice - Extracts a section of the calling array and returns a new array.
console.log(groceryList.slice(1,4))
console.log(groceryList);

//IndexOf - Find the index of an item in the Array
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

