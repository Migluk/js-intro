//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

console.log('labas');
console.log('labas'[0]);
console.log('labas'[1]);
console.log('labas'[2]);
console.log('labas'[3]);
console.log('labas'[4]);
console.log('---------');

const text = 'kompiuteris';
console.log(text[0]);
console.log(text[text.length - 1]);

 // at
console.log('--', text.at(0));
console.log('--', text.at(1));
console.log('--', text.at(2));
console.log('--', text.at(3));
console.log('--', text.at(4));
console.log('--', text.at(5));
console.log('--', text.at(6));
console.log('--', text.at(7));
console.log('--', text.at(8));
console.log('--', text.at(9));
console.log('--', text.at(10));

console.clear();

console.log('\nincludes');
console.log('Vasara'.includes('V'));
console.log('Vasara'.includes('a'));
console.log('Vasara'.includes('r'));
console.log('Vasara'.includes('k'));

console.log('kompiuteris'.includes('kom'));

console.clear();
// startsWith
console.clear();
console.log('\nstartsWith');
console.log('Pomidoras'.startsWith('a'));
console.log('Pomidoras'.startsWith('p'));
console.log('Pomidoras'.startsWith('P'));
console.log('Pomidoras'.startsWith('Po'));
console.log('Pomidoras'.startsWith('Pom'));
console.log('Pomidoras'.startsWith('Pomi'));
console.log('Pomidoras'.startsWith('Pomidoras'));
console.log('Pomidoras'.startsWith('doras'));
console.log(' Pomidoras'.startsWith(' Pom'));

// endsWith
console.clear();
console.log('\nendsWith');
console.log('Pomidoras'.endsWith('a'));
console.log('Pomidoras'.endsWith('Pom'));
console.log('Pomidoras'.endsWith('s'));
console.log('Pomidoras'.endsWith('as'));
console.log('Pomidoras'.endsWith('ras'));
console.log('Pomidoras'.endsWith('doras'));
console.log('Pomidoras'.endsWith('Pomidoras'));
console.log('Pomidoras'.endsWith(' Pomidoras'));
console.log(' Pomidoras'.endsWith(' Pomidoras'));

// indexOf
console.clear();
console.log('\nindexOf');
//           012345678
console.log('Pomidoras'.indexOf('a'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('om'));
console.log('Pomidoras'.indexOf('p'));
console.log('Pomidoras'.indexOf('x'));
console.log('Pomidoras'.indexOf('xXx'));
console.log('Pomidoras'.indexOf('mido'));

console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('o', 0));
console.log('Pomidoras'.indexOf('o', 1));
console.log('Pomidoras'.indexOf('o', 2));

console.log('---');

const k = 'Kulverstukas';
console.log(k.indexOf('u'));
console.log(k.indexOf('u', 2));

console.log(k.indexOf('u', k.indexOf('u') + 1));

console.log(k.indexOf('s'));
console.log(k.indexOf('s', k.indexOf('s') + 1));

console.log(k.indexOf('e'));
console.log(k.indexOf('e', k.indexOf('e') + 1));



