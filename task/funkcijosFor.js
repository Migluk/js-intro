let tekstas = 'labai geras daiktas yra televizorius aš su juo galiu matyti jus'




//for ciklas suskaičiuoti raidėms.


function raidziuSkaiciuokle (zodis, raide )
{
    let sumaS = 0;
    for (let i = 0; i < zodis.length; i++)
        {
            if (zodis[i]===raide)
            {
                sumaS+=1;
            }
        }
    return sumaS;
}


console.log(raidziuSkaiciuokle (tekstas, 'a'));

console.log('--------');

const balses = ['a', 'e', 'i', 'o', 'u']

let DaugiausiaiRaides = 0;
let MaxRaide = '';

for (let i = 0; i < balses.length; i++)
{
    console.log('raidė: ' + balses[i] + ' pasitaiko: ' +raidziuSkaiciuokle(tekstas, balses[i]) + ' kartus.');

    if (raidziuSkaiciuokle(tekstas, balses[i]) > DaugiausiaiRaides)
    {
        DaugiausiaiRaides = raidziuSkaiciuokle(tekstas, balses[i])
        MaxRaide = balses[i];
    }
}

console.log("Kadangi raidžių " + MaxRaide + " yra daugiausiai, reikia užsakyti " + DaugiausiaiRaides + " raidžių rinkinius");


