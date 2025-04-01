// 1. Patikrinkite, ar skaičius teigiamas. 

function arTeig(num) {
    if (num > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(arTeig(3));

console.log('-----------');

// 2. Patikrinkite, ar skaičius dalijasi iš 5. 

function arDalijas(num) {
    return num % 5 === 0;
}

console.log(arDalijas(15));

// 3. Patikrinkite, ar teksto tipo kintamajame yra daugiau nei 5 simboliai.

function nameLenght(name){
    const size = name.length;
    return `Zodzis "${name}" turi ${size} raides.`;
    
}
const num1 = nameLenght('Drugelis');
console.log(num1);
