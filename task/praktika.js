// 1 užduotis - mokytojo suvestinė

const mokinys1 = ['Tomas', 10, 10, 8, 9, 8 ];
const mokinys2 = ['Paule', 7, 8, 10, 6, 7];
const mokinys3 = ['Milda', 5, 5, 4, 3, 4];

function mokinioVidurkis (mokinys)
{
    console.log('Mokinio vardas; ' + mokinys[0]);
    let vidurkis = (mokinys[1]+mokinys[2]+mokinys[3]+mokinys[4]+mokinys[5])/5;
    if(vidurkis>3,5)
    {
        console.log(mokinys[0] + ' išlaikė. Jo/Jos vidurkis: ' + vidurkis);
    }
    else
    {
        let vidurkisNaujas = ((vidurkis*5)+10)/6
        console.log(mokinys[0] + ' neišlaikė. Jo/Jos dabartinis vidurkis: ' + vidurkis);
        if(vidurkisNaujas>=3,5)
        {
            console.log(mokinys[0] + ' išlaikytu kursą jeigu gautu vieną dešimtuką');
        }
    }
}

mokinioVidurkis(mokinys1);
mokinioVidurkis(mokinys2);
mokinioVidurkis(mokinys3);

console.clear();

// 2 užduotis - filmų rekomendacija

const filmai =
[ ["Interstellar", "Sci-fi", 8.7],
["Oppenheimer", "Biography", 8.3],
["Spirited Away", "Adventure", 8.6],
["Parasite", "Thriller", 8.5],
["Howl's Moving Castle", "Fantasy", 8.2],]
    
    const megstamiausiasZanras = "Adventure";
    const filmoIvertis = 8.0;
    
    function findMoviesByPreference(filmai, zanras, ivertis){
        const suitableMovies = filmai.filter(filmas => filmas[1] === zanras && filmas[2] >= ivertis);
        
        if (suitableMovies.length > 0) {
        console.log("Filmai, kurie man patiktų: ");
        suitableMovies(filmas => console.log(`- ${filmas[0]} (${filmas[1]}, įvertis: ${filmas[2]}`));
	} else {
	console.log("Nerasta filmų, atitinkančių mano norų.");
	}
}

findMoviesByPreference(filmai, megstamiausiasZanras, filmoIvertis);

