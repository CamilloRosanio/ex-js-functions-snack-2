/***********************************************************************
# SNACK 1
***********************************************************************/

// DICHIARATIVA
function somma(num1, num2) {
    return num1 + num2;
};

// ANONIMA ASSEGNATA
const sommaAnonima = function (num1, num2) {
    return num1 + num2;
};

// ARROW
const sommaArrow = (num1, num2) => {
    return num1 + num2;
};

// INVOCA
// console.log(somma(1, 1));
// console.log(sommaAnonima(2, 2));
// console.log(sommaArrow(3, 3));



/***********************************************************************
# SNACK 2
***********************************************************************/

// ARROW QUADRATO NUMERO
const quadrato = (num) => num * num;

// Alternativa con operatore **, che indica la moltiplicazione per sè stesso.
const quadrato2 = num => num ** 2;

// INVOCA
// console.log(quadrato(3));



/***********************************************************************
# SNACK 3
***********************************************************************/

const sommaCallback = (num1, num2) => num1 + num2;

const moltiplicaCallback = (num1, num2) => num1 * num2;

const eseguiOperazione = (num1, num2, callback) => {
    return callback(num1, num2);
}

// INVOCA
// console.log(eseguiOperazione(1, 1, sommaCallback));
// console.log(eseguiOperazione(2, 2, moltiplicaCallback));



/***********************************************************************
# SNACK 4
***********************************************************************/

function creaTimer(ms) {
    return function () {
        setTimeout(() => {
            console.log('Tempo scaduto!');
        }, ms);
    }
};

const timer1 = creaTimer(1000);

// INVOCA
// timer1();



/***********************************************************************
# SNACK 5
***********************************************************************/

// MIA VERSIONE
// function stampaOgniSecondo(ms) {
//     return function (messaggio) {
//         return setInterval(() => {
//             console.log(messaggio);
//         }, ms);
//     }
// };

// CORREZIONE
// Non era necessario dichiarare un Interval all'interno di una funzione.
function stampaOgniSecondo(ms) {
    setInterval(() => {
        console.log(messaggio);
    }, ms);
};

const stampaMessaggio = stampaOgniSecondo(1000);

// INVOCA
// const intervalMessaggio = stampaMessaggio('Messaggio!');
// setTimeout(() => {
//     clearInterval(intervalMessaggio);
//     console.log("Stop intervalMessaggio");
// }, 5000);



/***********************************************************************
# SNACK 6
***********************************************************************/

// MIA VERSIONE
// function creaContatoreAutomatico(ms) {
//     return function (counter) {
//         return setInterval(() => {
//             counter++;
//             console.log(counter);
//         }, ms)
//     }
// }

// CORREZIONE
// Rivedere il concetto di "Closure" dell funzioni HOF.
// Counter è una variabile che viene "ricordata" dalla funzione nel Return.
function creaContatoreAutomatico(messaggio, ms) {
    let counter = 0;
    return () => {
        setInterval(() => {
            counter++;
            console.log(messaggio + ': ' + counter);
        }, ms)
    }
};

// Ogni nuovo Contatore creato crea il suo SCOPE indipendente con il suo COUNTER indipendente.
const contatoreAutomatico = creaContatoreAutomatico('messaggio', 1000);

// Questo non serve più, + dentro la funzione principale.
// let contatoreIncrementale = 0;

// INVOCA
// const intervalContatoreAutomatico = contatoreAutomatico(contatoreIncrementale);
// setTimeout(() => {
//     clearInterval(intervalContatoreAutomatico);
//     console.log("Stop contatoreAutomatico");
// }, 5000);



/***********************************************************************
# SNACK 7
***********************************************************************/

// MIA VERSIONE
// function eseguiEferma(messaggio, ms, stop) {
//     return function () {
//         const interval = setInterval(() => {
//             console.log(messaggio)
//         }, ms);

//         setTimeout(() => {
//             clearInterval(interval);
//             console.log("eseguiFerma");
//         }, stop);
//     };
// }

// CORREZIONE
// Non serviva fare il Return di una funzione dentro eseguiEferma.
function eseguiEferma(messaggio, ms, stop) {
    const interval = setInterval(() => {
        console.log(messaggio)
    }, ms);

    setTimeout(() => {
        clearInterval(interval);
        console.log("eseguiFerma");
    }, stop);
}

