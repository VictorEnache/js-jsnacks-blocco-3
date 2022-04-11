/* 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il 
nome e cognome e l’indicazione se può guidare, in base all’età. */


const elenco_persone = [
    {
        nome: 'Ginevra',
        cognome: 'Giolitto',
        eta:20
    },

    {
        nome: 'Victor',
        cognome: 'Enache',
        eta:22
    },

    {
        nome: 'Alice',
        cognome: 'Bianchi',
        eta:12
    },

    {
        nome: 'Daniele',
        cognome: 'Marconi',
        eta:35
    },

    {
        nome: 'Anna',
        cognome: 'Rossi',
        eta:17
    },
]

const patentati = elenco_persone.map((persona) => {
    let puo_guidare;
    if (persona.eta >= 18){
        puo_guidare = 'può guidare'
    }
    else{
        puo_guidare = 'non può guidare'
    }

    return `${persona.nome} ${persona.cognome} ${puo_guidare} perchè ha ${persona.eta} anni`
})

console.log(patentati)

patentati.forEach((patentato) =>{
    console.log(patentato)
})