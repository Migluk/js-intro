// Parašykite for ciklą, kuris apskaičiuotų visų skaičių nuo 5 iki 15 sumą
let sum = 0;
for (i = 5; i <= 15; i++) {
    sum += 1;
console.log('Visu skaiciu suma ', sum);
}

// Parašykite for ciklą, kuris į console išvestų visas žodžio ‘Vakaras’ raides po vieną
function zodisAtvirksciai(text) {
    if (typeof text !== 'string') {
        return 'Reikalinga string tipo reiksme.';
    }

    let result = '';


    for (i = 0; i < text.length; i++){
        result = text[i] + result;
    }
        return result;
}
console.log(zodisAtvirksciai('Drugelis'));

//Parašykite for ciklą, kuris išvestų šešeto daugybos lentelę

const k = 6;
for (let i = 1; i <= 10; i++) {
    console.log(`${k} * ${i} = ${k * i}`);
    
}

//Parašykite for ciklą, kuris išvestų į console tik tuos skaičius, jei jie yra pinigų reikšmės (1, 2, 5, 10, 20, 50, 100, 200, 500)
console.log("\nNauja užduotis\n")

for(let i = 1; i<=500; i++)
{
    if(i === 1 || i ===2 || i=== 5 || i===10 || i===20  || i===50 || i===100  || i===200 || i===500)
    {
        console.log(i)
    }
}

//Parašykite for ciklą, kuris iš sąrašo Raidės [ ‘L’, ‘a’, ‘b’, ‘a’, ‘s’] sudėliotų kintamąjį Žodis, kurio reikšmė yra ‘Labas’
console.log("\nNauja užduotis\n")
const Raidės = [ 'L', 'a', 'b', 'a', 's'];

let zodisLabas = '';

for(let i= 0; i<Raidės.length; i++)
{
    zodisLabas +=Raidės[i];
}

console.log(zodisLabas)

//Parašykite for ciklą, kuris atskirai atspausdintų kiekvieną žodžio Programavimas raidę.
console.log("\nNauja užduotis\n")
let zodisP = 'Programavimas';

for (let i = 0; i<zodisP.length; i++)
{
    console.log(zodisP[i]);
}


//Parašykite for ciklą, kuris sudaugintų skaičius nuo 2 iki 10. Už ciklo išveskite į consolę reikšmę

// ats = 2*3*4*5*6*7*8*9*10
console.log("\nNauja užduotis\n")
let Daugyba = 2;

for (let i = 3; i<=10; i++)
{
    Daugyba = Daugyba * i;
}

console.log(Daugyba);


//Parašykite for ciklą, kuris į console išvestų skaičius nuo 20 iki 10
console.log("\nNauja užduotis\n")

for(let i= 20; i>=10; i--)
{
    console.log(i);
}


//Parašykite for ciklą, kuris į console išvestų sąrašo RaidėsAtbulai [ ‘s’, ‘a’, ‘b’, ‘a’, ‘L’]  elementus vienas po kito nuo galo iki pradžios
console.log("\nNauja užduotis\n")
const RaidėsAtbulai = ['s', 'a', 'b', 'a', 'L'];

for(let i = RaidėsAtbulai.length-1; i>=0; i--)
{
    console.log(RaidėsAtbulai[i])
}


//Parašykite for ciklą, kuris į console išvestų kintamojo ŽodisAtbulas = ‘samivamargorP’  atskiras raides vieną po kitos
console.log("\nNauja užduotis\n")
let ŽodisAtbulas = 'samivamargorP'

for(let i= 0; i<ŽodisAtbulas.length; i++)
{
    console.log(ŽodisAtbulas[i]);
}


//Parašykite for ciklą, kuris į consolę išveda skaičius nuo 1 iki 100. Jei skaičius dalinasi iš 7, papildomai į consolę yra išvedamas žodis ‘lucky’
console.log("\nNauja užduotis\n")

for(let i = 1; i<=100; i++)
{
    
    if(i%7==0)
    {
        console.log("lucky " + i);
    }
    else
    {
        console.log(i);
    }
    
}


