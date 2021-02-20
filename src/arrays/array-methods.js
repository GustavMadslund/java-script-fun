//Push Method
const chores = ['wash dishes', 'do laundry', 'take out the train'];
chores.push('learn new programming languages', 'play CoD');
console.log(chores);

//Pop method
let chore = chores.pop();
console.log(chore);
console.log(chores);

//Shift
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

let firstItem = groceryList.shift();
console.log(groceryList);

//Unshift
let newLength = groceryList.unshift('popcorn');
console.log(groceryList);
console.log(newLength);

//Slice
console.log(groceryList.slice(1,4))
console.log(groceryList);

//IndexOf
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

