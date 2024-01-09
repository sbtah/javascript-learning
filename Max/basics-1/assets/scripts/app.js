// vars and constants
const defaultResult = 0;

let currentResult = defaultResult; // declared but not initialized variable. This will be 'undefined'
currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1'

outputResult(currentResult, calculationDescription);