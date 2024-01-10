// Mathematical operators

const currentYear = 2024;

const yearOfBirthGrzegorz = 1983;
const yearOfBirthBeata = 1989;

const ageGrzegorz = currentYear - yearOfBirthGrzegorz;
const ageBeata = currentYear - yearOfBirthBeata;

console.log(ageGrzegorz);
console.log(ageBeata);


// 2 ** 3 is 2 to the power of 3 which is 2 * 2 * 2.
console.log(ageGrzegorz *2, ageGrzegorz / 2, 2 ** 3);

// + operator can concatenate strings.
const firstName = 'Grzegorz';
const lastNme = 'Zygan';

console.log(`${firstName} ${lastNme}`);

// Assignment operators.
let x = 10 + 5;
x += 10;
console.log(x);


// Coparison operators.
console.log(ageGrzegorz > ageBeata);
const older = ageGrzegorz > ageBeata;
