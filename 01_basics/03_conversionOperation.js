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





