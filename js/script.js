
// PAROLA PALINDROMA
document.getElementById("pali").addEventListener("click", function() {
  // Richiesta di una parola all'utente
  var parola= prompt("Inserisci una parola:");
  // Variabili di supporto
  var prova= "";
  var prova2= "";
  // Metodo per ottenere il numero di lettere nella parola
  var numLettere= parola.length;
  // Metà del totale di lettere presenti
  var halfWord= numLettere/2;
  // PROVA PROVA PROVA PROVA
  for (var i=0; i<halfWord; i++) {
   prova += parola.charAt(i);
  }
  for (var a=numLettere ; a > halfWord; a--);
    prova2 += parola.charAt(a);
    console.log(prova+" "+prova2);
});


// PARI o DISPARI
document.getElementById("dispari").addEventListener("click", function() {
  // Richiesta "pari o dispari" all'utente
  var answer= prompt("PARI(p) o DISPARI(d)?");
  // Richiesta numero da 1 a 5 all'utente
  var numero= parseInt(prompt("Inserisci un NUMERO da 1 a 5:"));
  // Generatore di numero random da 1 a 5
  var numRandom = Math.floor(Math.random() *5)+1;
  console.log(numRandom);
  // Condizioni
  var somma= numero + numRandom;
  if (somma % 2 == 0 && answer == "p") {
    alert("Hai VINTO");
  } else if ( somma % 2 != 0 && answer == "d") {
    alert("Hai VINTO");
  } else {
    alert("LOSER");
  }
});
