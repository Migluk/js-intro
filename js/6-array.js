/*
ARRAY - sąrašas, Arėjus, matrica, masyvas, list'as, rinkinys.
*/

const empty = [];
console.log(empty);

const luckyNumbers = [7, 777, 13, 666, 8, 2];
console.log(luckyNumbers);

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(students);

const numbers = [10, 2, 8, 4, 6];
const totalSum1 = numbers[0] + numbers[1] + numbers[4] + numbers[3] + numbers[2];
console.log(totalSum1);

let totalSum2 = 0;
totalSum2 = totalSum2 + numbers[0];
totalSum2 = totalSum2 + numbers[1];
totalSum2 = totalSum2 + numbers[2];
totalSum2 = totalSum2 + numbers[3];
totalSum2 = totalSum2 + numbers[4];
console.log(totalSum2);

let totalSum3 = 0;
totalSum3 = totalSum3 += numbers[0];
totalSum3 = totalSum3 += numbers[1];
totalSum3 = totalSum3 += numbers[2];
totalSum3 = totalSum3 += numbers[3];
totalSum3 = totalSum3 += numbers[4];
console.log(totalSum3);

const dictionary = ['Pomidoras', 'agurkas', 'bulve', 'kefyras', 'druska', 'svogūnų laiškai', 'lašinai'];
// Patiekalu reiksmes: a, b, c, d.

const sentence = 'Patiekalui reikes: ' + dictionary[0] + ', ' + dictionary[1] + ', ' + dictionary[2] + ', ' + dictionary[3] + ', ' + dictionary[4] + ', ' + dictionary[5] + ', ' + dictionary[6] + '.';
console.log(sentence1);

const sentence1 = 'Patiekalui reikes: ' + dictionary[0] + ', ' + dictionary[1] + ', ' + dictionary[2] + ', ' + dictionary[3] + ', ' + dictionary[4] + ', ' + dictionary[5] + ', ' + dictionary[6] + '.';
console.log(sentence1);

let sentence2 = 'Patiekalui reikes: ';
sentence2 += dictionary[0] + ', ';
sentence2 += dictionary[1] + ', ';
sentence2 += dictionary[2] + ', ';
sentence2 += dictionary[3] + ', ';
sentence2 += dictionary[4] + ', ';
sentence2 += dictionary[5] + ', ';
sentence2 += dictionary[6] + '.';
console.log(sentence2);

console.clear();

let index = 0;
let sentence3 = 'Patiekalui reikes: ';

sentence3 += dictionary[index] + ', ';

index += 1;
sentence3 += dictionary[index] + ', ';

index += 1;
sentence3 += dictionary[index] + ', ';

index += 1;
sentence3 += dictionary[index] + ', ';

index += 1;
sentence3 += dictionary[index] + ', ';

index += 1;
sentence3 += dictionary[index] + ', ';

index += 1;
sentence3 += dictionary[index] + '.';
console.log(sentence3);

let k = 0;
k = k + 1;
k += 1;
k++;
++k;

let i = 0;
let sentence4 = 'Patiekalui reikes: ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + '.';
console.log(sentence4);

let j = -1;
let sentence5 = '++ Patiekalui reikes: ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + '.';
console.log(sentence5);
