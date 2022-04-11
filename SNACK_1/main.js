/* Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca,
 modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: 
-nel primo array solo le auto a benzina, 
-nel secondo solo le auto a diesel, 
-nel terzo il resto delle auto.

Infine stampa separatamente i 3 array. */

const elenco_automoboli = [
    {
        'marca': 'Abarth',
        'modello': 'Abarth500',
        'alimentazione': 'benzina'
    },

    {
        'marca': 'Alfa Romeo',
        'modello': 'Alfa Romeo Stelvio',
        'alimentazione': 'disel'
    },

    {
        'marca': 'Audi',
        'modello': 'audi e-tron',
        'alimentazione': 'gpl'
    },

    {
        'marca': 'Citroen',
        'modello': 'Citroen C4',
        'alimentazione': 'elettrico'
    },
    {
        'marca': 'Abarth',
        'modello': 'Abarth500',
        'alimentazione': 'benzina'
    },

    {
        'marca': 'Alfa Romeo',
        'modello': 'Alfa Romeo Stelvio',
        'alimentazione': 'disel'
    },

    {
        'marca': 'Audi',
        'modello': 'audi e-tron',
        'alimentazione': 'gpl'
    },

    {
        'marca': 'Citroen',
        'modello': 'Citroen C4',
        'alimentazione': 'elettrico'
    },



]

const auto_benzina = elenco_automoboli.filter((auto) =>{
    return auto.alimentazione === 'benzina'
})

const auto_disel = elenco_automoboli.filter((auto) =>{
    return auto.alimentazione === 'disel'
})

const auto_restanti = elenco_automoboli.filter((auto) =>{
    return auto.alimentazione !== 'disel' && auto.alimentazione !== 'benzina'
})


console.log(auto_benzina)
console.log(auto_disel)
console.log(auto_restanti)