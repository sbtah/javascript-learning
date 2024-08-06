'use strict';

// this is ok bc javascript ...
let message = 'hello';
message = 123456;


// number type:
// both floats and integers are of number type.
let num = 1234;
console.log(num);
console.log(typeof num);

num = 12.34;
console.log(num);
console.log(typeof num);

// Infinity type
console.log(1 / 0);


// NaN
console.log('someValue' / 2);


//strings
let doubleQuotes = "Are legit!";
let singleQuotes = 'Are ok!'

let phrase = `Embeded answer: ${singleQuotes}`;
console.log(phrase);

let name = 'Jhon';
console.log(`Hello ${name}!`);


// Booleans
let nameFieldChecked = true;
let ageFieldChecked = false;

console.log(4 > 1);


// null
let age = null;
console.log(age);

// undefined
let newAge;
console.log(newAge);
