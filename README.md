# Simon Says

- visualizzare tramite un unico alert 5 numeri casuali
- i numeri casuali verrano messi dentro un array, tramite due funzioni:
    - per creare dei numeri casuali usero la funzione " function getRandomIntInclusive(min, max) "
    - per inserire i numeri casuali dentro un array "  getArrayOfRandomIntBetween(minRange, maxRange, number) "
- inizializziamo una variabile dove invocheremo la funzione getArrayOfRandomIntBetween per avere un array con 5 numeri casuali da 1 a 100
- stampo un alert dove dico al giocatore di memorizzarsi i 5 numeri, dentro l'altre metterò la varibile dell'array

- far partire un timer di 30 secondi
    - creeremo una funzione che ci permetterà di fare un conto da 0 a 30 secondi (non sarà visibile a all'utente)

- l'utente deve inserire i numeri precedenti uno alla volta tramite prompt
- faremo una funzione ci da modo di
    - chiedere all'utente un numero massimo di volte i numeri
    - reciclare i suoi numeri nell'array
    - controllare se ci sono numeri uguali
        - SE ci sono alora verrano tolti. (non considerati)

- confontiamo i numeri random con i numeri dell'utente
    - SE ci sono dei numeri uguali
        - stamperemo le parole e i numeri visibile all'utente