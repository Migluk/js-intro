/*1. užd. Padarykite funkciją, kuriai perdavus vieną iš (akmuo, popierius, šulinys) reikšmių, 
kompiuteris su jumi sužaistų vaskiči raundą ir išvestų rezultatą į console. Kompiuterio 
pasirinkimai turi būti atsitiktiniai.
*/

const words = ['akmuo', 'popierius', 'sulinys'];
const number = Math.floor(Math.random() * words.length);
const word = words[number];
console.log(word);


/*2 užd  Parašykite funkcija, kuri parodytų kiek žmonių reikia norint pakelti tam tikro svorio 
krovinį, kai vienas žmogus gali pakelti x kg. Pvz: 10kg svorį turi kelti 5 žmonės, jei vienas jų gali 
pakelti 2.4 kg 
*/

function howMuch(weight, peopleWeight) {
    if (peopleWeight <= 0) {
        return 'Negali pakelti krovinio';
    }
    const neededPeople = Math.ceil(weight / peopleWeight);
    return neededPeople;
}

const package = 50;
const onePerson = 5.7;

console.log(`Reikia ${howMuch(package, onePerson)} zmoniu.`);
