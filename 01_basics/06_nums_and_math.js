
//************   NUMBERS  ***************

const score = 400
console.log(score);

const balance = new Number(400)
console.log(balance);

console.log(balance.toString()); // converted to string
console.log(balance.toString().length);

console.log(balance.toFixed(2)); // numbers required after decimal point // 400.00

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)); // 23.9
console.log(otherNumber.toPrecision(2)); // 24

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000 // as per US standards
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 // as per Indian standards



// ++++++++++++     MATHS    +++++++++++++++

// Math is an in-built library in js

console.log(Math);

console.log(Math.abs(-3)); // 3
console.log(Math.round(6.5)); // 7

console.log(Math.ceil(3.8)); // 4
console.log(Math.floor(3.8)); // 3

console.log(Math.min(3,6,9,0,7)); // 0
console.log(Math.max(3,6,9,0,7)); // 9


console.log(Math.random()); // gives any random value between 0 and 1
console.log((Math.random() * 10) + 1); // to get random values between 1 to 9
console.log((Math.floor(Math.random() * 10)) + 1); // to get single digit random value between 1 to 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // to get 2 digit random value between 11 to 20





