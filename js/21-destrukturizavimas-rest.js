const a1 = [1, 11, 111];
const a2 = [2, 22, 222];
const a3 = [3, 33, 333];
const a4 = [4, 44, 444];

// [1, 11, 111, 2, 22, 222]
const a12 = a1.concat(a2);
console.log(a12);

const b12 = [...a1, ...a2];
console.log(b12);

const b423 = [...a4, ...a2, ...a3];
console.log(b423);

const b333 = [...a3, ...a3, ...a3];
console.log(b333);

// [7, 4, 44, 444, 88]
const c1 = [7, ...a4, 88];
console.log(c1);

console.clear();

const o1 = { name: 'Jonas' };
const o2 = { age: 99 };
const o3 = { isMarried: true };

const o12 = { ...o1, ...o2 };
console.log(o12);

const o123 = { ...o1, ...o2, ...o3 };
console.log(o123);

const p1 = { a: 1 };
const p2 = { b: 2 };
const p3 = { c: 3, a: 7 };

const p12 = { ...p1, ...p2 };
console.log(p12);

const p123 = { ...p1, ...p2, ...p3 };
console.log(p123);

const p312 = { ...p3, ...p1, ...p2 };
console.log(p312);

const p4 = { d: 4, ...p3, c: 99 };
console.log(p4);

console.clear();

const marks = [10, 2, 8, 4, 6];
const [first, second, ...rest] = marks;

console.log(first);
console.log(second);
console.log(rest);

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const n1 = names[0];
const n2 = names[1];
const n3 = names.slice(2);

console.log(n1);
console.log(n2);
console.log(n3);

const [x, y, ...z] = names; // ... turi buti paskutinis sakinyje, negali buti pirmas ar viduri.
console.log(x);
console.log(y);
console.log(z);

const [...k] = names;
console.log(k);

const mix = [1, 'abc', true, [], {}, undefined];
const [m1, m2, m3, ...mRest] = mix;

console.log(m1);
console.log(m2);
console.log(m3);
console.log(mRest);

const person = {
    address: 'Miesto g. 7',
    name: 'Jonas',
    age: 50,
    isMarried: true,
};

const {name, age, ...p} = person;
console.log(name);
console.log(age);
console.log(p);

const students = [
    {name: 'Jonas', age: 50},
    {name: 'Maryte', age: 30},
    {name: 'Petras', age: 22},
    {name: 'Ona', age: 44},
];

for (let i=0; i < students.length; i++) {
    const student = students[i];
    const name = student.name;
    const age = student.age;
    const result = `Studentui vardu ${name}, yra ${age} metu.`;
    console.log(result);
    
}

console.log('-----------------------');

for (const student of students) {
    const {name, age} = student;
    const result = `Studentui vardu ${name}, yra ${age} metu.`;
    console.log(result);
}

console.log('-----------------------');

for (const {name, age} of students) {
    const result = `Studentui vardu ${name}, yra ${age} metu.`;
    console.log(result);
}

console.log('-----------------------');

const numbers = [
    [0],
    [1, 11, 111],
    [2, 22, 222],
    [3, 33, 333],
    [7],
    [9],

];

// Pirmas skaicius yra X ir dar yra Y popildomu skaiciu.

for (numberList of numbers) {
    const first = numberList[0];
    const rest = numberList.slice(1);
    const result = `Pirmas skaicius yra ${first} ir dar yra ${rest.length} popildomu skaiciu.`;
    console.log(result);
    
}

console.clear();

const ddd = [1, 2, 3];
console.log(Math.min(...ddd));
console.log(Math.max(...ddd));





