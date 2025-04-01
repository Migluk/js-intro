/*
reikalinga funkcija, kuri gauna vartotojo amziu (metai) ir atitinkamai grazina zodi:
- suauges
- vaikas
amziaus ribos kriterijus: >=18 metu.
*/

function isAdult(age) {
    if (age >= 18) {
        return 'suauges';
    } else {
        return 'vaikas';
    }
    }
    
console.log(isAdult(18, '-->', 'suauges'));
console.log(isAdult(17, '-->', 'vaikas'));
console.log(isAdult(99, '-->', 'suauges'));
console.log(isAdult(17, '-->', 'vaikas'));



