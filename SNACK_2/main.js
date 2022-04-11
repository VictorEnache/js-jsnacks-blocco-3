/* A partire da un array di stringhe, crea un secondo array formattando
le stringhe del primo array in minuscolo e con l’iniziale maiuscola. */


const colori = ['blu', 'ROSSO', 'VerDe', 'Marrone']

const colori_formattati = colori.map((colore) =>{
    const colore_minuscolo = colore.toLowerCase()
    const colore_capitalizzato = colore_minuscolo.replace (colore_minuscolo[0], colore_minuscolo[0].toLocaleUpperCase())
    
    return colore_capitalizzato

})

console.log(colori_formattati)