//Parašykite for ciklą, kuris į console po vieną atskirai išvestų dvigubas sąrašo Dvigubinti [2, 3, 6, 8] reikšmes (Gaunamas atsakymas: 4, 6, 12, 16)
console.log("\nNauja užduotis\n")
const Dvigubinti = [2, 3, 6, 8];

for(let i = 0; i<Dvigubinti.length; i++)
{
    console.log(Dvigubinti[i]*2);
}


//Parašykite for ciklą, kuris iš sąrašo DaugSkaičių [2, 14, 10, 1000, 503, 8, 0] išvestų visus skaičius, kurie yra mažesni už 100
console.log("\nNauja užduotis\n")
const DaugSkaičių = [2, 14, 10, 1000, 503, 8, 0]

for(let i = 0; i<DaugSkaičių.length; i++)
    {
        if(DaugSkaičių[i]<100)
        {
            console.log(DaugSkaičių[i]);
        }
    }
    


//Parašykite for ciklą, kuris apskaičiuos visų nelyginių skaičių nuo 1 iki 30 sumą
console.log("\nNauja užduotis\n")

let NelSuma = 0;

for(let i =1; i<30; i+=2)
{
    NelSuma = NelSuma + i;
}

console.log(NelSuma);


console.log("---------------------------")


//Parašykite funkciją, kuri patikrina, ar skaičius yra didesnis nei 18 (pvz., patikrinimas, ar žmogus pilnametis).
console.log("\nNauja užduotis\n")

function Ar18(skaicius)
{
    if(skaicius>18)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(Ar18(25));
console.log(Ar18(5));
console.log(Ar18(18));


//Parašykite funkciją, kuri patikrina, ar perduotas žodis yra „labas“.
console.log("\nNauja užduotis\n")

function arLabas (zodis)
{
    if(zodis ==='labas')
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(arLabas('Labas'));


//Parašykite funkciją, kuri patikrina, ar žodis yra ilgesnis nei 5 simboliai.
console.log("\nNauja užduotis\n")

function Ar5 (zodis)
{
    if(zodis.length>5)
    {
        console.log('Ilgesnis negu 5')
    }
    else
    {
        console.log('Trumpesnis negu 5')
    }
}

Ar5('Iki');


//Parašykite funkciją, kuri grąžina pirmąją perduoto žodžio raidę.
console.log("\nNauja užduotis\n")

function PirmaRaide (zodis)
{
    return zodis[0];
}


console.log(PirmaRaide('Apelsinas'));

//Parašykite funkciją, kuri grąžina paskutinę perduoto žodžio raidę.
console.log("\nNauja užduotis\n")

function PaskutineRaide (zodis)
{
    return zodis[zodis.length-1];
}


console.log(PaskutineRaide("Ananasas"));

//Parašykite funkciją, kuri patikrina, ar žodis prasideda raide „A“.
console.log("\nNauja užduotis\n")

function PirmaRaideA (zodis)
{
    if(zodis[0]==='A'||zodis[0]==='a')
    {
        return 'taip';
    }
    else
    {
        return 'nea';
    }
}


console.log(PirmaRaideA('Apelsinas'));


//Parašykite funkciją, kuri grąžina žodžio ilgį.
console.log("\nNauja užduotis\n")

function ZodzioIlgis (zodis)
{
    return zodis.length;
}

console.log(ZodzioIlgis('labas'));


//Parašykite funkciją, kuri grąžina „Ilgas“ arba „Trumpas“, priklausomai nuo žodžio ilgio. Ilgas žodis yra 7 simbolių ilgio arba didesnis, o trumpas yra 6 simbolių ilgio arba trumpesnis
console.log("\nNauja užduotis\n")

function IlgasTrumpas (zodis)
{
    if(zodis.length>=7)
    {
        return "Ilgas";
    }
    else
    {
        return "trumpas";
    }
}


console.log(IlgasTrumpas("Pomidoras"))
console.log(IlgasTrumpas("Labas"))

//Parašykite funkciją, kuri patikrina, ar du žodžiai yra vienodi.
console.log("\nNauja užduotis\n")


function duVienodi (zodis1, zodis2)
{

    if(zodis1===zodis2)
    {
        console.log("zodziai lygus");
    }
    else
    {
        console.log("zodziai nelygus");
    }

}


duVienodi("Labas", "labas");
duVienodi("Labas", "Labas");