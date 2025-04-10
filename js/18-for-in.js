const person = {
    name: 'Jonas',
    age: 22,
    isMarried: true,
};

// 1)
// [name, age, isMarried]
const keys = Object.keys(person);
for (const key of keys) {
    console.log(person[key]);
    
}

for (const key in person) {
    console.log(person[key]);
    
}
console.clear();

const text = 'papajus';
const symbols = {};

for (const s of text) {
    if (symbols[s]) {
        symbols[s]++;
    } else {
        symbols[s] = 1;
    }
}
console.log(symbols);

let max = 0;
for (const s in symbols) {
    if (symbols[s] > max) {
        max = symbols[s];
    }
}
console.log(max);

const maxSymbols = [];
for (const s in symbols) {
    if (symbols[s] === max) {
        maxSymbols.push(s);
    }
}
console.log(maxSymbols);
