// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
// Infine stampa separatamente i 3 array.



const auto = [
    {
        marca: "fiat",
        modello: "panda",
        alimentazione: "benzina"
    },
    {
        marca: "fiat",
        modello: "panda",
        alimentazione: "metano"
    },
    {
        marca: "fiat",
        modello: "panda",
        alimentazione: "elettrico"
    },
    {
        marca: "fiat",
        modello: "panda",
        alimentazione: "gpl"
    },
    {
        marca: "fiat",
        modello: "panda",
        alimentazione: "benzina"
    },
    {
        marca: "fiat",
        modello: "panda",
        alimentazione: "metano"
    },
    {
        marca: "fiat",
        modello: "panda",
        alimentazione: "elettrico"
    },
    {
        marca: "fiat",
        modello: "panda",
        alimentazione: "gpl"
    },
    {
        marca: "fiat",
        modello: "panda",
        alimentazione: "diesel"
    },
    {
        marca: "fiat",
        modello: "panda",
        alimentazione: "gpl"
    },
];

//array con auto a benzina
const autoBenzina = auto.filter((automobile) => {
    if(automobile.alimentazione === "benzina") {
        return true;
    }
});
console.log(autoBenzina);

//array con auto a diesel
const autoDiesel = auto.filter((automobile) => {
    if(automobile.alimentazione === "diesel") {
        return true;
    }
});
console.log(autoDiesel);

//array con altre auto
const altreAuto = auto.filter((automobile) => {
    if(automobile.alimentazione !== "diesel" && automobile.alimentazione !== "benzina") {
        return true;
    }
});
console.log(altreAuto);
