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

console.log(somma(1, 1));
console.log(sommaAnonima(2, 2));
console.log(sommaArrow(3, 3));



/***********************************************************************
# SNACK 2
***********************************************************************/

// ARROW QUADRATO NUMERO
const quadrato = (num) => num * num;

console.log(quadrato(3));



/***********************************************************************
# SNACK 3
***********************************************************************/

const sommaCallback = (num1, num2) => num1 + num2;

const moltiplicaCallback = (num1, num2) => num1 * num2;

const eseguiOperazione = (num1, num2, callback) => {
    return callback(num1, num2);
}

console.log(eseguiOperazione(1, 1, sommaCallback));
console.log(eseguiOperazione(2, 2, moltiplicaCallback));



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

timer1();



/***********************************************************************
# SNACK 5
***********************************************************************/

function stampaOgniSecondo(ms) {
    return function (messaggio) {
        return setInterval(() => {
            console.log(messaggio);
        }, ms);
    }
};

const stampaMessaggio = stampaOgniSecondo(1000);

const intervalMessaggio = stampaMessaggio('Messaggio!');

setTimeout(() => {
    clearInterval(intervalMessaggio);
    console.log("Stop intervalMessaggio");
}, 5000);



/***********************************************************************
# SNACK 6
***********************************************************************/

function creaContatoreAutomatico(ms) {
    return function (counter) {
        return setInterval(() => {
            counter++;
            console.log(counter);
        }, ms)
    }
}

const contatoreAutomatico = creaContatoreAutomatico(1000);

let contatoreIncrementale = 0;

const intervalContatoreAutomatico = contatoreAutomatico(contatoreIncrementale);

setTimeout(() => {
    clearInterval(intervalContatoreAutomatico);
    console.log("Stop contatoreAutomatico");
}, 5000);