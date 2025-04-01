/*
BOOLEAN - logine reiksme
- true
- false
loginiai operatoriai:
&& - and (ir) (prioritetas, kaip daugybos)
|| - or (arba)

*/

const isEven = true;
const isOdd = false;

console.log('&& --------');

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);

console.log('|| --------');

console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);


console.log('Ar mergina eit i pasimatyma?');
const arGrazi = false;
const arTurtinga = true;

console.log(arGrazi || arTurtinga);

console.clear();

console.log(1, true && true || true);
console.log(2, true && true || false);
console.log(3, true && false || true);
console.log(4, true && false || false);
console.log(5, false && true || true);
console.log(6, false && true || false);
console.log(7, false && false || true);
console.log(8, false && false || false);
