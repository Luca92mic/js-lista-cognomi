var mailUtente = prompt('Inserisci la tua email')
var mailUtente = mailUtente.toLowerCase();



var mailList = ['giulio@gmail.com', 'paolo@hotmail.it', 'pincopallo@gmail.com', 'pallopinco@gmail.com', 'boolean@boolean.it'];

var veroFalso = 'L\'email non è presente nel database'

for(var i = 0; i < mailList.length; i++){
    if (mailUtente == mailList[i]){
        veroFalso = 'L\'email è presente nel database';
    } 
}

document.getElementById('mail').innerHTML = veroFalso;s