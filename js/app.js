// FUNCTION

// Funzione per generare numeri random con un numero minmo e uno massimo
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Funzione per generare numeri(non doppi) dentro un array
function getArrayOfRandomIntBetween(minRange, maxRange, number) {
    // inizialliziamo un array vuoto 
    const numbersArray = [];

    // con un ciclo while riempiremo il nostro array
    while (numbersArray.length < number) {
        // inizializziamo una const n = che genererà un numero random da rangeMin a RangeMax 
        const n = getRandomIntInclusive(minRange, maxRange);
        // console.log(n);

        // SE il nostro array(includes)  contiene dei numeri doppi === false
        // oppure si può usare (!numbersArray.includes(n))
        if (!numbersArray.includes(n)) {
            // allora tutti i numeri diversi verranno inseriti nel nostro array
            numbersArray.push(n);
        }

        // ALTRIMENTI se ci sono dei numeri doppi, verranno toltli e si ripeterà il ciclo per trovare numeri differenti
    }

    // return array di numeri generati
    return numbersArray
}

// Funzione per fermare il conteggio
function tempoScaduto() {
	console.log('Il tempo è scaduto!')

   

	// interrompiano l'interval
	clearInterval(idInterval)
}

// Funzione per ricavari i numeri digitati dall'utente
function numberInsertUser() {
    
    // ciclo for che mi permette di ciclare i prompt dell'utente, dove indico le volte che chiederò all'utente i numeri cioè 5
    for (let i = 0; i < 5; i++) {
        
        // converto la stringa e e ciclo i prompt
        const numbersUser = parseInt(prompt('quali sono i numeri?'))
        // console.log(numbersUser);

        // serve a cancellare i numeri dobbi,verranno considerati solo numeri unici
        if (!userArray.includes(numbersUser)) {

            // i numeri verranno inseriti dentro l'array utente
            userArray.push(numbersUser);

            // se il numero del pc (random) è uguale ai numeri digitati dall'utente 
            if (numberRandom.includes(numbersUser)) {

                // aumento il punteggio dell'untente
                scoreUser++;

                // indicherò all'utente il suo punteggio indicando i numeri che ha indovinato
                const scoreTot = `hai memorizzato ${scoreUser} : ${userArray}` 
                
                // elemento presa dal Dom è usuale al totale (punteggio utente) (lista numeri utente )
                score.innerHTML = scoreTot;

            }
        } 

        console.log(numbersUser);
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log('hello');

// inizializziamo una varibile dove invocheremo la funzione getArrayOfRandomIntBetween
// i numeri generati partiranno da 1 a 100 e saranno 5 
const numberRandom = getArrayOfRandomIntBetween(1, 100, 5);
console.log(numberRandom);

// creo un alert per far visualizzare i numeri all'utente aggiugnendo la variabile numberRandom 
alert('Memorizza i seguenti numeri: ' + numberRandom );

// dichiaro un array vuoto dove inserirò dentro i numeri digitati dall'utente
let userArray = []

// avvio un conteggio che parte da 1 a 30 secondi e poi si stoppa il conteggio
setTimeout (numberInsertUser, 30000);
console.log(userArray)

// dichiaro una variabile del punteggio utente uguale a zero
let scoreUser = 0;

// prendo dal dom la classe score all'interno del div
let score = document.querySelector('.score');























