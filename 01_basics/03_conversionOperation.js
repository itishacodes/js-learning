let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

/* conversions to number :

   "33" --> 33
   "33abc" --> NaN
   true --> 1; false --> 0
   null --> 0
   undefined --> NaN
   "Itisha" --> NaN
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

/* conversions to boolean :

   1 --> true; 0 --> false
   "" --> false
   "Iti" --> true
*/

let someNumber = 33

let stringNumber = String(someNumber)

console.log(typeof stringNumber);
console.log(stringNumber);


// ************* OPERATIONS ************

let value = 3
let negValue = -value
console.log(negValue);
console.log(typeof negValue);
console.log(typeof value);


let str1 = "Hello";
let str2 = " Itisha!";

console.log(str1 + str2); // Hello Itisha!

console.log("1" + 2);  // 12 // string + number
console.log("1" + "2");  // 12 // string + string
console.log(1 + 2); // 3 // number + number

console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32
console.log((1 + 2) + "2"); // 32
console.log("1" + (2 + 2)); // 14

// Use paranthesis for calculation preference and avoid confusing syntax

console.log(true); // 1             // '+' is helping in conversion
console.log(+true); // 1
// console.log(true+); // error


let gameCounter = 100;             // learn prefix and postfix operators
++gameCounter;
// gameCounter++
console.log(gameCounter);











