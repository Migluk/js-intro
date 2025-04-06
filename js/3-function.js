function empty() {
    // logika
}

const a = empty();
console.log(a);

console.log(empty());

function penki() {
    return 5;
}
const c = penki();
console.log(c);

function hi() {
    return 'Labas!';
}
const d = hi();
console.log(d);

// Jonas -> Labas, Jonas!

function hiPerson(name) {
    return `Labas, ${name}!`;
    // return  'Labas,' + name + '!';
}
console.log(hiPerson('Jonas'));

// 2+2 = 4
// 7+5 = 12

function sum(num1, num2){
    return num1 + num2;
}
const e = sum(2, 2);
console.log(e);

const f = sum(7, 5);
console.log(f);

const g = sum(-7, 15);
console.log(g);



// 100 -> 121 Eur
// 200 -> 242 Eur
// 73 -> 88.33 Eur

function priceWithVAT(price) {
    const updatedPrice = price * 1.21;

    return updatedPrice + ' Eur';
}
const p1 = priceWithVAT(100);
console.log(p1);
const p2 = priceWithVAT(200);
console.log(p2);
const p3 = priceWithVAT(73);
console.log(p3);




// Jonas -> Zodzis "Maryte" yra sudarytas is 6 raidziu.

function nameLenght(name){
    const size = name.length;
    return `Zodzis "${name}" yra sudarytas is ${size} raidziu.`;
    
}
const n11 = nameLenght('Jonas');
const n12 = nameLenght('Maryte');
const n13 = nameLenght('Ona');
const n14 = nameLenght('Petras');
console.log(n11);
console.log(n12);
console.log(n13);
console.log(n14);

// 5 -> Gautas skaicius: 5.
// -13 -> Gautas skaicius: -13.
// 777 -> Gautas skaicius: 777.
// PVZ APACIOJE

function gotNumber(n){
    // return 'Gautas skaicius: ' + n + '.';
    return `Gautas skaicius: ${n}.`;
}
const gn1 = gotNumber(5);
const gn2 = gotNumber(-13);
const gn3 = gotNumber(777);

console.log(gn1);
console.log(gn2);
console.log(gn3);



// 2, 2    -> 2 + 2 = 4
// 7, 5    -> 7 + 5 = 12
// -7, 15  -> -7 + 15 = 8

function sum(a, b){
    const result = a + b;
    return `${a} + ${b} = ${result}`;
}
console.log(sum(2, 2));
console.log(sum(7, 5));
console.log(sum (-7, 15));

// ND - perdaryti analogiskai su -, * ir / operacijomis.

// ND 1# ( su - )

function sum(c, d){
    const result = c - d;
    return `${c} - ${d} = ${result}`;
}
console.log(sum(15, 6));
console.log(sum(8, 3));
console.log(sum(20, 10));

// ND 2# (su * )

function sum1(e, f){
    const result = e * f;
    return `${e} * ${f} = ${result}`;
}
console.log(sum1(4, 4));
console.log(sum1(126, 5));
console.log(sum1(9, 9));

// ND 3# (su / )

function sum2(g, h){
    const result = g / h;
    return `${g} / ${h} = ${result}`;
}
console.log(sum2(7, 2));
console.log(sum2(13, 8));
console.log(sum2(4, 4));

