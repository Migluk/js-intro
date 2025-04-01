console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

//abs (absolute)
console.log('\nabs');
console.log(Math.abs(5));
console.log(Math.abs(-5));
console.log(Math.cbrt(8));
// ceilling
console.log(Math.ceil(8));
console.log(Math.ceil(8.9));
console.log(Math.ceil(8.5));
console.log(Math.ceil(8.000001));
// floor
console.log(Math.floor(8));
console.log(Math.floor(8.9));
console.log(Math.floor(8.5));
console.log(Math.floor(8.999999999));
// round
console.log(Math.round(8));
console.log(Math.round(8.000000001));
console.log(Math.round(8.2));
console.log(Math.round(8.49999999));
console.log(Math.round(8.5));
console.log(Math.round(8.9));
console.log(Math.round(8.999));
// trunc
console.log(Math.trunc(8));
console.log(Math.trunc(9));
console.log(Math.trunc(4.5));
console.log(Math.trunc(4.0001));
console.log(Math.trunc(4.999999990));
console.log(Math.trunc(-4.999999990));
// hypot
console.log(Math.hypot(3, 4));
console.log(Math.hypot(4, 5));
console.log(Math.hypot(4, 5, 6));
// max
console.log(Math.max(10, 2, 8, 4, 6));
console.log(Math.max(-10, 2, 8, 4, 6));
// min
console.log(Math.min(10, 2, 8, 4, 6));
console.log(Math.min(-10, 2, 8, 4, 6));
// pow
console.log(Math.pow(2, 0), 2 ** 0);
console.log(Math.pow(2, 1), 2 ** 1);
console.log(Math.pow(2, 2), 2 ** 3);
console.log(Math.pow(2, 3), 2 ** 4);
console.log(Math.pow(2, 4), 2 ** 4);
console.log(Math.pow(2, 5), 2 ** 5);
console.log(Math.pow(2, 6), 2 ** 6);
console.log(Math.pow(2, 7), 2 ** 7);
console.log(Math.pow(2, 8), 2 ** 8);
console.log(Math.pow(2, 9), 2 ** 9);
console.log(Math.pow(2, 10), 2 ** 10);
// sign
console.log(Math.sign(8));
console.log(Math.sign(-8));
console.log(Math.sign(0));
console.log(Math.sign(Infinity));
console.log(Math.sign(-Infinity));
// sqrt
console.log(Math.sqrt(4), 4 ** 0.5);
console.log(Math.sqrt(9));
console.log(Math.sqrt(81));
console.log(Math.sqrt(2));
console.log(Math.sqrt(13));

console.clear();

// random [0...1)
console.log('\nrandom');
console.log(Math.random());

// random skaicius nuo 3 iki 7
for (let i=0; i < 15; i++) {
    if (Math.random() < 0.5) {
        console.log(3);
    } else {
        console.log(7);
    }
}
 /* if (Math.random() < 0.5) {
  count3++;
  } else {
  count7++;
  }
  console.log(count3, count7);
 */

function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let i=0; i < 10; i++) {
    console.log(randomNumber(0, 9));
}

const counts = [0, 0, 0, 0, 0, 0];
for (let i = 0; i < 1000000; i++) {
    const index = randomNumber(0, 9);
    counts[index]++;
} 
console.log(counts);

