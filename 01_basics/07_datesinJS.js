
// Dates

let myDate = new Date()
console.log(myDate.toString()); // gives both date and time
console.log(myDate.toDateString()); // gives only date

console.log(myDate.toLocaleString());

console.log(typeof myDate); // object


let myCreatedDate = new Date(2023, 0, 23) // month number starts from '0' in js
console.log(myCreatedDate.toDateString());  // Mon Jan 23 2023

let anotherDate = new Date(2023, 0, 23, 5, 3)
console.log(anotherDate.toLocaleString()); //   1/23/2023, 5:03:00AM

let oneDate = new Date("01-14-2023")
console.log(oneDate.toLocaleString()); //  1/14/2023, 12:00:00 AM



let myTimeStamp = Date.now()
console.log(myTimeStamp); // gives in milli seconds
console.log(myCreatedDate.getTime());


console.log(Date.now()); // exact abhi ki date dega in ms
console.log(Math.floor(Date.now()/1000)); // to convert into seconds

let newDate = new Date()
console.log(newDate.getHours());
console.log(newDate.getDay());
console.log(newDate.getMonth());



newDate.toLocaleString('default', {
    weekday: "long"
});

