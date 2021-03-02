//The forecast today
const kelvin = 293;

//The forecast in celsius
const celsius = kelvin - 273;
console.log(`The temperature is ${celsius} degrees celsius`)

//The forecast in fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//Flooring the calculated fahrenheit value
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees Newton`)