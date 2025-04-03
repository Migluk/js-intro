/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/

// isFinite
console.log(isFinite(5));
console.log(isFinite(-3.14));
console.log(isFinite(Infinity));
console.log(isFinite(NaN));
console.log(isFinite(true));
console.log(isFinite('lkuhfder'));
console.log(isFinite([]));
console.log(isFinite({}));

// isInteger (pasako ar skaicius sveikas)

console.log(Number.isInteger(5));
console.log(Number.isInteger(-5));
console.log(Number.isInteger(0));
console.log(Number.isInteger(3.14));
console.log(Number.isInteger(-3.14));

console.clear();

// isNaN

console.log(Number.isNaN(5));
console.log(Number.isNaN(3.14));
console.log(Number.isNaN(Infinity));
console.log(Number.isNaN(NaN));

console.clear();

const userInput = '22';
const userNumber = parseInt(userInput);
const date = userNumber + 5;

console.log(date);

// parseInt

console.log(parseInt('65'));
console.log(parseInt('65.314'));
console.log(parseInt('-65'));
console.log(parseInt('-65.314'));

console.log(parseInt('labas'));
console.log(parseInt('labas111'));
console.log(parseInt('222labas'));
console.log(parseInt('222labas333'));
console.log(parseInt('222la444bas333'));
console.log(parseInt('2,5'));
console.log(parseInt('2.5'));

console.log(parseInt(true));

console.log(parseInt('222labas333'.replace('labas', '')));
console.log(parseInt('222333'));

console.log(parseInt('222labas333'.split('labas')));
console.log(parseInt(['222', '333']));

console.clear();

// parseFloat

console.log(parseFloat('44'));
console.log(parseFloat('44.4'));
console.log(parseFloat('-44'));
console.log(parseFloat('-44.4'));
console.log(parseFloat('44,4'));
console.log(parseFloat('-44,4'));

console.log(parseFloat('55.66labas'));
console.log(parseFloat('labas55.66'));
console.log(parseFloat('55.66la55.66bas55.66'));
console.log(parseFloat('55.66.77'));
console.log(parseFloat('-5-5'));
console.log(parseFloat('--55'));
console.log(parseFloat('5-5'));
console.log(parseFloat('+5-5'));
console.log(parseFloat('+5+5'));
console.log(parseFloat('++55'));

console.clear();

// typeof

const a = 12.3456789;
console.log(a);
console.log(typeof a);

console.log(typeof typeof a);
console.log(typeof 'number');
console.log('string');

const b = a.toFixed(4);
console.log(b);
console.log(typeof b);

const c = parseFloat(b);
console.log(c);
console.log(typeof c);

// toFixed 

console.log(12.3456789.toFixed(7));
console.log(12.3456789.toFixed(6));
console.log(12.3456789.toFixed(5));
console.log(12.3456789.toFixed(4));
console.log(12.3456789.toFixed(3));
console.log(12.3456789.toFixed(2));
console.log(12.3456789.toFixed(1));
console.log(12.3456789.toFixed(0));

console.log(3.14.toFixed(0));
console.log(3.14.toFixed(1));
console.log(3.14.toFixed(2));
console.log(3.14.toFixed(3));
console.log(3.14.toFixed(4));
console.log(3.14.toFixed(5));
console.log(3.14.toFixed(6));
