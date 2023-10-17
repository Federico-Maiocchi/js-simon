// console.log('hello');

// inizializziamo una varibile dove invocheremo la funzione getArrayOfRandomIntBetween
// i numeri generati partiranno da 1 a 100 e saranno 5 
const numberRandom = getArrayOfRandomIntBetween(1, 100, 5);
// console.log(numberRandom);

// creo un alert per far visualizzare i numeri all'utente aggiugnendo la variabile numberRandom 
alert('Memorizza i seguenti numeri: ' + numberRandom)














// FUNCTION

// funzione per generare numeri random con un numero minmo e uno massimo
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