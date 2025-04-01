/*
IF - palyginimo savyga

Palyginimo operatoriai:
- visi: >, <, >=, ==, ===, !=, !==
- naudotiniai: >, <, >=, <=, ===, !==
- nenaudotini: ==, !=

Kodo sablonai:
if () {}
if () {} else {}
if () {} else if ()
if () {} else if () else {}
if () {} ... else if () ...
if () {} ... else if () ... else {}
*/

console.log('START');


if (4 > 2) {
    console.log('--- taip');
} else {
        console.log('--- ne');
        
    }
    

if (4 > 2) {
    console.log('taip 4 yra daugiau uz 2');
    
}

console.log('END');

console.clear();

const temp = -2;
if (temp >= 18){
    console.log('silta');
} else {
    console.log('salta');
    
}

// jei zemiau 0 -> salta
// jei zemiau 10 -> meh
// jei zemiau 22 -> silta
// jei daugiau -> karsta

const temp1 = 9;
if (temp1 < 0){
    console.log('salta');
} else if (temp1 < 10){
    console.log('meh');
} else if (temp1 < 22){
    console.log('silta');
} else {
    console.log('karsta');
    
}

console.clear();

const clientValue = '4';

if (4 === clientValue) {
    console.log('tenkina');
} else {
    console.log('NE-tenkina');
    
}
