// Operator precedence.
const currentYear = 2024;

const yearOfBirthGrzegorz = 1983;
const yearOfBirthBeata = 1989;

const ageGrzegorz = currentYear - yearOfBirthGrzegorz;
const ageBeata = currentYear - yearOfBirthBeata;

const older = ageGrzegorz > ageBeata;
console.log(older);