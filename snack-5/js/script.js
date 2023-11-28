// Creare un array di oggetti di squadre di volley.
// Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
// Generare numeri random al posto delle nelle proprietà:
// punti fatti e falli subiti


const volleyTeams = [
    {nome: "Volley Torino",
    punti_fatti: getRandomNumber(200, 500),
    falli: getRandomNumber(20, 50),
    },
    {nome: "Volley Napoli",
    punti_fatti: getRandomNumber(200, 500),
    falli: getRandomNumber(20, 50),
    },
    {nome: "Volley Cagliari",
    punti_fatti: getRandomNumber(200, 500),
    falli: getRandomNumber(20, 50),
    },
    {nome: "Volley Ancona",
    punti_fatti: getRandomNumber(200, 500),
    falli: getRandomNumber(20, 50),
    },
]

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max - min) + min;
}

//Nel caso volessi inserire da fuori i punteggi
// volleyTeams.forEach((element) => {
// 	element.punti_fatti = getRandomNumer(200, 500);
// 	element.falli = getRandomNumer(200, 500);
// }


console.log(volleyTeams);