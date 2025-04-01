function biggestNumber (list) {
   // let (!Array.isArray(list)) {
     //   return 'Duomenys turi buti sarase';
   // } 

   let biggest = -Infinity; // rasyti list[0]; , jei salygoje sarase yra numeriai su -
    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] !== 'number' || !isFinite(list[i])) {
            continue;
        }
        if (list[i] > biggest) {
            biggest = list[i];
        }
    }
    return biggest;
}
console.log(biggestNumber([1]), '--->', 1);
console.log(biggestNumber([1, 2]), '--->', 2);
console.log(biggestNumber([1, 2, 3]), '--->', 3);
console.log(biggestNumber([4, 5, 8,]), '--->', 8);
console.log(biggestNumber([-1, -2, -3]), '--->', -1);
console.log(biggestNumber([3, 3, 3]), '--->', 3);

console.log(biggestNumber([1, 2, 'abc']));
console.log(biggestNumber([1, 'abc', 2]));
console.log(biggestNumber(['abc', 1, 2]));

console.log(biggestNumber([-1, -2, true]));
console.log(biggestNumber([-1, true, -2]));
console.log(biggestNumber([true, -1, -2]));

console.log(biggestNumber([-1, -2, -Infinity]));
console.log(biggestNumber([-1, -Infinity, -2]));
console.log(biggestNumber([-Infinity, -1, -2]));

console.log(biggestNumber([1, 2, Infinity]));
console.log(biggestNumber([1, Infinity, 2]));
console.log(biggestNumber([Infinity, 1, 2]));

console.log(biggestNumber([1, 2, NaN]));
console.log(biggestNumber([1, NaN, 2]));
console.log(biggestNumber([NaN, 1, 2]));

