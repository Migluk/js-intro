// 1. Sukurkite funkciją, skirtą patikrinti, ar skaičius yra teigiamas. 
function arNumerisTeig(num) {
    if (num > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(arNumerisTeig(5));
console.log(arNumerisTeig(-3));
console.log(arNumerisTeig(-5));

console.log('--------------');

// 2. Sukurkite funkciją skaičiaus kvadratui apskaičiuoti. 

function numKvadratu(num1) {
    return num1 * num1
}
console.log(numKvadratu(5));
console.log(numKvadratu(6));
console.log(numKvadratu(2));

console.log('-------------');

// 3. Sukurkite funkciją, kuri paima du skaičius ir išveda į console didesnįjį. 

function numPridet(num2) {
    return num2 + num2
}
console.log(numPridet(5));
console.log(numPridet(5));
console.log(numPridet(3));

console.log('-----------');

// 8. Sukurkite funkciją, kuri tikrina, ar skaičius dalijasi iš 3.
function arDalijas(num) {
    return num % 3 === 0;
}

console.log(arDalijas(9));  
console.log(arDalijas(10));
console.log(arDalijas(0));

console.log('------------');

// 5. Sukurkite funkciją, tikrinančią, ar skaičius yra lyginis.

function arNumLyg(num) {
   return num % 2 === 0;
}
console.log(arNumLyg(2));
console.log(arNumLyg(4));
console.log(arNumLyg(7));
console.log(arNumLyg(9));

console.log('------------');

