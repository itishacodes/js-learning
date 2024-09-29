// JS is a dynamic typed language

// primitive datatypes (call by value)
// there are 7

// string
// boolean
// number
// null
// undefined
// symbol
// bigInt


// how to define Symbol ??

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id);
console.log(anotherId);

console.log(id == anotherId);

// here the values passed are same, still it gives different outputs for both of them


const bigNumber = 12545251314734n // here adding 'n' in the end, tells the compiler that this a 
                                  // big number so take it as a BigInt datatype
console.log(typeof bigNumber);
console.log(bigNumber);




// reference (non-primitive type)

// arrays
// objects
// functions


const heroes = ["shaktiman", "naagraj", "spiderman"] //array
console.log(heroes);


let myObj = {        // object
    name : "Itisha",
    age : 19,
    gender : "Female",
}
console.log(myObj);


const myFunc = function() {      // function
    console.log("Hello, World!");  
}

console.log(typeof myFunc);


// ******************************

// stack memory (used in primitive types)
// heap memory (used in non-primitive types)


let myusername = "itishacodes" // stack memory example
let anothername = myusername;
anothername = "itishamaheshwari."

console.log(myusername);
console.log(anothername);

let userOne = { // heap memory example
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "itisha@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

