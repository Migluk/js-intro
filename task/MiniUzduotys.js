//  kintamuosius su skaičiaus tipo reikšmėmis

const a = 11;
console.log(a);
const b = 22;
console.log(b);
const c = 55;
console.log(c);


// kintamuosius su teksto tipo reikšmėmis

const d = 'balta';
console.log(d);
const e = 'raudona';
console.log(e);
const f = 'geltona';
console.log(f);


// sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis

const skaiciaiSuNuliu = '10, 20, 30, 40, 50';
console.log(skaiciaiSuNuliu);
const skaiciuSarasas1 = '5, 4, 3, 2, 1';
console.log(skaiciuSarasas1);
const skaiciuSarasas2 = '8, 5, 6, 7, 2';
console.log(skaiciuSarasas2);

// sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis

const lietuvosMiestai = 'Vilnius, Kaunas, Palanga, Klaipėda, Biržai';
console.log(lietuvosMiestai);
const gyvunai = 'Pelėda, Pingvinas, Papūga, Balandis, Vanagas';
console.log(gyvunai);
const geles = 'Rožės, Ramūnės, Tulpės, Lelijos, Saulėgražos';
console.log(geles);

// Veiksmai su kintamaisiais

// Susumuoti visus skaičiaus tipo kintamuosius

let sum = 55;
console.log(sum);
sum = sum + 5;
console.log(sum);
sum = sum + 6;
console.log(sum);


// Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas

const m = 'Šiandien';
console.log(m);

let n = 'geras';
console.log(n);

n = 'oras';
console.log(n);

// Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

const vaisiai = 'obuolys, bananas, vysnia';
console.log(vaisiai);

/* Tarpusavyje palyginti skaičiaus tipo kintamuosius:
a. kuris didesnis
b. kuris mažesnis
c. ar jie lygūs
d. ar jie nelygūs
e. kuris didesnis arba lygus
f. kuris mažesnis arba lygus
*/

if (10 > 6) {
    console.log('pomidoras');
} else {
        console.log('bandykite kita kart');
        
    }

    if (10 < 6) {
        console.log('pomidoras');
    } else {
            console.log('bandykite kita kart');
            
        }

        if (10 == 6) {
            console.log('pomidoras');
        } else {
                console.log('bandykite kita kart');
                
            }

            if (10 != 6) {
                console.log('pomidoras');
            } else {
                    console.log('bandykite kita kart');
                    
                }

                if (10 >= 6) {
                    console.log('pomidoras');
                } else {
                        console.log('bandykite kita kart');
                        
                    }
            
                    if (10 <= 2) {
                        console.log('pomidoras');
                    } else {
                            console.log('bandykite kita kart');
                            
                        }

// Išvesti teksto tipo kintamųjų ilgius

const darzove1 = "Pomidoras";
const darzove2 = "Agurkas";
const darzove3 = "Brokolis";

console.log(darzove1.length);
console.log(darzove2.length);
console.log(darzove3.length);

/* Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
*/

const spalva1 = "Rožinė";
const spalva2 = "Juoda";
if (spalva1.length > spalva2.length) {
    console.log(`"${spalva1}" yra ilgesnė už "${spalva2}".`);
}

    const spalva3 = "Rožinė";
    const spalva4 = "Juoda";
    if (spalva1.length < spalva2.length) {
        console.log(`"${spalva2}" yra ilgesnė už "${spalva1}".`);
    }

    const spalva5 = "Rožinė";
    const spalva6 = "Juoda";
    if (spalva5.length == spalva6.length) {
        console.log(`"${spalva5}" yra lygi su "${spalva6}".`);
    }

    const spalva7 = "Rožinė";
    const spalva8 = "Juoda";
    if (spalva7.length != spalva8.length) {
        console.log(`"${spalva7}" yra nelygi "${spalva8}".`);
    }

    const spalva9 = "Rožinė";
    const spalva0 = "Juoda";
    if (spalva9.length >= spalva0.length) {
        console.log(`"${spalva9}" yra ilgesnė už arba lygi "${spalva0}".`);
    }

    const spalva11 = "Rožinė";
    const spalva12 = "Juoda";
    if (spalva11.length <= spalva12.length) {
        console.log(`"${spalva12}" yra ilgesnė už arba lygi "${spalva11}".`);
    }

// Išvesti sąrašo tipo kintamųjų ilgius

const sarasas1 = `"Beatričė", "Rita", "Paulė"`;
const sarasas2 = [66, 44, 33, 77, 99];

const length1 = sarasas1.length;
const length2 = sarasas2.length;

console.log(`Sarašo ilgis: ${length1}`);
console.log(`Sarašo ilgis: ${length2}`);

/* Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
*/

const sarasas4 = ["Šuo", "Katė", "Žiurkėnas"];
const sarasas5 = ["Saulė", "Mėnulis"];

if (sarasas4.length > sarasas5.length) {
    console.log("Pirmas sarašas yra ilgesnis už antrą sarašą.");
} else if (sarasas4.length < sarasas5.length) {
    console.log("Antras sarašas yra ilgesnis už pirmą.");
} 

const sarasas6 = ["Šuo", "Katė", "Žiurkėnas"];
const sarasas7 = ["Saulė", "Mėnulis"];

if (sarasas6.length == sarasas7.length) {
    console.log("Pirmas sarašas yra lygus antram.");
}

const sarasas8 = ["Šuo", "Katė", "Žiurkėnas"];
const sarasas9 = ["Saulė", "Mėnulis"];

if (sarasas8.length != sarasas9.length) {
    console.log("Pirmas sarašas yra nelygus antram.");
}

const sarasas0 = ["Šuo", "Katė", "Žiurkėnas"];
const sarasas11 = ["Saulė", "Mėnulis"];

if (sarasas0.length >= sarasas11.length) {
    console.log("Pirmas sarašas yra lygus arba didesnis už antrą.");
}

const sarasas12 = ["Šuo", "Katė", "Žiurkėnas"];
const sarasas13 = ["Saulė", "Mėnulis"];

if (sarasas12.length <= sarasas13.length) {
    console.log("Antras sarašas yra lygus arba didesnis už pirmą.");
}

console.log('-------');

//atvirkciai zodis

function stringReverse(text) {
    if (typeof text !== 'string') {
        return 'Reikalinga string tipo reiksme.';
    }

    let result = '';

    for (let i = 0; i < text.length; i++) {
        result = text[i] + result;
    }

    return result;
}

console.log(stringReverse('kompiuteris'));
