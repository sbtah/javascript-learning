const firstName = 'Grzegorz';
const job = 'Programmer';
const birthYear = 1983;
const currentYear = 1983;
const currentAge = currentYear - birthYear;

// 'years' if currentYear > 1 else 'year'
const grzegorz = `I'm ${firstName} a ${currentAge} ${currentAge > 1 ? 'years' : 'year'} old ${job}.`

console.log(grzegorz);