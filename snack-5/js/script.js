// Creare un array di oggetti di squadre di volley.
// Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
// Generare numeri random al posto delle nelle proprietà:
// punti fatti e falli subiti


const volleyTeam = [
    {nome: "Volley Torino",
    puntifatti: 10,
    falli: 20,
    },
    {nome: "Volley Napoli",
    puntifatti: 10,
    falli: 20,
    },
    {nome: "Volley Cagliari",
    puntifatti: 10,
    falli: 20,
    },
    {nome: "Volley Ancona",
    puntifatti: 10,
    falli: 20,
    },
]

volleyTeam.forEach((team) => {
    team.puntifatti = parseInt(Math.random() * 10) + 1
    team.falli = parseInt(Math.random() * 10) + 1
    console.log(team)
})