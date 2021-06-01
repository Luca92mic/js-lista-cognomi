var cognome = prompt('Qual è il tuo cognome?')


cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1).toLowerCase();


var altriCognomi = ['Pinco', 'Pallo', 'Boolean', 'Martino', 'Rossi'];


altriCognomi.push(cognome); 
altriCognomi = altriCognomi.sort()

document.getElementById('cognomi').innerHTML = altriCognomi;

for(var i = 0; i < altriCognomi.length; i++){
    if (cognome == altriCognomi[i]){
        document.getElementById('posizione').innerHTML = i + 1;
    }
}