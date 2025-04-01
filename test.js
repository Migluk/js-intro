// kaip išvedame informaciją į terminalą?



//kaip yra sumuojamos reikšmės?

let a= 5
let b = 10
let c = 15

let d = a + b + c

//console.log(a+b+c)



//kaip parodyti sumą nekeičiant reikšmių?


//kaip elgtis su skaitinėmis ir raidinėmis reikšmėmis?

let pirmas = 5

let antras = 5

let trecias = 5


//console.log(pirmas+antras+trecias)


//kaip galime sukeisti reikšmes?

let i = 10
let j = 1




//yra i ir yra j

let k // tuščias

k = i //i reikšmė yra nebesvarbi ---> k=10


i = j //i 'puode' pateko j  ------> 1 ---> k=10, i = 1, j = 1

j = k // j = 10

const mokinys1 = ['Tomas', 10, 10, 8, 9, 8 ];
const mokinys2 = ['Paule', 7, 8, 10, 6, 7];
const mokinys3 = ['Milda', 5, 4, 4, 2, 5];

function mokinioVidurkis (mokinys)
{
    console.log('Mokinio vardas; ' + mokinys[0]);
    let vidurkis = (mokinys[1]+mokinys[2]+mokinys[3]+mokinys[4]+mokinys[5])/5;
    if(vidurkis>3,5)
    {
        console.log(mokinys[0] + ' išlaikė. Jo/Jos vidurkis:' + vidurkis);
    }
        
}
else
    {
        let vidurkisNaujas = ((vidurkis*5)+10)/6
        console.log(mokinys[0] + ' neišlaikė. Jo/Jos dabartinis vidurkis:' + vidurkis);
        if(vidurkisNaujas>=3,5)
    }     