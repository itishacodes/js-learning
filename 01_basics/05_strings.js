const name = "Itisha"
const repoCount = 5

//console.log(name + repoCount + "Value") // it works but there can be a better way

console.log(`Hello! My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Itishamaheshwari')

console.log(gameName[0]); // I

console.log(gameName.length); // 16
console.log(gameName.toUpperCase()); // ITISHAMAHESHWARI

console.log(gameName.charAt(8));
console.log(gameName.indexOf('i'));

const newSubstring = gameName.substring(0,4)
console.log(newSubstring);

const anotherString = gameName.slice(-16,4)
console.log(anotherString);


// remove extra spaces from the string

const newStringOne = "    Itisha   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://itisha.com/iti20%maheshwari"
console.log(url);
console.log(url.replace('20%', '-')); // to replace any string
console.log(url.includes('itisha')); // checks if the string is there or not


const hello = "I-am-a-learner"
console.log(hello.split('-')); // [ 'I', 'am', 'a', 'learner' ]








