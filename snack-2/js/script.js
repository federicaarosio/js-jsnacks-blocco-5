// Crea un array di oggetti che rappresentino delle persone.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.


//array di persone: nome, cognome, età

const persone = [
    {
        nome: "Marta",
        cognome: "Lamperti",
        eta: 22
    },
    {
        nome: "Mattia",
        cognome: "Fossati",
        eta: 14
    },
    {
        nome: "Serena",
        cognome: "Rossi",
        eta: 26
    },
    {
        nome: "Giulio",
        cognome: "Ludovici",
        eta: 52
    },
    {
        nome: "Elena",
        cognome: "Barbieri",
        eta: 30
    },
]

const newArrayPersone = persone.map ((singolaPersona) => {
    if(singolaPersona.eta >= 18) {
        return `${singolaPersona.nome} ${singolaPersona.cognome} ha ${singolaPersona.eta} anni e può guidare`;
    } else {
        return `${singolaPersona.nome} ${singolaPersona.cognome} ha ${singolaPersona.eta} anni e NON può guidare`;
    }
})

console.log(newArrayPersone);