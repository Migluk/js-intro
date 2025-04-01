/*
OBJECT - objektas, (kituose kalbuose siek tiek panasu i :hashmap, dictionary)
*/

const empty = {};
console.log(empty);

const person = {
    name: 'Jonas',
    age: 50,
    isMarried: true,

};
console.log(person);
console.log(`Veiki, mano vardas ${person['name']}, man ${person['age']} metu.`);
console.log(person['isMarried']);
// standartine sintakse, kai paimti reiksme
console.log(person['name']);
console.log(person['age']);
console.log(person['isMarried']);
// supaprastinta sintakse
console.log(person.name);
console.log(person.age);
console.log(person.isMarried);

console.clear();

const pc = {
    cpuCores: 8,
    ram: 16,
    diskSpace: 512,
    diskType: 'ssd',
    os: 'win10',
};
console.log(pc.cpuCores);
pc.ram = 32; // gali pakeisti
console.log(pc.ram);

console.clear();

const student = {
    name: 'Maryte',
    age: 45,
    isMarried: false,
    phoneNumbers: [],
    parents: [
        {
            name: 'Petras',
            age: 88,
            phoneNumbers: [55555555555],
        },
        {
            name: 'Ona',
            age: 85,
            phoneNumbers: [44444444444, 8888888888],
        },
    ],
};
console.log(student.name);
console.log(student.phoneNumbers.length);
console.log(student.parents.length);
console.log(student.parents[0].name);
console.log(student.parents[1].name);
console.log(student.parents[0].phoneNumbers.length);
console.log(student.parents[1].phoneNumbers[1]);

console.clear();