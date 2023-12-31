// Un oggetto rappresenta una finestra di un browser e contiene due campi: un array di tab aperte e un numero che indica l'indice della tab aperta nell'array:
// {
//     "tab": ["Facebook", "GitHub", "Gmail"],
//     "activeTab": 0
// }
// Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.

//Guardo se c'è un social aperto
    //faccio un array con soli social
    //se tab contiene uno dei social
        //rimuovo da tab
        //se la tab che rimuovo = activetab
            //activetab+1

const browserWindow = {
    "tab": ["Facebook", "GitHub", "Gmail", "Instagram", "Yahoo", "Twitter", "Bing"],
    "activeTab": 0
}

const socials = ["Facebook", "TikTok", "Instagram", "Youtube"];

browserWindow.tab = browserWindow.tab.filter((element) => {
    if(!socials.includes(element.toLowerCase()))
    return true;
});

console.log(browserWindow);