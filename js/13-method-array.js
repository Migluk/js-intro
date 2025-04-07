/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// push

const list = [];
console.log(list);

list.push(10);
console.log(list);

list.push(2);
console.log(list);

list.push(8);
console.log(list);

list.push(4, 6);
console.log(list);

list.push(1, 2, 3, 4, 5);
console.log(list);

const numbers = [10, 2, 8, 4, 6];
const doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    doubleNumbers.push(number * 2);
}

console.log(doubleNumbers);

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const nameSizes = [];
const nameFirstLetters = [];
const upperCaseNames = [];

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    nameSizes.push(name.length);
    nameFirstLetters.push(name[0]);
    upperCaseNames.push(name.toUpperCase());
}

console.log(nameSizes);
console.log(nameFirstLetters);
console.log(upperCaseNames);

const n1 = [1, 11, 111];
const n2 = [2, 22, 222, 2222];

const n12 = [];
// const n12 = [1, 11, 111, 2, 22, 222, 2222];

for (let i = 0; i < n1.length; i++) {
    n12.push(n1[i]);
}

for (let i = 0; i < n2.length; i++) {
    n12.push(n2[i]);
}

console.log(n12);

console.clear();

const numbers2 = [10, 2, 8, 6, 4];
console.log(numbers2);

numbers2.push(9);
console.log(numbers2);

numbers2.pop();
numbers2.pop();
numbers2.pop();
console.log(numbers2);

const g1 = numbers2.pop();
const g2 = numbers2.pop();
console.log(numbers2, g1, g2);

numbers2.unshift(1);
numbers2.unshift(2);
numbers2.unshift(3);
console.log(numbers2);

const g3 = numbers2.shift();
const g4 = numbers2.shift();
console.log(numbers2, g3, g4);

console.clear();

//             0    1   2   3   4
const magic = [11, 22, 33, 44, 55];
console.log(magic.includes(22));
console.log(magic.includes(2));

console.log(magic.indexOf(5));
console.log(magic.indexOf(55));


const text = ['drugelis', 'voras', 'bite', 'boruzele'];
const bugs = `Ivairus vabalai: ${text.join(', ')}.`;
console.log(bugs);

console.log('------------');

console.log(text);
text.reverse();
console.log(text);

console.log('------------');

const c1 = [1, 11];
const c2 = [2, 22];
const c3 = [3, 33];
const c4 = [4, 44];

const c12 = c1.concat(c2);
console.log(c12);
const c13 = c3.concat(c4).concat(c2).concat(c1);
console.log(c13);
const c14 = c1.concat(c2, c3, c4);
console.log(c14);
const c15 = c1.concat(c1, c1);
console.log(c15);

console.log('------------');

//          0    1   2   3   4 
const h = [11, 22, 88, 44, 66];
console.log(h);

h.splice(1, 2);
console.log(h);

