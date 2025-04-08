let zodis = '';
if (4 > 2) {
    zodis = 'daugiau'
} else {
    zodis = 'maziau'
}

console.log(zodis);

let skaicius = 0;
if (7 <= 5) {
    skaicius = 7;
} else {
    skaicius = 5;
}

console.log(skaicius);

const word = 4 > 2 ? 'daugiau' : 'maziau';
console.log(word);

const number = 7 <= 5 ? 7 : 5;
console.log(number);

const years = 22;
const isAdult = years >= 18 ? 'suauges' : 'nesuauges';
console.log(isAdult);

const value = 7;
const type = typeof value === 'number' ? 'skaicius' : 'nei skaicius, nei zodis';
console.log(type);

// visi skaiciai yra posetyvus
// isskyrus - nuli
if (5) {
    console.log('TAIP');
} else {
    console.log('NE');
    
}

// visi tekstai yra pozetyvus
// isskyrus - tuscia ('')
if ('labas') {
    console.log('TAIP');
} else {
    console.log('NE');
    
}

// visi array yra povetyvus
if ([]) {
    console.log('TAIP');
} else {
    console.log('NE');
    
}

// visi object yra pozetyvus
if ({}) {
    console.log('TAIP');
} else {
    console.log('NE');
    
}

// undefined yra negatyvas
// null yra negatyvas
if (undefined) {
    console.log('TAIP');
} else {
    console.log('NE');
    
}

console.clear();

const a = 0 ? 1 : 2;
console.log(a);

const b = 1 ? 2 : 3;
console.log(b);

const c = 2 ? 3 ? 4 : 5 : 6;
console.log(c);

const d = 0 ? 1 : 2 ? 3 : 4;
console.log(d);

const e = 1 ? 2 ? 3 : 4 : 5 ? 6 : 7;
console.log(e);

// unari (vienas) =
// binari (du) +, -, *, /
// ternary (trys) ?, :