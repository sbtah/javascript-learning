// Decission making..

const age = 11;
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log('This person can own a driving license.');
} else {
    const yearsLeft = 18 - age;
    console.log(`This person can not own a driving license yet. Please wait ${yearsLeft} years.`)
};