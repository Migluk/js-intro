function marksAvarage(list) {
    // patikriname ar gavome masyva
    // sumuojame visus skaicius ir ju kieki:
    let sum = 0;
    let count = 0;
    //  einame per visa masyva ir imame kiekviena skaiciu
    //  jei sutinkame ne skaiciu, tai ji ignoruojame
    //  jei sutinkame skaiciu, kuris nera nuo 1 iki 10 (imtinai), tai ignoruojame
    //  jei sutinkame skaiciu, padidiname suma
    //  jei sutinkame skaiciu, padidiname kieki

    // [10, 2, 'n']
    return sum / count;
}

console.log(marksAvarage([]));
console.log(marksAvarage([10]));
console.log(marksAvarage([2]));
console.log(marksAvarage([10, 2, 8, 4, 6]));
console.log(marksAvarage([8, 4, 7]));
console.log(marksAverage(['n', 10, 2, 8, 4, 6]));
console.log(marksAverage(['n']));
console.log(marksAverage([2, 'n']));

console.log(marksAvarage('labas'));
console.log(marksAvarage(true));

