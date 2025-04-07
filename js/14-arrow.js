const n1 = 7;
const n2 = 5;

// function declaration (pirmas variantas kaip rasyti galima)
function sum(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

// kintamajam priskirta anonimine funkcija (antras variantas kaip galima rasyty)

const minus = function minus(a, b) {
    return a -b;
}
console.log((`${n1} - ${n2} = ${sum(n1, n2)}`));

//arrow function
const multi = (a, b) => {
    return a * b;
}
console.log((`${n1} * ${n2} = ${multi(n1, n2)}`));

// jei logikos bloke yra TIK 1 salyga (statment)
// tai galima nerasyti {return}

const div = (a, b) => a / b;
console.log((`${n1} / ${n2} = ${div(n1, n2)}`));

// arrow function
// jei parametru bloke yra TIK 1 parametras
// tai galima nerasyti ()
const sqr = a => a * a;
console.log((`${n1} * ${n1} = ${sqr(n1, n1)}`));
console.log((`${n1} * ${n2} = ${multi(n1, n2)}`));

// funkcija grazina vardo pirma raide
const firstLetter = name => name[0];
console.log(firstLetter('Jonas'));
console.log(firstLetter('Maryte'));

// funkcija grazina pataisyta varda
const correctName = name => name[0].toUpperCase() + name.slice();
console.log(correctName('jonas'));
console.log(correctName('Maryte'));
console.log(correctName('ONA'));
console.log(correctName('peTRas'));

// funkcija grazina atbulini teksta
const atvirkVardas = text => text.split('').reverse().join('');
console.log(atvirkVardas('labas'));
console.log(atvirkVardas('alus'));
console.log(atvirkVardas('suo'));