const usaFerma = eseguiEferma('Messaggio da fermare', 1000, 5000);

// INVOCA
// usaFerma();



/***********************************************************************
# SNACK 8 (BONUS)
***********************************************************************/

// MIA VERSIONE
// function contoAllaRovescia(num) {
//     let timer = setInterval(() => {
//         console.log(num);
//         if (num === 0) {
//             console.log("Tempo scaduto!");
//             clearInterval(timer);
//         }
//         num--;
//     }, 1000);
// }

// CORREZIONE
// Bisogna usare il concetto di CLOSURE delle HOF anche qui. Quindi variabili con Scope indipendente.
// In questo caso, funzionano entrambe le versioni.
function contoAllaRovescia(num) {
    let counter = num;
    const timer = setInterval(() => {
        console.log(num);
        if (counter > 0) {
            console.log(counter);
            counter--;
        } else {
            console.log('Tempo scaduto!');
            clearInterval(timer);
        }
    }, 1000);
}

// INVOCA
// const conteggio = contoAllaRovescia(5);



/***********************************************************************
# SNACK 9 (BONUS)
***********************************************************************/

const op1 = () => console.log('Operazione 1');
const op2 = () => console.log('Operazione 2');
const op3 = () => console.log('Operazione 3');

const operazioni = [op1, op2, op3];

// MIA VERSIONE (in questo caso 2 versioni)

// VERSIONE CON CICLO FOR
// function sequenzaOperazioniV1(array, ms) {
//     for (let i = 0; i < array.length; i++) {
//         setTimeout(() => {
//             array[i]();
//         }, ms * i);
//     }
// }

// // VERSIONE CON IF
// function sequenzaOperazioniV2(array, ms) {
//     let i = 0;
//     function eseguiOperazione() {
//         if (i < array.length) {
//             array[i]();
//             i++;
//             setTimeout(eseguiOperazione, ms);
//         }
//     }
//     eseguiOperazione();
// }

// CORREZIONE
function sequenzaOperazioni(array, ms) {
    array.array.forEach((operazione, index) => {
        setTimeout(() => {
            operazione();
        }, ms * index)
    });
}

// INVOCA
// sequenzaOperazioniV1(operazioni, 1000);
// sequenzaOperazioniV2(operazioni, 1000);



/***********************************************************************
# SNACK 10 (BONUS)
***********************************************************************/

function stampaMessaggioThrottler(messaggio) {
    console.log(messaggio);
}

// MIA VERSIONE

function creaThrottler(funzione, limite) {
    let ultimaChiamata = 0;
    let chiamate = 0;

    return function (...args) {
        const adesso = new Date().getTime();
        if (adesso - ultimaChiamata >= limite) {
            funzione(...args);
            ultimaChiamata = adesso;
            chiamate++;
            console.log('Funzione eseguita');
        } else {
            console.log('Call ignorata');
        }
        console.log(`**********CALL ESEGUITE: ${chiamate}`);
    };
}

// NOTA:
/* La funzione che viene passata al THROTTLER non sappiamo quanti PARAMS potrebbe avere, se 1 o 20 o 100.
Ecco perchè alla funzione dentro il RETURN impostiamo uno SPREAD OPERATOR (REST PARAMS) così che a prescindere dal numero
di argomenti necessari, la funzione li accetti tutti. */

// CORREZIONE
/* La mia versione andava bene. Semplicemente in questa non vengon o contate le chiamate eseguite e non c'è il
console.log delle chiamate ignorate. Posso infatti decidere di non usare ELSE. */
// function creaThrottler(funzione, limite) {
//     let ultimaChiamata = 0;

//     return function (...args) {
//         const ora = Date.now();

//         if (ora - ultimaChiamata >= limite) {
//             ultimaChiamata = ora;
//             funzione(...args);
//         }
//     }
// }

const throttledStampa = creaThrottler(stampaMessaggioThrottler, 2000);

// INVOCA
throttledStampa('Call 1');
throttledStampa('Call 2');
setTimeout(() => throttledStampa('Call 3'), 2500);
setTimeout(() => throttledStampa('Call 4'), 3500);

