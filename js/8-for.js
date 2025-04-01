/*
FOR (loop) - ciklas
*/

for (let i = 4; i < 5; i++) {
    console.log('a) number:', i);
    
}

console.log('----------');

for (let i = 2; i <= 7; i++) {
    console.log('b) number:', i);
    
}

console.log('----------');

let k = 5;
k = k + 1;
k += 1;
k++;
++k;

let m = 5;
m = m - 1;
m -= 1;
m--;
--m;

for (let i = 0; i < 11; i += 2) {
    console.log('kas du:', i);
}

console.log('----------');


for (let k = 0; k < 10; k++) {
    console.log(k / 10);
    
}

console.log('----------');

for (let i = 1; i <= -4; i++){
    console.log('labas');
    
}

// greitai sukurs daugybos lentele
const n = 6;

for (let m = 1; m <= 10; m++) {
    console.log(`${n} * ${m} = ${n * m}`);
    
} 

console.log('number::', 0);
console.log('number::', 1);
console.log('number::', 2);
console.log('number::', 3);
console.log('number::', 4);

console.clear();

const marks = [10, 2, 8, 4, 6];
let sum = 0;
sum += marks[0];
sum += marks[1];
sum += marks[2];
sum += marks[3];
sum += marks[4];

console.log(sum);
 // jei istrinciau viena is sum+=marks[...], idejus marks.length kompiuteris vistiek skaiciuos nuo 0 iki galo
let sum2 = 0;
for (let i = 0; i < marks.length; i++){
    console.log('index', i, '-->', marks[i]);
    sum2 += marks[i]; 
}

console.log(sum2);

console.log('---------');

// Studento vardas yra VARDAS.
const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

for (let i = 0; i < names.length; i++) {
    const s = `Studento vardas yra ${names[i]}.`;
    console.log(s);
}

