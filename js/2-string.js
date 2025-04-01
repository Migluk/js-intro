/*
STRING - tekstas, simboliu grandinele

Tekstines reiksmes iniciavimas:
- ' (vienguba kabute)
- " (dviguba kabute)
- ` (backtick)

Specialieji simboliai:
- \ (privercia sekanti simboli buti spausdintu)
- \r (return, kursorius grizta i eilutes pradzia)
- \n (new line, kursorius nusileidzia viena eilute zemyn)
-\t (tab)
*/

const a = 'Labas';
console.log(a);

let b = 'rytas';
console.log(b);

b = 'diena';
console.log(b);


// Vienguba (') kabute.
const k1 = "Vienguba (') kabute.";
console.log(k1);

// Dviguba ("") kabute.
const k2 = 'Dviguba (") kabute.';
console.log(k2);

// Vienguba (') ir dviguba (") kabute.
const k12 = "Vienguba (') ir " + 'dviguba (") kabutes.';
console.log(k12);

const name = "Jonas";
const surname = "Jonaitis";

const fullName = name + ' ' + surname;
console.log(fullName);

// Vienguba (') kabute.
const k3 = 'Vienguba (\') kabute.';
console.log(k3);

// Dvigubos (") kabutes.
const k4 = "Dvigubos (\") kabutes."
console.log(k4);

// Vienguba (') ir dviguba (") kabute.
const k5 = 'Vienguba (\') ir dviguba (") kabute';
const k6 = "Vienguba (') ir dviguba (\") kabute";
console.log(k5);
console.log(k6);

const k7 = 'Vienguba (\') ir dviguba (\") kabute';
const k8 = "Vienguba (\') ir dviguba (\") kabute";
console.log(k7);
console.log(k8);

const backSlash1 = '\\';
const backSlash2 = "\\\\";
console.log(backSlash1);
console.log(backSlash2);


const html = '<header>\r\n\
\t<img>\r\n\
\t<nav>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t</nav>\r\n\
</header>';
console.log(html);

const html2 = '<header>\n\
\t<img>\n\
\t<nav>\n\
\t\t<a></a>\n\
\t\t<a></a>\n\
\t\t<a></a>\n\
\t</nav>\n\
</header>';
console.log(html2);

const html3 = '\
<header>\r\
    <img>\r\
    <nav>\r\
        <a></a>\r\
        <a></a>\r\
        <a></a>\r\
    </nav>\r\
</header>';
console.log('-------------------');
console.log(html3);


console.clear ();

const studentName = 'Maryte';
const amount = 4;
// Maryte yra viena is 4 legendiniu studentu.
const student = studentName + ' yra viena is ' + amount + ' legendiniu studentu. ';
console.log(student);

const b1 = `Vienguba (') kabute.`;
console.log(b1);
 
const b2 = `Dvigubos (") kabutes.`;
console.log(b2);

const b3 = `Backtick (\`) kabute.`;
console.log(b3);

const b4 = `Vienguba (') ir dviguba (") kabute.`;
console.log(b4);

const student2 = `${studentName} yra viena is ${amount} legendiniu studentu.`;
console.log(student2);

const demo = `Labas, ${studentName}.`;
console.log(demo);

console.clear();

const word = 'Melyna';
const wordSymbolCount = word.length;
console.log(word);
console.log(wordSymbolCount);

const textSize = 'aaaaaaaaaaaa'.length;
console.log(textSize);

const numbers = '158742';
console.log(numbers.length);

const pi = '3.14';
console.log(pi.length);

const age = 99;
const ageDigitsCount = ('' + age).length;
console.log(ageDigitsCount);

const ageDigitsCount2 = age.toString().length;
console.log(ageDigitsCount2);

console.clear();

const text = 'Kebabas';
const firstSymbol = text[0];
console.log(firstSymbol);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);
console.log(text[5]);
console.log(text[6]);

// arba galima taip:

console.log(text[0] + text[1]);

// Zodyje "Sachmatai" pirmoji raide yra "S".
const game = 'Saskes';
const gameSentence = `Zodyje "${game}" pirmoji raide "${game[0]}".`;

console.log(gameSentence);
