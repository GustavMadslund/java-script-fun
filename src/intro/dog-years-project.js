//My age
const myAge = 26;

//The number of early years of a dogs life
let earlyYears = 2;
earlyYears = earlyYears * 10.5;

//The number of later years of a dogs life
let laterYears = myAge - 2;

//In later years each year counts as four dog years
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);

//My age in dog years
const myAgeInDogYears = earlyYears + laterYears;

//My name in lower case
const myName = 'Gustav'.toLowerCase();

//Print my age in human and dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years, and ${myAgeInDogYears} years old in dog years.`)